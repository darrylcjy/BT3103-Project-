<template>
    <!-- Personal details form to fill in -->
  <form id="form" @submit.prevent noValidate>
      <div class="inputs">
        <div class="container">
            <label for="name" class="form-label">NRIC Name</label>
            <input type="text" id="name" class="form-text" name="name" placeholder="Name" v-model="name"> 
            <i class="fas fa-check-circle"></i> 
            <i class="fas fa-exclamation-circle"></i> 
            <p class="error">Error Message</p>
        </div>
        <div class="second-row">
            <div class="container">
                <label for="phone" class="form-label">HP no.</label>
                <input type="number" name="phone" id="phone" class="form-text hp" placeholder="Contact Number" v-model="phone">
                <i class="fas fa-check-circle"></i> 
                <i class="fas fa-exclamation-circle"></i> 
                <p class="error">Error Message</p>
            </div>
            
            <div class="container">
                <label for="year" class="form-label">Year of Birth</label>
                <input type="number" name="year" id="year" class="form-text" placeholder="Year" min = "1900" max="2022" v-model="year">
                <i class="fas fa-check-circle"></i> 
                <i class="fas fa-exclamation-circle"></i> 
                <p class="error">Error Message</p>
            </div> 
        </div>

        <div class="container">
            <label for="address" class="form-label">Address</label>
            <input type="text" name="address" id="address" class="form-text" placeholder="Home Address" v-model="address">
            <i class="fas fa-check-circle"></i> 
            <i class="fas fa-exclamation-circle"></i> 
            <p class="error">Error Message</p>
        </div>

        <div class="container">
            <label for="postal" class="form-label">Postal Code</label>
            <input type="text" name="postal" id="postal" class="form-text" placeholder="Postal Code" v-model="postal">
            <i class="fas fa-check-circle"></i> 
            <i class="fas fa-exclamation-circle"></i> 
            <p class="error">Error Message</p>
        </div>
       
        <div class="container">
            <label for="vaccination-status" class="form-label">Vaccination Status</label>
            <select name="vaccination-status" class="form-text dropdown" id="vaccination-status" v-model="vax">
                <option disabled value="" selected>Please select one of the following: </option>
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
          <button class="details-btn" @click="save()" type= "submit">Submit</button>
      </div>
  </form>

</template>

<script>
import firebaseApp from "../firebase.js";
import {getFirestore} from "firebase/firestore";
import {doc, setDoc} from "firebase/firestore";
const db = getFirestore(firebaseApp);

export default {
    data() {
        return {
            name: "",
            phone: "",
            year: "",
            address: "",
            vax: "",
            postal: ""
        }
    },

    props: {
        email:String
    }, 

    methods: {
        async save() {
            try {
                const nameval = this.name.trim()
                const phoneval = this.phone
                const yearval = this.year
                const addressval = this.address.trim()
                const postal = this.postal.trim()
                const vaxstatus = this.vax
                if (this.checkValid(nameval, phoneval, yearval, addressval, vaxstatus, postal)) {
                    const docRef = await setDoc(doc(db, "details", this.email), {name: nameval, phone: phoneval, year: yearval, address: addressval, postal: postal, vax: vaxstatus})
                    console.log(docRef)
                    alert("Personal Details Saved Successfully")
                    document.getElementById('form').reset()
                    this.$router.push({name:'Health Dec'})
                }
            } catch (error) {
                console.error("Error: ", error)
            }
        },
        // Form Validation
        checkValid(nameval, phoneval, yearval, addressval, vaxstatus, postal) {
            const nameElem = document.getElementById("name")
            const phoneElem = document.getElementById("phone")
            const yearElem = document.getElementById("year")
            const addElem = document.getElementById("address")
            const postalElem = document.getElementById("postal")
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

            if ((phoneval.toString().charAt(0) === "8" || phoneval.toString().charAt(0) === "9" || phoneval.toString().charAt(0) === "6" ) && phoneval.toString().length == 8) {
                //success
                this.setSuccess(phoneElem)
            } else {
                this.setFail(phoneElem, "Enter a valid SG phone number")
                valid = false
            }
        
            let currentyear = new Date().getFullYear()
            if (yearval < 1900 || yearval > currentyear || yearval === "") {
                this.setFail(yearElem, "Enter a valid year")
                valid = false
            } else {
                this.setSuccess(yearElem)
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
                this.setFail(vaxElem, "Please select one of the available options")
                valid = false
            } else {
                //success class
                this.setSuccess(vaxElem)
            }

            if (postal === "" || isNaN(postal) || postal.length != 6) {
                this.setFail(postalElem, "Enter a valid SG postal code (6 digits)")
                valid = false
            } else {
                this.setSuccess(postalElem)
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
    margin: 0.5rem 1.5rem;
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
    margin-bottom: 1rem;
}

i {
    display: none;
    position: absolute;
    top:2.7rem;
    right: -3.1rem;
    font-size: 1.5rem;
}

.container i.fa-angle-down{
    display:block;
    right: 0rem;
}

/* Styling after form submission
show success or failure */
.container.success .form-text{
    border-color: rgb(54, 170, 54);
    background-color: rgb(240, 252, 240);
}

.container.success i.fa-check-circle {
    display:block;
    color: rgb(54, 170, 54);
}

.container.fail .form-text {
    border-color: rgb(214, 90, 45);
    background-color: rgb(255, 248, 248);
}

.container.fail i.fa-exclamation-circle {
    display:block;
    color:rgb(214, 90, 45);
}

.container.fail .error {
    display:block;
    color:rgb(214, 90, 45);
}

.container.fail {
    margin-bottom: 0rem;
}

.error {
    display: none;
    margin-top: 0.25rem;
    margin-bottom: 0.5rem;
}

h1 {
    text-align: center;
    margin-bottom: 0px;
}


.btn {
    text-align: right;
}

.details-btn {
    all:unset;
    cursor: pointer;
    font-size:1.5rem;
    background-color: #F5F5DD;
    padding: 5px 0.5rem;
    border-radius: 10px;
    width: 6rem;
    text-align: center;
}

.details-btn:hover,
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