<template>
  <div>
    <h1>Please check and confirm your personal details:</h1>

    <div class="details-container">
      <div class="name">
        <label>NRIC Name</label>
        <div class="row-detail">{{ username }}</div>
      </div>

      <br />

      <div class="row2">
        <div class="wait-time">
          <label>HP no.</label>
          <div class="row2-details">
            +65 9{{ Math.round(Math.random() * 10000000) }}
          </div>
        </div>
        <div class="queue-len">
          <label>Age</label>
          <div class="row2-details">
            {{ userage }}
          </div>
        </div>
      </div>
      <br />

      <div class="symptom">
        <label>Symptoms</label>
        <div class="row-detail">{{ symptoms }}</div>
      </div>

      <br />

      <div class="med-facil">
        <label>Medical Facility of Choice</label>
        <div class="row-detail">{{ clinicName }}</div>
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
          value="2018-07-22"
          min="2018-01-01"
          max="2018-12-31"
        />

        <label for="appt-time">Appointment Time:</label>

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

    <br /><br />

    <br />
    <button
      id="previous"
      v-on:click="this.$router.push({ path: '/facil-details' })"
    >
      Previous
    </button>
    <button
      id="next"
      v-on:click="
        this.$router.push({ path: '/facil-confirmation/active-appts' })"
    >
      Confirm
    </button>
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
  height: 30px;
  background-color: rgba(183, 218, 250, 1);
  border-radius: 10px;
  font-size: 25px;
  margin: auto;
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
  text-align: left;
}
.row2-details {
  padding: 10px;
  width: 400px;
  height: 30px;
  background-color: rgba(183, 218, 250, 1);
  border-radius: 10px;
  font-size: 25px;
  text-align: left;
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
