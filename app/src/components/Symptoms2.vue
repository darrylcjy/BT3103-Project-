<template>
  <h1>What symptoms are you experiencing?</h1>
  <p>Please check and confirm your symptoms below.</p>
  <br />
  <div id="confirmation">
    <p id="display"></p>
    <!-- <p><u>Symptom 1</u>: Flu</p>
    <p><u>Symptom 2</u>: Cough</p>
    <p><u>Symptom 3</u>: Loss of taste or smell</p> -->
  </div>
  <br /><br />
  <button
    id="editbutton"
    type="button"
    v-on:click="this.$router.push({ path: '/selection' })"
  >
    Reset
  </button>
  &nbsp;
  <button
    id="confirmbutton"
    type="button"
    v-on:click="this.$router.push({ path: '/intensity' })"
  >
    Confirm
  </button>
</template>

<script>
import firebaseApp from "../firebase.js";
import { getFirestore } from "firebase/firestore";
import { getDoc, doc } from "firebase/firestore";

const db = getFirestore(firebaseApp);

export default {
  name: "Symptoms2",

  mounted() {
    async function display() {
      let docSnap = await getDoc(doc(db, "user_id", "symptoms"));
      let selected = docSnap.data().Symptoms;
      console.log("The user displays the following symptoms: \n" + selected);

      let text = "";
      let count = 0;
      selected.forEach(appendFunction);
      document.getElementById("display").innerHTML = text;

      function appendFunction(symp) {
        count += 1;
        text += "<u>Symptom " + count + "</u>: " + symp + "<br><br>";
      }
    }
    display();
  },
};
</script>

<style>
#confirmbutton {
  border-style: none;
  width: 150px;
  height: 35px;
  border-radius: 10px;
  background-color: #f5f5dd;
  display: inline-block;
  font-size: 1rem;
}

#editbutton {
  border-style: none;
  width: 150px;
  height: 35px;
  border-radius: 10px;
  background-color: #f56f6f;
  display: inline-block;
  font-size: 1rem;
}

#display {
  font-size: 25px;
}

/* div {
  margin-left: auto;
  margin-right: auto;
}
#confirmation p {
  text-align: left;
} */
</style>