<template>
  <Home/>

  <!-- testing purposes -->
  <div>
    <router-link to="/register">Register</router-link> | 
    <router-link to="/login">login</router-link> | 
    <router-link to="/personal-details">Personal Details</router-link>
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

</style>