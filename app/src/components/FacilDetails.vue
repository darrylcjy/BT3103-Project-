<template>
  <div>
    <h1>Clinic Details</h1>
    <br />

    <div class="clinic-details">
      <h3 id="scrollspyHeading1">{{ clinicName }}</h3>
      <h4>{{ location }} {{ unitno }} {{ postalCode }}</h4>
      <h4>Distance: {{ dist }}km away</h4>
    </div>
    <br />
    <div class="row2">
      <div class="wait-time">
        <label>Estimated waiting time</label>
        <div class="row2-details">{{ queueLen * 15 }} mins</div>
      </div>
      <div class="queue-len">
        <label>Number of patients in queue</label>
        <div class="row2-details">
          {{ queueLen }}
        </div>
      </div>
    </div>
    <br /><br />
    <h5 class="directions">
      Get directions
      <a
        href="https://www.google.com/maps/@1.359872,103.7427559,15z"
        target="_blank"
        >here</a
      >
    </h5>
    <br />
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
export default {
  data() {
    return {
      username: "John Doe",
      // replace this when clinic data can be obtained
      facilType: "GP/ Polyclinic",
      clinicName: "1 BISHAN MEDICAL",
      location: "283 BISHAN STREET 22",
      unitno: "#01-191",
      postalCode: "SINGAPORE 750283",
      dist: Math.round(Math.random() * 100) / 10,
      queueLen: Math.floor(Math.random() * 11),
    };
  },
};
</script>

<style scoped>
.clinic-details {
  text-align: left;
  padding: 10px;
  width: 850px;
  height: 210px;
  background-color: rgba(183, 218, 250, 1);
  border-radius: 10px;
  font-size: 25px;
  margin: auto;
}
.row2 {
  display: flex;
  justify-content: space-between;
  width: 880px;
  font-size: 20px;
  margin: auto;
  text-align: left;
  padding: 20px;
}
label {
  font-size: 24px;
}
.row2-details {
  padding: 10px;
  width: 400px;
  height: 60px;
  background-color: rgba(183, 218, 250, 1);
  border-radius: 10px;
  font-size: 40px;
  text-align: center;
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
