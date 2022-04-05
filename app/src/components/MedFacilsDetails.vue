<template>
  <!-- get the user name here and replace placeholder {username} and {facilType}-->
  <div>
    <div class="header">
      <h2>
        <b>
          <div v-if="!this.atRisk">
            {{ name }}, for the symptoms you present, we recommend you to visit a
          </div>
          <div v-else>{{ name }}, due to pre-exisiting health conditions, we recommend you to visit a</div>
          <u
            ><div v-if="this.emergency || this.atRisk">
              Hospital Emergency Department.
            </div>
            <div v-else>GP clinic/ Polyclinic.</div></u
          ></b
        >
      </h2>
      <h2>The following are the closest recommended facilities to you:</h2>
      <br /><br />
    </div>

    <div class="search-box">
      <!-- <label>Search for:</label> <br> -->
      <input
        type="text"
        v-model="search"
        placeholder="Search for medical facility ..."
      />
      <br /><br />
    </div>

    <div class="scrollable">
      <div v-for="facil in filteredList" :key="facil.id">
        <!-- changed facils to filteredList -->
        <div class="card" v-on:click="click(facil)">
          <h3 id="scrollspyHeading1">{{ facil["name "] || facil["name"] }}</h3>
          <h4 v-if="this.emergency || this.atRisk">
            {{ facil["address"] || facil["address "] }}, Singapore
            {{ facil["postalCode"] || facil["postalCode "] }}
          </h4>
          <h4 v-else>
            {{ facil.street }} {{ facil.block }}, Singapore
            {{ facil.postalCode }}
          </h4>
          <h4 v-if="!this.emergency && !this.atRisk">
            Telephone No: +65 {{ facil.tel }}
          </h4>
          <h4 v-if="!this.emergency && !this.atRisk">
            Opening Hours: {{ facil.opening }}
          </h4>
          <h4>
            Number of patients in queue:
            {{ Math.floor((facil.name || facil["name "]).length / 3) }}
          </h4>
        </div>
      </div>
    </div>

    <button v-on:click="loadMore()">Load More</button>
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
      atRisk: false,
      facils: [],
      facilsRender: [],
      symptoms: [],
      showCounter: 5,
      search: "",
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
      this.atRisk = data.atRisk;

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

      if (this.emergency || this.atRisk) {
        facils = await getDocs(collection(db, "hospitals "));
      } else {
        facils = await getDocs(collection(db, "clinics"));
      }
      facils.forEach((doc) => {
        this.facilsRender.push(doc.data());
      });

      console.log(this.facils);
      console.log(this.facilsRender);

      // sort by ascending postal code difference -- clinic
      if (!this.emergency && !this.atRisk) {
        this.facilsRender.sort(function (a, b) {
          return JSON.parse(a.postalCode) - JSON.parse(b.postalCode);
        });
      }

      // push first 5 options in
      this.facils.push(...this.facilsRender.slice(0, 5));
    },

    loadMore() {
      this.facils.push(
        ...this.facilsRender.slice(this.showCounter, this.showCounter + 5)
      );
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
            qLen: Math.floor((facil.name || facil["name "]).length / 3),
          });
        } else {
          await setDoc(docRef, {
            apptClinic: facil.name,
            clinicAddress: facil.street + " " + facil.block,
            facilPC: facil.postalCode,
            tel: facil.tel,
            opening: facil.opening,
            qLen: Math.floor((facil.name || facil["name "]).length / 3),
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
  computed: {
    filteredList() {
      console.log("In filteredList method");
      console.log(this.facilsRender);
      console.log(this.facils);
      return this.facilsRender.filter((facil) => {
        var facilName = facil.name ? facil.name : facil["name "]
        return facilName.toLowerCase().includes(this.search.toLowerCase());
      });
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
.search-box input {
  /* background-color: blue; */
  font-size: 1.5rem;
  width: 750px;
}
</style>
