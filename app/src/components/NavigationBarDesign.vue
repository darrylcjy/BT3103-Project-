<template>
  <div id="navbar">
    <div id="covidcare">
      <button id="covidcare-button">CovidCare</button>
    </div>

    <i id="covidcare-icon">
      <img src="../assets/app.png" alt="Icon not found" />
    </i>

    <div id="profile">
      <button id="profile-button" v-on:click="signOut()"> Logout </button>
    </div>

  </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";

export default {
  methods: {
    signOut() {
      const auth = getAuth();
      const user = auth.currentUser;
      signOut(auth, user);
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style scoped>
/* nav bar container */
#navbar {
  overflow: hidden;
  background-color: #f5f5dd;
  width: 100%;
}

/* covidcare dropdown */
#covidcare,
#covidcare-icon {
  float: left;
}

#profile {
  float: right;
}

#covidcare-button, 
#profile-button {
    font-size: 1.5rem;
    font-weight: bold;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    border: none;
    padding: 12px 16px;
    width: 100%;
    color: black;
    background-color: inherit;
}

#profile-button {
  cursor: pointer;
}

#profile-button:hover{
  color: rgb(14, 83, 185)
}
</style>