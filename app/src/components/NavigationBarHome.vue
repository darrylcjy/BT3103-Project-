<template>
  <div id="navbar">
    <div id="covidcare">
      <button id="covidcare-button">CovidCare</button>
    </div>

    <i id="covidcare-icon">
      <img src="../assets/app.png" alt="Icon not found" />
    </i>

    <div id="profile-dropdown">
      <button id="profile-button">My Profile</button>
      <div id="profile-content">
        <a href="#" v-on:click="this.$router.push({ path: '/profile' })"
          >Profile</a
        >
        <a href="#" v-on:click="signOut()">Logout</a>
      </div>
    </div>

    <i id="profile-icon">
      <img src="../assets/user.png" alt="Icon not found" />
    </i>
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
  overflow: hidden;
}

/* profile dropdown */    
#profile-dropdown, #profile-icon {
  float: right;
  overflow: hidden;
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

/* covidcare content , which is hidden by default */
#profile-content {
  display: none;
  position: absolute;     /* changed from fixed to absolute*/
  left: 1 rem;
  min-width: 146px;
  background-color: #f9f9f9;
  box-shadow: 0px 6px 12px 0px rgba(0,0,0,0.2);   /* horizontal (-ve is left, + is right), vertical (-ve is top, + is bottom), blur effect, spread radius */
}

#profile-content a {
  display: block;
  text-align: right;
  text-decoration: none;
  padding: 12px 16px;
  color: black;
}

/* profile dropdown */
#profile {
  float: right;
}

#profile-dropdown:hover {
  background-color: #B7DAFA;
}

#profile-content a:hover {
  background-color: #ddd;
}

#profile-button {
  cursor: pointer;
}

#profile-dropdown:hover #profile-content {
  display: block;
}

#profile-button:hover {
  color: rgb(14, 83, 185);
}
</style>