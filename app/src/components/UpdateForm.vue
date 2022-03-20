<template>
    <!-- Personal details Update to fill in -->
  <form id="form" @submit.prevent>
      <div class="inputs">
        <div class="container">
            <label for="name" class="form-label">NRIC Name</label>
            <input type="text" id="name" class="form-text" name="name" placeholder="Name"> 
            <i class="fas fa-check-circle"></i> 
            <i class="fas fa-exclamation-circle"></i> 
            <p class="error">Error Message</p>
        </div>
        <div class="second-row">
            <div class="container">
                <label for="phone" class="form-label">HP no.</label>
                <input type="tel" name="phone" id="phone" class="form-text hp" placeholder="Contact Number">
                <i class="fas fa-check-circle"></i> 
                <i class="fas fa-exclamation-circle"></i> 
                <p class="error">Error Message</p>
            </div>
            
            <div class="container">
                <label for="age" class="form-label">Age</label>
                <input type="number" name="age" id="age" class="form-text" placeholder="Age" min = "1" max="130">
                <i class="fas fa-check-circle"></i> 
                <i class="fas fa-exclamation-circle"></i> 
                <p class="error">Error Message</p>
            </div> 
        </div>

        <div class="container">
            <label for="address" class="form-label">Address</label>
            <input type="text" name="address" id="address" class="form-text" placeholder="Home Address">
            <i class="fas fa-check-circle"></i> 
            <i class="fas fa-exclamation-circle"></i> 
            <p class="error">Error Message</p>
        </div>
       
        <div class="container">
            <label for="vaccination-status" class="form-label">Vaccination Status</label>
            <select name="vaccination-status" class="form-text dropdown" id="vaccination-status">
                <option disabled selected value="">Please select one of the following: </option>
                <option value="Received booster shot">Received booster shot</option>
                <option value="Completed full regimen (2 dose)">Completed full regimen (2 dose) </option>
                <option value="Recieved one dose">Recieved one dose</option>
                <option value="Unvaccinated">Unvaccinated</option>
            </select>
            
            <i class="fas fa-angle-down"></i> 
            <i class="fas fa-check-circle"></i> 
            <i class="fas fa-exclamation-circle"></i> 
            <p class="error">Error Message</p>
        </div>

      </div>
    
      <div class="btn">
          <button class="data-btn" @click="getData()">Past Inputs</button>
          <button class="details-btn" @click="save()" type= "submit">Update</button>
      </div>
  </form>

</template>

<script>
import firebaseApp from "../firebase.js";
import {getFirestore} from "firebase/firestore";
import {doc, setDoc, getDoc} from "firebase/firestore";
import {getAuth} from 'firebase/auth'
const db = getFirestore(firebaseApp);


