<template>
  <div id="heading">
    <h1>Hello {{ this.name }},</h1>
  </div>

  <!-- if user has an appointment, render this div -->
    <!-- note to self: on mounted, display() method called, which calls hasAppointment() method,  
      which changes this.appt data, and the value is passed into v-if condition-->
  <div id="appointment" v-if=this.appt>
    <h2>You have an appointment at the following clinic:</h2>

    <!-- <h2> Venue: </h2> -->
    <label><b> Location </b></label>
    <div id="location">
      {{ clinicName }} <br />
      {{ location }}
      {{ unitno }}
      {{ postalCode }} <br /><br />
      Distance: {{ dist }} km away
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
 <div id="non-appointment" v-else> 

   <h2>You have <u>no</u> active appointments</h2>
   <img src="../assets/cancelled.png" alt="No icon found"> <br>
   <!-- <button id="query" v-on:click="this.$router.push({path: '/selection'})">Do I need to make an appointment?</button><br> -->
   <button id="checkout" v-on:click="this.$router.push({path: '/self-isolation-checkout'})">My Protocol</button>
   <button id="back" v-on:click="this.$router.push({ path: '/user-home' })">
      Back to Home
    </button>
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

      appt: false,

      clinicName: "1 BISHAN MEDICAL",
      location: "283 BISHAN STREET 22",
      unitno: "#01-191",
      postalCode: "SINGAPORE 750283",
      dist: 1.2,

      date: "",
      day: "",

      time: "",

      website:
        "https://www.google.com/maps/place/1+Bishan+Medical+Clinic/@1.3590939,103.8424033,17z/data=!4m5!3m4!1s0x31da1718a8100001:0xba24b3317af11a87!8m2!3d1.3590885!4d103.8445973",
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
      let userDetails = await getDoc(doc(db, "details", String(user.email)));
      let userAppt = await getDoc(doc(db, "Appointments", String(user.email)));
      
      this.date = userAppt.data().apptDate;
      this.time = userAppt.data().apptTime;
      this.name = userDetails.data().name;

      this.hasAppointment()
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
