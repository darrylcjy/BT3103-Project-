<template>
  <div class="main">
    <div class="welcome">
      <h1 class="heading">Welcome, John Doe</h1>
    </div>
    <div class="header">
      <h1>COVID Resources</h1><hr>
    </div>
    <div class="resources">
      <div class="subresource" v-on:click="this.$router.push({path: '/getting-started'})">
        <img class="image" src="../assets/userhome2.png" alt="">
        <h2>Getting Started</h2>
      </div>
      <div class="subresource" v-on:click="this.$router.push({path: '/faq'})">
        <img class="image" src="../assets/userhome3.png" alt="">
        <h2>FAQs</h2>
      </div>
      <div class="subresource" v-on:click="this.$router.push({path: '/contact-us'})">
        <img class="image" src="../assets/userhome4.png" alt="">
        <h2>Contacts</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserHome',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .welcome {
    background: url("../assets/userhome1.png");
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .heading {
    color: white;
  }

  .header {
    text-align: left;
  }

  .resources {
    display: flex;
  }

  .subresource {
    flex-grow: 1;
    cursor: pointer;
  }

  .image {
    height: 100%;
    width: 100%;
  }

  h2 {
    background: skyblue;
    margin-top: 0;
  }
</style>