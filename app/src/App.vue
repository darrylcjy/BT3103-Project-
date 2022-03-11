<template>
  <!-- testing purposes -->
  <div>
    <router-link to="/register">Register</router-link> | 
    <router-link to="/login">login</router-link> | 
    <router-link to="/personal-details">Personal Details</router-link> |
    <router-link to="/forget-password">Forget Password</router-link> |
    <router-link to="/faq">FAQs</router-link> |
    <router-link to="/home">Home</router-link> |
    <router-link to="/user-home">User Home</router-link> |
    <router-link to="/getting-started">Getting Started</router-link> |
    <router-link to="/health-dec">Health Declaration</router-link> |
    <router-link to="/contact-us">Contact Us</router-link> 
  </div>
  <router-view/>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>

</style>