<template>
  <div>
    <h1>Please check and confirm your personal details:</h1>

    <div class="details-container">
      <div class="name">
        <label>NRIC Name</label>
        <div class="row-detail">{{ this.name }}</div>
      </div>

      <br />

      <div class="row2">
        <div class="wait-time">
          <label>HP no.</label>
          <div class="row2-details">+65 {{ this.phone }}</div>
        </div>
        <div class="queue-len">
          <label>Age</label>
          <div class="row2-details">
            {{ this.age }}
          </div>
        </div>
      </div>
      <br />

      <div class="symptom">
        <label>Symptoms</label>
        <div class="row-detail">
          <div v-for="symptom in list" :key="symptom.id">
            Symptom: {{ symptom.symptom }} --- intensity:
            {{ symptom.intensity }}
          </div>
        </div>
      </div>

      <br />

      <div class="med-facil">
        <label>Medical Facility of Choice</label>
        <div class="row-detail">
          {{ this.clinicName }}
          <div v-if="this.opening">Opening Hours: {{ this.opening }}</div>
        </div>
      </div>
    </div>

    <br />

    <div class="appt-details">
      <h2>Select Appointment Details</h2>

      <div class="appt-container">
        <label for="appt-date">Appointment Date:</label>
        <input
          type="date"
          id="appt-date"
          name="trip-start"
          min="2018-12-31"
          max="2018-12-31"
          required
        />

        <label for="appt-time">Appointment Time:</label>

        <!-- value="09:00" -->
        <div v-on:click="setValidTime(this.qLen, this.opening)">
          <input
            type="time"
            id="appt-time"
            name="appt"
            min="07:00"
            max="19:00"
            required
          />
        </div>
      </div>
    </div>

    <br /><br />

    <br />
    <button
      id="previous"
      v-on:click="this.$router.push({ path: '/facil-details' })"
    >
      Previous
    </button>
    <button id="next" v-on:click="save()">Confirm</button>
  </div>
</template>

<script>
import firebaseApp from "../firebase.js";
import { getFirestore, updateDoc } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const db = getFirestore(firebaseApp);

export default {
  data() {
    return {
      name: "",
      age: "",
      phone: "",
      email: "",
      clinicName: "",
      opening: "",
      qLen: 0,
      symptoms: [],
      intensity: [],
    };
  },
  computed: {
    list() {
      return this.symptoms.map((itm, i) => {
        return { symptom: itm, intensity: this.intensity[i] };
      });
    },
  },
  mounted() {
    const auth = getAuth();
    this.email = auth.currentUser.email;
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.display(user);
      }
    });

    function setMinDate() {
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1; //January is 0!
      var yyyy = today.getFullYear();
      var yyyy2 = yyyy + 1;

      if (dd < 10) {
        dd = "0" + dd;
      }

      if (mm < 10) {
        mm = "0" + mm;
      }

      today = yyyy + "-" + mm + "-" + dd;
      var maxDate = yyyy2 + "-" + mm + "-" + dd;
      document.getElementById("appt-date").setAttribute("min", today);
      document.getElementById("appt-date").setAttribute("value", today);
      document.getElementById("appt-date").setAttribute("max", maxDate);
    }
    setMinDate();
  },

  methods: {
    async display(user) {
      let z = await getDoc(doc(db, "details", String(user.email)));
      let apptDetails = await getDoc(
        doc(db, "Appointments", String(user.email))
      );

      let data = z.data();
      this.name = data.name;
      this.phone = data.phone;
      this.age = data.age;
      this.clinicName = apptDetails.data().apptClinic;
      this.qLen = apptDetails.data().qLen;
      this.opening = apptDetails.data().opening;

      this.symptoms = data.symptoms;
      this.intensity = data.intensity;
    },

    async save() {
      try {
        const apptDate = document.getElementById("appt-date").value;
        const apptTime = document.getElementById("appt-time").value;

        if (apptTime.length == 0) {
          window.alert("Please select an appointment time");
        } else {
          // Appointment as Collection > User Email as Document > appt date
          const docRef = doc(db, "Appointments", this.email);
          await updateDoc(docRef, {
            apptDate: apptDate,
            apptTime: apptTime,
          });
          console.log(docRef);
          alert("Updated Appointment Details Successfully");
          this.$router.push({ path: "/facil-confirmation/active-appts" });
        }
      } catch (error) {
        console.error("Error: ", error);
      }
    },

    setValidTime(qLen, opening) {
      function padDate(num) {
        return num.toString().padStart(2, "0");
      }
      function formatDate(date) {
        return [
          date.getFullYear(),
          padDate(date.getMonth() + 1),
          padDate(date.getDate()),
        ].join("-");
      }
      var now = new Date();
      // this is in local time :>
      // earliest appt time today is current time + 0.5hr (travelling time) + estimated waiting time
      var apptTime = new Date(now.getTime() + (30 + qLen * 15) * 60000);
      var hour = apptTime.getHours();
      var minutes = apptTime.getMinutes();
      var today = formatDate(now);
      var isToday =
        document.getElementById("appt-date").value == today ? true : false;
      var openTime, closeTime;

      // if patient wants to book appt today:
      // clinic: check if exceed closing hours with < 1hr. if so, set min appt date to next day
      // NOTE only clinic will have "opening" hours attribute since hospitals are open 24/7
      if (opening) {
        openTime = opening.split("-")[0];
        closeTime = opening.split("-")[1];
        var pastDate = document.getElementById("appt-date").value < today ? true : false
        if (isToday && hour >= (parseInt(closeTime.slice(0, 2)) + 12) || pastDate) {
          window.alert(
            "There are no available appointments for this facility today! Choose another date or another facility"
          );
          var nextDay = function () {
            return [
              now.getFullYear(),
              padDate(now.getMonth() + 1),
              padDate(now.getDate() + 1),
            ].join("-");
          };
          document.getElementById("appt-date").setAttribute("min", nextDay());
          document.getElementById("appt-date").setAttribute("value", nextDay());
          apptTime = openTime + ":00";
        } else if (isToday) {
          // still open for today
          apptTime = hour + ":" + padDate(minutes);
        } else {
          // appointment is not booked today (aka another day)
          apptTime = padDate(opening.slice(0, 1)) + ":00";
        }
      } else {
        // hospital: if its today, earliest appt time is after qLen + travelling
        // if another day, start time at 12am
        apptTime = isToday ? padDate(hour) + ":" + padDate(minutes) : "00:00";
        closeTime = "23:59";
      }
      document.getElementById("appt-time").setAttribute("min", apptTime);
      document.getElementById("appt-time").setAttribute("max", closeTime);
      document.getElementById("appt-time").setAttribute("value", apptTime);
    },
  },
};
</script>

<style scoped>
.row-detail {
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
label {
  font-size: 24px;
  text-align: left;
}
.row2 {
  display: flex;
  justify-content: space-between;
  width: 880px;
  margin: auto;
}
.row2-details {
  padding: 10px;
  width: 400px;
  height: 30px;
  background-color: rgba(183, 218, 250, 1);
  border-radius: 10px;
  font-size: 25px;
  text-align: left;
  box-shadow: 1px 1px 5px black;
}
.appt-container {
  display: flex;
  justify-content: space-between;
  margin: auto;
  width: 880px;
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
}
#next:hover,
#previous:hover {
  background-color: blanchedalmond;
}
input {
  width: 220px;
  height: 25px;
  font-size: 20px;
}
</style>
