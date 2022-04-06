<template>

  <!-- if user has an appointment, render this div -->
    <!-- note to self: on mounted, display() method called, which calls hasAppointment() method,  
      which changes this.appt data, and the value is passed into v-if condition-->
  <div id="appointment" v-if=appt>
    <div id="heading">
      <h1>Hello {{ this.name }},</h1>
    </div>

    <h2>You have an appointment at the following clinic:</h2>

    <!-- <h2> Venue: </h2> -->
    <label><b> Location </b></label>
    <div id="location">
      {{this.clinicName }} <br />
      {{ this.clinicAddress }} <br>
      SINGAPORE {{this.clinicPC}}
    </div>

    <br /><br />

    <!-- <h2> Date:</h2> -->
    <label><b> Date </b></label>
    <div id="date">
      {{ this.date }} <br />
      {{ day }}
    </div>

    <br /><br />

    <!-- <h2> Time: </h2> -->
    <label><b> Time </b></label>
    <div id="time">
      {{ this.time }}
    </div>

    <br /><br />
    <p id="text">
      Get directions <a v-bind:href="website" target="_blank">here</a>
    </p>
    <button id="cancel" v-on:click="cancelAppt()">Cancel Appointment</button>
    <button id="back" v-on:click="this.$router.push({ path: '/user-home' })">
      Back to Home
    </button>
  </div>

 <!-- if user does not have an appointment, render this div -->
 <div id="non-appointment" v-else-if="this.appt == false"> 
   <div id="heading">
      <h1>Hello {{ this.name }},</h1>
    </div>

   <h2>You have <u>no</u> active appointments</h2>
   <img src="../assets/cancelled.png" alt="No icon found"> <br> 
  
   <div id="new-user" v-if = "this.record == null">
     <button id="back" v-on:click="this.$router.push({ path: '/user-home' })">
        Back to Home
      </button>
   </div>

   <div id="old-user" v-else>
      <button id="checkout" v-on:click="this.$router.push({path: '/self-isolation-checkout'})">My Protocol</button>
      <button id="back" v-on:click="this.$router.push({ path: '/user-home' })">
        Back to Home
      </button>
   </div>
</div> 
</template>

<script>
import firebaseApp from "../firebase.js";
import { getFirestore } from "firebase/firestore";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const db = getFirestore(firebaseApp);

export default {
  name: "Active Appointments",

  data() {
    return {
      name: "",
      email: "",

      appt: null,   // fix time lag!!!

      clinicName: "",
      clinicAddress: "",
      clinicPC: "",

      date: "",
      // day: "",

      time: "",

      website:
        "",

      record: "",
    };
  },
  beforeMount() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.display(user);
        this.checkRecord(user);
      }
    });
  },
  methods: {
    
    async display(user) {
      this.hasAppointment();  // improves time lag
      
      let userDetails = await getDoc(doc(db, "details", String(user.email)));
      this.name = userDetails.data().name;

      let userAppt = await getDoc(doc(db, "Appointments", String(user.email)));
      this.date = userAppt.data().apptDate;
      this.time = userAppt.data().apptTime;

      this.clinicName = await userAppt.data().apptClinic; 
      this.clinicAddress = userAppt.data().clinicAddress; 
      this.clinicPC = userAppt.data().facilPC; 
      this.getWebsite(this.clinicName);
    },

    async cancelAppt() {
      try {
        var positive = window.confirm("Would you like to cancel your appointment?")
        if (positive) {   //  user wants to cancel appointment, delete from database
          console.log("User wants to cancel appointment")
          const auth = getAuth();
          const user = auth.currentUser.email;
          await deleteDoc(doc(db, "Appointments", user))
          console.log("Document deleted successfully")
          this.$router.push({ path: "/user-home" });
        }
      } catch (error) {
        console.error("The erorr is ", error);
      }
    },

    async hasAppointment() {
      try {
        const auth = getAuth();
        const user = auth.currentUser.email;
        const docRef = doc(db, "Appointments", user)
        const hasAppt = await getDoc(docRef)
        // console.log(hasAppt)
        if (hasAppt._document) {
          console.log("User has an existing appointment");
          this.appt = true;
        } else {
          console.log("User does not have an existing appointment");
          this.appt = false;
        }
      } catch (error) {
        console.error("The error is ", error)
      }
    },

    async getWebsite(clinicName) {
      console.log("inside getWebsite")
      console.log(clinicName)
      var words = clinicName.split(" ");  // get individual word
      var parsed = "";
      for (var i = 0; i < words.length; i+=1) {
        // console.log(words[i]) 
        parsed += "+" + words[i]
        console.log(parsed)
      }
      this.website = "https://www.google.com/maps/search/?api=1&query=" + parsed
    },

    async checkRecord(user) {
      let userDetails = await getDoc(doc(db, "details", String(user.email)));
      this.record = userDetails.data().symptoms;
      console.log("inside checkRecord method")
      console.log(userDetails.data().symptoms)
    }
  },
};
</script>

<style>
#location {
  text-align: center;
  padding: 10px;
  width: 800px;
  height: auto;
  background-color: rgba(183, 218, 250, 1);
  border-radius: 10px;
  font-size: 25px;
  margin: auto;
  box-shadow: 1px 1px 5px black;
}

#date {
  text-align: center;
  padding: 10px;
  width: 800px;
  height: auto;
  background-color: rgba(183, 218, 250, 1);
  border-radius: 10px;
  font-size: 25px;
  margin: auto;
  box-shadow: 1px 1px 5px black;
}

#time {
  text-align: center;
  padding: 10px;
  width: 800px;
  height: auto;
  background-color: rgba(183, 218, 250, 1);
  border-radius: 10px;
  font-size: 25px;
  margin: auto;
  box-shadow: 1px 1px 5px black;
}

#cancel,
#back,
#query, 
#checkout {
  all: unset;
  font-size: 1.5rem;
  background-color: #f5f5dd;
  padding: 10px;
  border-radius: 10px;
  width: 15rem;
  display: inline-block;
  margin: 10px;
  margin-left: 10px;
}

#query {
  margin: 20px;
  width: 28rem;
}

#text {
  display: inline-block;
  /* padding-right: 30px; */
  font-size: 1.5rem;
  padding-right: 100px;
  /* i want to increase the space between text & button */
}

#cancel:hover,
#back:hover,
#query:hover,
#checkout:hover {
  background-color: blanchedalmond;
}

label {
  font-size: 24px;
  text-align: left;
}
</style>
