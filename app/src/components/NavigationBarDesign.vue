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

<style>
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

#profile-button:hover{
  color: rgb(14, 83, 185)
}
</style>