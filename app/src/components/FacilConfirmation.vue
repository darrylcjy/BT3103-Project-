<template>
  <div>
    <h1>Please check and confirm your personal details:</h1>
    

    <div class="name">
        <h2>NRIC Name</h2>
        <div class="row-detail">{{ username }}</div>
      </div>
    
    <br />

    <div class="row2">
      <div class="wait-time">
        <h2>HP no.</h2>
        <div class="row2-details">+65 9{{ Math.round(Math.random() * 10000000) }} </div>
      </div>
      <div class="queue-len">
        <h2>Age</h2>
        <div class="row2-details">
          {{ userage }}
        </div>
      </div>
      </div>
      <br>

      <div class="symptom">
        <h2>Symptoms</h2>
        <div class="row-detail">{{ symptoms }}</div>
      </div>

      <br>

      <div class="med-facil">
        <h2>Medical Facility of Choice</h2>
        <div class="row-detail">{{ clinicName }}</div>
      </div>

      <br>

      <div class="appt-time">
        <h2>Select Appointment Time</h2>
        <label for="time"></label>
        <select name="time" id="time">
        <option class="row-detail" v-for = "time in 11" :key="time">{{ time }}am</option>
        <option class="row-detail" v-for = "time in 12" :key="time">{{ time }}pm</option>
        </select>
        
      </div>


    
    <br /><br />
    
    <br />
    <button
      id="previous"
      v-on:click="this.$router.push({ path: '/facil-details' })"
    >
      Previous
    </button>
    <button id="next" v-on:click="this.$router.push({ path: '/facil-confirmation/active-appts' })">Confirm</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "John Doe",
      // replace this when clinic data can be obtained
      symptoms: "Symptom 1: Flu (6 - Mild)",
      clinicName: "1 BISHAN MEDICAL",
      userage: Math.floor(Math.random() * 10),
    };
  },
};
</script>

<style scoped>
.row-detail {
  text-align: left;
  padding: 10px;
  width: 850px;
  height: 40px;
  background-color: rgba(183, 218, 250, 1);
  border-radius: 10px;
  font-size: 25px;
  margin: auto;
}
H2 {
    text-align: center;
}
.row2 {
  display: flex;
  justify-content: space-between;
  width: 850px;
  margin: auto;
}
.row2-details {
  padding: 10px;
  width: 400px;
  height: 50px;
  background-color: rgba(183, 218, 250, 1);
  border-radius: 10px;
  font-size: 25px;
  text-align: left;
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
}
#next:hover,
#previous:hover {
  background-color: blanchedalmond;
}
</style>
