<template>
  <h1>What symptoms are you experiencing?</h1>
  <p>Please check and confirm your symptoms below.</p>
  <br />
  <div id="confirmation">
    <p id="display"></p>
  </div>
  <br /><br />
  <button
    id="editbutton"
    type="button"
    v-on:click="this.$router.push({ path: '/selection' })"
  >
    Edit
  </button>
  &nbsp;
  <button id="confirmbutton" type="button" v-on:click="confirmation()">
    Confirm
  </button>
</template>

<script>
import firebaseApp from "../firebase.js";
import { getFirestore } from "firebase/firestore";
import { getDoc, doc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const db = getFirestore(firebaseApp);

export default {
  name: "Symptoms2",

  data() {
    return {
      email: "",
    };
  },

  mounted() {
    const auth = getAuth();
    this.email = auth.currentUser.email;
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.display(user);
      }
    });
  },

  methods: {
    async display(user) {
      let docSnap = await getDoc(doc(db, "details", String(user.email)));

      let selected = docSnap.data().symptoms;
      console.log("The user displays the following symptoms: \n" + selected);

      let text = "";
      let count = 0;
      selected.forEach(appendFunction);
      document.getElementById("display").innerHTML = text;

      function appendFunction(symp) {
        count += 1;
        text += "<u>Symptom " + count + "</u>: " + symp + "<br><br>";
      }
    },
    async confirmation() {
      let docSnap = await getDoc(doc(db, "details", String(this.email)));
      let selected = docSnap.data().symptoms;
      if (
        selected.includes("Bluish lips and/or face") ||
        selected.includes("Chest pain") ||
        selected.includes("Hard time staying awake") ||
        selected.includes("Shortness of Breath") ||
        selected.includes("Sudden confusion") ||
        selected.includes("Sudden weakness") ||
        selected.includes("Uncontrollable bleeding")
      ) {
        this.$router.push({ path: "/med-facils" });
      } else {
        this.$router.push({ path: "/intensity" });
      }
    },
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