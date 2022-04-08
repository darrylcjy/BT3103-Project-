<template>
  <div>
    <h1 v-if="!this.emergency">Clinic Details</h1>
    <h1 v-else>Hospital A&E Details</h1>
    <br />

    <div class="clinic-details">
      <h3 id="scrollspyHeading1">{{ this.clinicName }}</h3>
      <h4>{{ this.clinicAddress }}, Singapore {{ this.clinicPC }}</h4>
      <h4 v-if="!this.emergency">Telephone No: +65 {{ this.tel }}</h4>
      <h4 v-if="!this.emergency">Opening Hours: {{ this.opening }}</h4>
    </div>
    <br />
    <div class="row2">
      <div class="wait-time">
        <label>Estimated waiting time</label>
        <div class="row2-details">{{ this.qLen * 15 }} mins</div>
      </div>
      <div class="queue-len">
        <label>Number of patients in queue</label>
        <div class="row2-details">
          {{ this.qLen }}
        </div>
      </div>
    </div>
    <br />
    <h5 class="directions">
      Get directions <a v-bind:href="website" target="_blank">here</a>
    </h5>
    
    <button
      id="previous"
      v-on:click="this.$router.push({ path: '/med-facils' })"
    >
      Previous
    </button>
    <button id="next" v-on:click="this.$router.push({ path: '/facil-confirmation' })">Next</button>
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
      clinicName: "", 
      clinicAddress: "", 
      clinicPC: "", 
      qLen: 0,
      website:"", 
      emergency: false, 
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
      let apptData = await getDoc(doc(db, "Appointments", String(user.email)));

      let data = apptData.data();
      this.clinicAddress = data.clinicAddress;
      this.clinicPC = data.facilPC;
      this.clinicName = data.apptClinic;
      this.tel = data.tel;
      this.opening = data.opening;
      this.qLen = data.qLen; 
      this.emergency = data.emergency; 
      this.getWebsite(this.clinicAddress)

    },
    async getWebsite(clinicName) {
      var words = clinicName.split(" ");  // get individual word
      var parsed = "";
      for (var i = 0; i < words.length; i+=1) {
        // console.log(words[i]) 
        parsed += "+" + words[i]
        console.log(parsed)
      }
      this.website = "https://www.google.com/maps/search/?api=1&query=" + parsed
    }
  }
};
</script>

<style scoped>
.clinic-details {
  text-align: left;
  padding: 10px;
  width: 850px;
  height: flex;
  background-color: rgba(183, 218, 250, 1);
  border-radius: 10px;
  font-size: 25px;
  margin: auto;
  box-shadow: 1px 1px 5px black;
}
.row2 {
  display: flex;
  justify-content: space-between;
  width: 880px;
  font-size: 20px;
  margin: auto;
  padding: 20px;
}
label {
  font-size: 24px;
}
.row2-details {
  padding: 10px;
  width: 400px;
  height: flex;
  background-color: rgba(183, 218, 250, 1);
  border-radius: 10px;
  font-size: 40px;
  text-align: center;
  box-shadow: 1px 1px 5px black;
}
.directions {
  font-size: 20px;
}
#next,
#previous {
  all: unset;
  font-size: 1.5rem;
  background-color: #f5f5dd;
  padding: 10px;
  border-radius: 10px;
  width: 6rem;
  display: inline-block;
  margin: 10px;
  box-shadow: 1px 1px 5px black;
  cursor: pointer;
}
#next:hover,
#previous:hover {
  background-color: blanchedalmond;
}
</style>
