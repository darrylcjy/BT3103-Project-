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
      <div v-for="facil in facils" :key="facil.id">
        <div class="card" v-on:click="click(facil)">
          <h3 id="scrollspyHeading1">{{ facil["name"] || facil["name "] }}</h3>
          <h4 v-if="this.emergency">
            {{ facil["address"] || facil["address "] }}, Singapore
            {{ facil["postalCode"] || facil["postalCode "] }}
          </h4>
          <h4 v-else>
            {{ facil.street }} {{ facil.block }}, Singapore
            {{ facil.postalCode }}
          </h4>
          <h4>Distance: {{ dist }}km away</h4>
          <h4>
            Number of patients in queue: {{ Math.floor(Math.random() * 11) }}
          </h4>
        </div>
      </div>
    </div>

    <button v-on:click="loadMore()"> Load More</button>
  </div>
</template>

<script>
import firebaseApp from "../firebase.js";
import { getFirestore } from "firebase/firestore";
import { doc, getDoc, collection, getDocs, setDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const db = getFirestore(firebaseApp);

export default {
  data() {
    return {
      name: "",
      email: "",
      userPC: "",
      emergency: false,
      dist: Math.round(Math.random() * 100) / 10,
      facils: [],
      facilsRender: [], 
      symptoms: [],
      showCounter: 5, 
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
      let userData = await getDoc(doc(db, "details", String(user.email)));
      var facils;

      let data = userData.data();
      this.name = data.name;
      this.symptoms = data.symptoms;
      this.userPC = data.postal;

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
      // rendering to GP based on threshold 7 done in Symptoms3.vue
      this.emergency = severe.some((i) => this.symptoms.includes(i));

      if (this.emergency) {
        facils = await getDocs(collection(db, "hospitals "));
      } else {
        facils = await getDocs(collection(db, "clinics"));
      }
      facils.forEach((doc) => {
        this.facilsRender.push(doc.data());
        // push first 5 options in 
        if (this.facils.length < 5) {
          this.facils.push(doc.data());
        }
      });

      console.log(this.facils)

      // sort by ascending postal code difference
      this.facils.sort(function(a, b) {
        return JSON.parse(a.postalCode) - JSON.parse(b.postalCode)
      }); 

    },

    loadMore() {
      this.facils.push(...this.facilsRender.slice(this.showCounter, this.showCounter + 5))
      this.showCounter += 5; 
    },

    async click(facil) {
      try {
        const docRef = doc(db, "Appointments", this.email);


        if (this.emergency) {
          await setDoc(docRef, {
            apptClinic: facil.name || facil["name "],
            clinicAddress: facil["address"] || facil["address "], 
            facilPC: facil["postalCode"] || facil["postalCode "], 
            // distance:
            // qLen:
          });
        } else {
          await setDoc(docRef, {
            apptClinic: facil.name,
            clinicAddress: facil.street + " " + facil.block, 
            facilPC: facil.postalCode
            // distance:
            // qLen:
          });
        }
        console.log(docRef);
        alert("Clinic has been selected");
        this.$router.push({ path: "/facil-details" });
      } catch (error) {
        console.error("Error: ", error);
      }
    },
  },
};
</script>

<style scoped>
.card {
  text-align: left;
  padding: 10px;
  width: flex;
  height: flex;
  background-color: rgba(183, 218, 250, 1);
  border-radius: 10px;
  font-size: 18px;
  margin: 10px;
  box-shadow: 1px 1px 5px black;
}
.card:hover {
  background-color: skyblue;
}
.scrollable {
  overflow: auto;
  width: flex;
  margin: auto;
  height: 600px;
  max-height: 600px;
}
button {
  all: unset;
  font-size: 1rem;
  background-color: #f5f5dd;
  padding: 10px;
  border-radius: 10px;
  width: auto;
  display: inline-block;
  margin: 10px;
  box-shadow: 1px 1px 5px black;
  font-weight: bolder;
}
</style>
