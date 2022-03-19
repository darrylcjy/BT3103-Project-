<template>
    <!-- Personal details form to fill in -->
  <form id="form">
      <div class="inputs">
        <label for="name" class="form-label">NRIC Name</label>
        <input type="text" id="name" class="form-text" name="name" required>
        <div class="second-row">
            <div>
                <label for="phone" class="form-label">HP no.</label>
                <input type="tel" name="phone" id="phone" class="form-text hp" pattern="[3689]{1}[0-9]{7}" required >
            </div>
            
            <div>
                <label for="age" class="form-label">Age</label>
                <input type="number" name="age" id="age" class="form-text" min="0" max="120" required >
            </div> 
        </div>

        <label for="address" class="form-label">Address</label>
        <input type="text" name="address" id="address" class="form-text" required>

        <label for="vaccination-status" class="form-label">Vaccination Status</label>
        <select name="vaccination-status" class="form-text dropdown" id="vaccination-status">
            <option value="booster">Received booster shot</option>
            <option value="two">Completed full regimen (2 dose) </option>
            <option value="one">Recieved at least one dose</option>
            <option value="none">Unvaccinated</option>
        </select>

      </div>
    
      <div class="btn">
          <button type="submit" class="details-btn" @click="save()">Next</button>
      </div>
  </form>

</template>

<script>
import firebaseApp from "@/firebase.js"
import {getFirestore} from "firebase/firestore"
import {doc, setDoc} from "firebase/firestore"
const db = getFirestore(firebaseApp)

export default {
    props: {
        email:String
    }, 

    methods: {
        async save() {
            alert("Saving Personal Details")
            try {
                var name = document.getElementById("name").value
                var phone = document.getElementById("phone").value
                var age = document.getElementById("age").value
                var address = document.getElementById("address").value
                var vax = document.getElementById("vaccination-status").value
                const docRef = await setDoc(doc(db, "Details", this.email), {name: name, phone: phone, age: age, address: address, vax: vax})
                console.log(docRef)
                document.getElementById('form').reset()
            } catch (error) {
                console.error("Error: ", error)
            }
        }
    }

}
</script>

<style scoped>
#form {
    max-width: 650px;
    margin: auto;
    padding: 1rem 2rem 1rem 1rem;
}

.inputs {
    margin: 1.5rem 1.5rem
}

.form-label {
    display:block;
    font-size: 1.5rem;
}

.form-text {
    all:unset;
    width: 100%;
    border: 1px solid black;
    border-radius: 5px;
    font-size: 1.5rem;
    padding: 0.5rem;
    margin-bottom: 0.75rem;
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