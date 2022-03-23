<template>
  <h1>What symptoms are you experiencing?</h1>
  <p>Please select all that apply in the dropdown menu below.</p>
  <br />
  <p>
    Do you have any symptoms:
    <input type="radio" name="symptomscheck" value="Yes" />Yes
    <input type="radio" name="symptomscheck" value="No" />No <br />
  </p>
  <div id="scrollable" style="text-align: left">
    <table id="symptoms">
      <thead>
        <tr>
          <!-- Temporary fix to align table header alignment -->
          <th>
            ------------------- Symptoms ---------------------------------------
          </th>
          <th>Select --------------------------------------</th>
          <!-- <th>Symptoms</th>
          <th>Select</th> -->
        </tr>
      </thead>
      <tbody>
        <!-- Severe symtoms -->
        <tr>
          <td>Bluish lips and/or face</td>
          <td>
            <input
              type="checkbox"
              id="checkbox1"
              name="checkbox1"
              value="Bluish lips and/or face"
            />&nbsp;
          </td>
        </tr>

         <tr>
          <td>Chest pain</td>
          <td>
            <input
              type="checkbox"
              id="checkbox2"
              name="checkbox2"
              value="Chest pain"
            />&nbsp;
          </td>
        </tr>

        <tr>
          <td>Hard time staying awake</td>
          <td>
            <input
              type="checkbox"
              id="checkbox3"
              name="checkbox3"
              value="Hard time staying awake"
            />&nbsp;
          </td>
        </tr>

        <tr>
          <td>Sudden confusion</td>
          <td>
            <input
              type="checkbox"
              id="checkbox4"
              name="checkbox4"
              value="Sudden confusion"
            />&nbsp;
          </td>
        </tr>


         <tr>
          <td>Shortness of breath</td>
          <td>
            <input
              type="checkbox"
              id="checkbox5"
              name="checkbox5"
              value="Shortness of breath"
            />&nbsp;
          </td>
        </tr>

        <tr>
          <td>Uncontrollable bleeding</td>
          <td>
            <input
              type="checkbox"
              id="checkbox6"
              name="checkbox6"
              value="Uncontrollable Bleeding"
            />&nbsp;
          </td>
        </tr>

        <!-- Non severe symtoms -->
        <tr>
          <td>Aches</td>
          <td>
            <input
              type="checkbox"
              id="checkbox7"
              name="checkbox7"
              value="Aches"
            />&nbsp;
          </td>
        </tr>


        <tr>
          <td>Cough</td>
          <td>
            <input
              type="checkbox"
              id="checkbox8"
              name="checkbox8"
              value="Cough"
            />&nbsp;
          </td>
        </tr>
        <tr>
          <td>Diarrhoea</td>
          <td>
            <input
              type="checkbox"
              id="checkbox9"
              name="checkbox9"
              value="Diarrhoea"
            />&nbsp;
          </td>
        </tr>
        <tr>
          <td>Fever</td>
          <td>
            <input
              type="checkbox"
              id="checkbox10"
              name="checkbox10"
              value="Fever"
            />&nbsp;
          </td>
        </tr>
        <tr>
          <td>Flu</td>
          <td>
            <input
              type="checkbox"
              id="checkbox11"
              name="checkbox11"
              value="Flu"
            />&nbsp;
          </td>
        </tr>
        <tr>
          <td>Headache</td>
          <td>
            <input
              type="checkbox"
              id="checkbox12"
              name="checkbox12"
              value="Headache"
            />&nbsp;
          </td>
        </tr>
        <tr>
          <td>Loss of taste or smell</td>
          <td>
            <input
              type="checkbox"
              id="checkbox13"
              name="checkbox13"
              value="Loss of taste or smell"
            />&nbsp;
          </td>
        </tr>
       


      </tbody>
    </table>
  </div>
  <br /><br />
  <button id="confirmbutton" type="button" v-on:click="confirmsymptoms()">
    Confirm
  </button>
</template>

<script>
import firebaseApp from "../firebase.js";
import { getFirestore } from "firebase/firestore";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import {getAuth} from 'firebase/auth'
const db = getFirestore(firebaseApp);

export default {
  name: "Symptoms1",

  data() {
    return {
            email: "",
        }
  }, 

  methods: {
    async confirmsymptoms() {
      var blueFace = document.getElementById("checkbox1");
      var chestpain = document.getElementById("checkbox2");
      var tired = document.getElementById("checkbox3");
      var suddenConfuse = document.getElementById("checkbox4");
      var breath = document.getElementById("checkbox5");
      var bleeding = document.getElementById("checkbox6");
      var aches = document.getElementById("checkbox7");
      var cough = document.getElementById("checkbox8");
      var diarrhoea = document.getElementById("checkbox9");
      var fever = document.getElementById("checkbox10");
      var flu = document.getElementById("checkbox11");
      var headache = document.getElementById("checkbox12");
      var tastesmell = document.getElementById("checkbox13");

      console.log(aches);
      console.log(chestpain);

      var selected = [];
      if (aches.checked) {
        selected.push(aches.value);
      }
      if (chestpain.checked) {
        selected.push(chestpain.value);
      }
      if (cough.checked) {
        selected.push(cough.value);
      }
      if (diarrhoea.checked) {
        selected.push(diarrhoea.value);
      }
      if (fever.checked) {
        selected.push(fever.value);
      }
      if (flu.checked) {
        selected.push(flu.value);
      }
      if (headache.checked) {
        selected.push(headache.value);
      }
      if (tastesmell.checked) {
        selected.push(tastesmell.value);
      }
      if (breath.checked) {
        selected.push(breath.value);
      }
      if (blueFace.checked) {
        selected.push(blueFace.value);
      }
      if (suddenConfuse.checked) {
        selected.push(suddenConfuse.value);
      }
      if (bleeding.checked) {
        selected.push(bleeding.value);
      }
      if (tired.checked) {
        selected.push(tired.value);
      }

      console.log(selected);
      try {
        /*
        const docRef = await updateDoc(doc(db, "details", "symptoms"), {
          Symptoms: selected,
        });
        */
      // get corresponding user 
      const auth = getAuth()
      this.email = auth.currentUser.email
    
       const docRef = doc(db, "details", this.email); 
       await updateDoc(docRef, {
         symptoms: arrayUnion(...selected)
       })
        console.log(docRef);
        alert(`Your symptoms have been recorded!`);
        this.$router.push({ path: "/confirmation" });
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    },
  },
};
</script>

<style>
p {
  font-size: 20px;
}
table {
  background-color: rgba(183, 218, 250, 1);
  width: 50%;
  border: 2px solid black;
  margin-left: auto;
  margin-right: auto;
  font-size: 20px;
}
td {
  border: 2px solid black;
}
thead {
  background-color: #f5f5dd;
}
tbody {
  height: 250px;
  overflow: auto;
}
td {
  padding: 7px 20px;
  display: inline-block;
  width: 49.5%;
  box-sizing: border-box;
}
input[type="checkbox"] {
  transform: scale(2);
  width: 200px;
}
tr,
tbody {
  display: block;
}
#confirmbutton {
  border-style: none;
  width: 150px;
  height: 35px;
  border-radius: 10px;
  background-color: #f5f5dd;
  display: inline-block;
  font-size: 1rem;
}
</style>