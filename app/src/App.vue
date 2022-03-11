<template>
  <Home/>

  <!-- testing purposes -->
  <div>
    <router-link to="/register">Register</router-link> | 
    <router-link to="/login">login</router-link> | 
    <router-link to="/personal-details">Personal Details</router-link> |
    <router-link to="/forget-password">Forget Password</router-link> |
    <router-link to="/faq">FAQs</router-link>
  </div>
  <router-view/>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>