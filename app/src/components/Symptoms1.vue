<template>
  <h1>What symptoms are you experiencing?</h1>
  <p>Please select all that apply in the dropdown menu below.</p>
  <br />
  <p>
    Do you have any symptoms:
    <input
      type="radio"
      name="symptomscheck"
      v-model="FormEntry"
      value="Yes"
      id="yes"
    />
    <label for="yes">Yes</label>
    <input
      type="radio"
      name="symptomscheck"
      v-model="FormEntry"
      value="No"
      id="no"
    />
    <label for="no">No</label>
    <br />
  </p>
  <div id="scrollable" style="text-align: left" v-show="FormEntry == 'Yes'">
    <table id="symptoms">
      <thead>
        <tr>
          <!-- Temporary fix to align table header alignment -->
          <th>Symptoms</th>
          <th>Select</th>
          <!-- <th>Symptoms</th>
          <th>Select</th> -->
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Aches</td>
          <td>
            <input
              type="checkbox"
              id="checkbox1"
              name="checkbox1"
              value="Aches"
            />&nbsp;
          </td>
        </tr>

        <tr>
          <td>Bluish lips and/or face</td>
          <td>
            <input
              type="checkbox"
              id="checkbox2"
              name="checkbox2"
              value="Bluish lips and/or face"
            />&nbsp;
          </td>
        </tr>

        <tr>
          <td>Chest pain</td>
          <td>
            <input
              type="checkbox"
              id="checkbox3"
              name="checkbox3"
              value="Chest pain"
            />&nbsp;
          </td>
        </tr>

        <tr>
          <td>Cough</td>
          <td>
            <input
              type="checkbox"
              id="checkbox4"
              name="checkbox4"
              value="Cough"
            />&nbsp;
          </td>
        </tr>

        <tr>
          <td>Diarrhoea</td>
          <td>
            <input
              type="checkbox"
              id="checkbox5"
              name="checkbox5"
              value="Diarrhoea"
            />&nbsp;
          </td>
        </tr>

        <tr>
          <td>Fever</td>
          <td>
            <input
              type="checkbox"
              id="checkbox6"
              name="checkbox6"
              value="Fever"
            />&nbsp;
          </td>
        </tr>

        <tr>
          <td>Flu</td>
          <td>
            <input
              type="checkbox"
              id="checkbox7"
              name="checkbox7"
              value="Flu"
            />&nbsp;
          </td>
        </tr>

        <tr>
          <td>Hard time staying awake</td>
          <td>
            <input
              type="checkbox"
              id="checkbox8"
              name="checkbox8"
              value="Hard time staying awake"
            />&nbsp;
          </td>
        </tr>
        <tr>
          <td>Headache</td>
          <td>
            <input
              type="checkbox"
              id="checkbox9"
              name="checkbox9"
              value="Headache"
            />&nbsp;
          </td>
        </tr>
        <tr>
          <td>Loss of taste or smell</td>
          <td>
            <input
              type="checkbox"
              id="checkbox10"
              name="checkbox10"
              value="Loss of taste or smell"
            />&nbsp;
          </td>
        </tr>
        <tr>
          <td>Shortness of breath</td>
          <td>
            <input
              type="checkbox"
              id="checkbox11"
              name="checkbox11"
              value="Shortness of breath"
            />&nbsp;
          </td>
        </tr>
        <tr>
          <td>Sudden confusion</td>
          <td>
            <input
              type="checkbox"
              id="checkbox12"
              name="checkbox12"
              value="Sudden confusion"
            />&nbsp;
          </td>
        </tr>
        <tr>
          <td>Sudden weakness</td>
          <td>
            <input
              type="checkbox"
              id="checkbox13"
              name="checkbox13"
              value="Sudden weakness"
            />&nbsp;
          </td>
        </tr>
        <tr>
          <td>Uncontrollable bleeding</td>
          <td>
            <input
              type="checkbox"
              id="checkbox14"
              name="checkbox14"
              value="Uncontrollable bleeding"
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
import { doc, updateDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const db = getFirestore(firebaseApp);

export default {
  name: "Symptoms1",

  data() {
    return {
      email: "",
      FormEntry: "",
    };
  },

  methods: {
    async confirmsymptoms() {
      if (this.FormEntry == "") {
        alert("Please select an option!");
        return;
      }

      var aches = document.getElementById("checkbox1");
      var bluelipsface = document.getElementById("checkbox2");
      var chestpain = document.getElementById("checkbox3");
      var cough = document.getElementById("checkbox4");
      var diarrhoea = document.getElementById("checkbox5");
      var fever = document.getElementById("checkbox6");
      var flu = document.getElementById("checkbox7");
      var stayawake = document.getElementById("checkbox8");
      var headache = document.getElementById("checkbox9");
      var tastesmell = document.getElementById("checkbox10");
      var breath = document.getElementById("checkbox11");
      var confusion = document.getElementById("checkbox12");
      var weakness = document.getElementById("checkbox13");
      var bleeding = document.getElementById("checkbox14");

      var selected = [];
      if (aches.checked) {
        selected.push(aches.value);
      }
      if (bluelipsface.checked) {
        selected.push(bluelipsface.value);
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
      if (stayawake.checked) {
        selected.push(stayawake.value);
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
      if (confusion.checked) {
        selected.push(confusion.value);
      }
      if (weakness.checked) {
        selected.push(weakness.value);
      }
      if (bleeding.checked) {
        selected.push(bleeding.value);
      }

      console.log(selected);
      try {
        /*
        const docRef = await updateDoc(doc(db, "details", "symptoms"), {
          Symptoms: selected,
        });
        */
        // get corresponding user
        const auth = getAuth();
        this.email = auth.currentUser.email;

        const docRef = doc(db, "details", this.email);
        await updateDoc(docRef, {
          symptoms: selected,
          dateOfIssue:
            new Date().getDate() +
            "-" +
            (new Date().getMonth() + 1) +
            "-" +
            new Date().getFullYear(),
        });
        console.log(docRef);
        if (this.FormEntry == "Yes") {
          if (!selected.length) {
            alert("Please select at least one symptom!");
          } else {
            alert(`Your symptoms have been recorded!`);

            // reseting symptoms table
            document.getElementById("checkbox1").checked = false;
            document.getElementById("checkbox2").checked = false;
            document.getElementById("checkbox3").checked = false;
            document.getElementById("checkbox4").checked = false;
            document.getElementById("checkbox5").checked = false;
            document.getElementById("checkbox6").checked = false;
            document.getElementById("checkbox7").checked = false;
            document.getElementById("checkbox8").checked = false;
            document.getElementById("checkbox9").checked = false;
            document.getElementById("checkbox10").checked = false;
            document.getElementById("checkbox11").checked = false;
            document.getElementById("checkbox12").checked = false;
            document.getElementById("checkbox13").checked = false;
            document.getElementById("checkbox14").checked = false;

            this.$router.push({ path: "/confirmation" });
          }
        } else {
          alert(`No symptoms declared.`);
          this.$router.push({ path: "/self-isolation-checkout" });
        }
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    },
  },
};
</script>

<style scoped>
p,
label {
  font-size: 20px;
}

label {
  cursor: pointer;
  color: rgb(155, 155, 155);
  padding-right: 0.5rem;
}

input[type="radio"]:checked + label {
  color: #2c3e50;
}

input:hover {
  cursor: pointer;
  box-shadow: none;
}

table {
  background-color: rgba(183, 218, 250, 1);
  width: 50%;
  border: 1px solid black;
  margin-left: auto;
  margin-right: auto;
  font-size: 20px;
  border-collapse: collapse;
}
th {
  text-align: center;
}

thead {
  background-color: #f5f5dd;
}

tbody {
  height: 250px;
  overflow: auto;
  overflow-x: hidden;
}

td,
th {
  padding: 7px 20px;
  display: inline-block;
  width: 49.5%;
  box-sizing: border-box;
}

input[type="checkbox"] {
  transform: scale(2);
  width: 100%;
}

tr,
tbody {
  display: block;
}

tr {
  border: 1px solid black;
}

thead tr:first-child {
  padding-right: 1rem;
}

tr > td:last-child,
tr > th:last-child {
  border-left: 3px solid black;
}

#confirmbutton {
  border-style: none;
  width: 150px;
  height: 35px;
  border-radius: 10px;
  background-color: #f5f5dd;
  display: inline-block;
  font-size: 1rem;
  cursor: pointer;
}

#confirmbutton:hover {
  box-shadow: 1px 1px 3px grey;
}
</style>