export default {
    data() {
        return {
            email: "",
        }
    },
    methods: {
        async getData() {
            const auth = getAuth()
            this.email = auth.currentUser.email

            let z = await getDoc(doc(db, "details", String(this.email)))

            let data = z.data()
            console.log(data.name)
            document.getElementById("name").value = data.name
            document.getElementById("phone").value = data.phone
            document.getElementById("age").value = data.age
            document.getElementById("address").value = data.address
            document.getElementById("vaccination-status").value = data.vax
        },
        async save() {
            try {
                const nameval = document.getElementById("name").value.trim()
                const phoneval = document.getElementById("phone").value.split(" ").join("")
                const ageval = document.getElementById("age").value
                const addressval = document.getElementById("address").value.trim()
                const vaxstatus = document.getElementById("vaccination-status").value
                if (this.checkValid(nameval, phoneval, ageval, addressval, vaxstatus)) {
                    const docRef = await setDoc(doc(db, "details", this.email), {name: nameval, phone: phoneval, age: ageval, address: addressval, vax: vaxstatus})
                    console.log(docRef)
                    alert("Updated Personal Details Saved Successfully")
                    document.getElementById("form").reset()
                    this.removeClassName()
                    this.$router.push({name:'Profile'})
                }
            } catch (error) {
                console.error("Error: ", error)
            }
        },
        // Form Validation
        checkValid(nameval, phoneval, ageval, addressval, vaxstatus) {
            const nameElem = document.getElementById("name")
            const phoneElem = document.getElementById("phone")
            const ageElem = document.getElementById("age")
            const addElem = document.getElementById("address")
            const vaxElem = document.getElementById("vaccination-status")
            let valid = true
            
            //conditions
            if (nameval === "") {
                //add fail class + message
                this.setFail(nameElem, "Name cannot be blank")
                valid = false
            } else {
                //success class
                this.setSuccess(nameElem)
            }

            if ((phoneval.charAt(0) === "8" || phoneval.charAt(0 === "9") || phoneval.charAt(0) === "6" ) && phoneval.length == 8) {
                //success
                this.setSuccess(phoneElem)
            } else {
                this.setFail(phoneElem, "Please enter a valid Singapore Phone Number")
                valid = false
            }

            if (ageval < 0 || ageval > 150 || ageval === "") {
                this.setFail(ageElem, "Please enter a valid age")
                valid = false
            } else {
                this.setSuccess(ageElem)
            }

            if (addressval === "") {
                //add fail class + message
                this.setFail(addElem, "Address cannot be blank")
                valid = false
            } else {
                //success class
                this.setSuccess(addElem)
            }

            if (vaxstatus === "") {
                //add fail class + message
                this.setFail(vaxElem, "Please select one of the available options from the above dropdown menu")
                valid = false
            } else {
                //success class
                this.setSuccess(vaxElem)
            }

            return valid
        },

        setFail(elem, msg) {
            const container = elem.parentElement
            const error = container.querySelector('p')

            console.log(error)
            error.innerHTML = msg
            container.className = "container fail"
        },

        setSuccess(elem) {
            const container = elem.parentElement
            container.className = "container success"
        },

        removeClassName() {
            const elems = [document.getElementById("name"),document.getElementById("phone"), document.getElementById("age"), document.getElementById("address"), document.getElementById("vaccination-status")]

            elems.forEach((elem) => {
                const container = elem.parentElement
                container.className = "container"
            })
        }
    }
}
</script>

<style scoped>
#form {
    max-width: 650px;
    margin: auto;
    padding: 0rem 2rem 1rem 1rem;
}

.inputs {
    margin: 1.5rem 1.5rem;
    text-align: left; 
}

.form-label {
    display:block;
    font-size: 1.5rem;
    margin-bottom: 0.25rem;
}

.form-text {
    all:unset;
    display: block;
    width: 100%;
    border: 2.5px solid grey;
    border-radius: 5px;
    font-size: 1.5rem;
    padding: 0.5rem;
}

.container {
    position: relative;
}

i {
    visibility: hidden;
    position: absolute;
    top:2.7rem;
    right: -3.1rem;
    font-size: 1.5rem;
}

.container i.fa-angle-down{
    visibility: visible;
    right: 0rem;
}

/* Styling after form submission
show success or failure */
.container.success .form-text{
    border-color: rgb(54, 170, 54);
}

.container.success i.fa-check-circle {
    visibility: visible;
    color: rgb(54, 170, 54);
}

.container.fail .form-text {
    border-color: rgb(214, 90, 45);
}

.container.fail i.fa-exclamation-circle {
    visibility: visible;
    color:rgb(214, 90, 45);
}

.container.fail .error {
    visibility: visible;
    color:rgb(214, 90, 45);
}

.error {
    visibility: hidden;
    margin-top: 0.4rem;
}

h1 {
    text-align: center;
    margin-bottom: 0px;
}


.btn {
    text-align: right;
}

.details-btn, 
.data-btn {
    all:unset;
    cursor: pointer;
    font-size:1.5rem;
    background-color: #F5F5DD;
    padding: 5px 2rem;
    border-radius: 10px;
    text-align: center;
    margin: 0rem 1rem;
}

.details-btn:hover,
.data-btn:hover,
.form-text:hover {
    box-shadow: 1px 1px 3px grey;
}

.second-row {
    display: flex;
    justify-content: space-between;
}


@media(max-width: 700px) {
    .second-row{
        flex-direction: column;
    }
}

</style>