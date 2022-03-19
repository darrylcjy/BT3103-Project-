<template>
  <!-- get the user name here and replace placeholder {username} and {facilType}-->
  <div>
    <div class="header">
      <h2>
        <b
          >{{ username }}, for the symptoms you present, we reccommend you to
          visit a <u>{{ facilType }}</u
          >.</b
        >
      </h2>
      <h2>The following are the closest {{ facilType }}s to you:</h2>
      <br /><br />
    </div>

    <div
      class="scrollable"
    >
      <!-- add v-for when clinic list obtained -->
      <div class="card" v-on:click="this.$router.push({path: '/facil-details'})">
        <h3 id="scrollspyHeading1">{{ clinicName }}</h3>
        <h4>{{ location }} {{ unitno }} {{ postalCode }}</h4>
        <h4>Distance: {{ dist }}km away</h4>
        <h4>Number of patients in queue: {{ queueLen }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
//import FacilDetails from "@/views/FacilDetails";

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
  mounted() {
    async function getClinicData() {
      console.log("something");
      
    }
    getClinicData();
  },
  
  /*
  components:{
    FacilDetails
  }
  */
};
</script>

<style scoped>
.card {
  text-align: left;
  padding: 10px;
  width: 850px;
  height: 200px;
  background-color: rgba(183, 218, 250, 1);
  border-radius: 10px;
  font-size: 18px;
}
.card:hover{
  background-color: skyblue;
}
.scrollable{
  overflow: scroll; 
  width: 900px;
  margin: auto;
  height: 600px;
}
</style>
