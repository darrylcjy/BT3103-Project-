<template>
  <!-- get the user name here and replace placeholder {username} and {facilType}-->
  <div>
    <div class="header">
      <h2>
        <b
          >{{ name }}, for the symptoms you present, we reccommend you to visit
          a
          <u
            ><div v-if="this.emergency">Hospital Emergency Department.</div>
            <div v-else>GP clinic/ Polyclinic.</div></u
          ></b
        >
      </h2>
      <h2>The following are the closest recommended facilities to you:</h2>
      <br /><br />
    </div>

    <div class="scrollable">
      <!-- add v-for when clinic list obtained -->
      <div
        class="card"
        v-on:click="this.$router.push({ path: '/facil-details' })"
      >
        <h3 id="scrollspyHeading1">{{ clinicName }}</h3>
        <h4>{{ location }} {{ unitno }} {{ postalCode }}</h4>
        <h4>Distance: {{ dist }}km away</h4>
        <h4>Number of patients in queue: {{ queueLen }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import firebaseApp from "../firebase.js";
import { getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const db = getFirestore(firebaseApp);

export default {
  data() {
    return {
      name: "",
      email: "",
      // replace this when clinic data can be obtained
      emergency: false,
      clinicName: "1 BISHAN MEDICAL",
      location: "283 BISHAN STREET 22",
      unitno: "#01-191",
      postalCode: "SINGAPORE 750283",
      dist: Math.round(Math.random() * 100) / 10,
      queueLen: Math.floor(Math.random() * 11),
      // have given up on trying to get data from .py file -- just manual copy paste the array inside
      polyclinics: [],
      hospitals: [],
      symptoms: [],
    };
  },
  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.display(user);
      }
    });
  },
  methods: {
    async display(user) {
      let z = await getDoc(doc(db, "details", String(user.email)));

      let data = z.data();
      this.name = data.name;
      this.symptoms = data.symptoms;

      const severe = [
        "Bluish lips and/or face",
        "Chest pain",
        "Hard time staying awake",
        "Shortness of breath",
        "Sudden confusion",
        "Sudden weakness",
        "Uncontrollable bleeding",
      ];

      // conditional rendering of gp vs hospital
      this.emergency = severe.some((i) => this.symptoms.includes(i));
    },
  },
};
</script>

<style scoped>
.card {
  text-align: left;
  padding: 10px;
  width: 850px;
  height: flex;
  background-color: rgba(183, 218, 250, 1);
  border-radius: 10px;
  font-size: 18px;
}
.card:hover {
  background-color: skyblue;
}
.scrollable {
  overflow: scroll;
  width: 900px;
  margin: auto;
  height: 600px;
}
</style>
