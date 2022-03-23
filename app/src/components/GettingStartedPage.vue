<template>
  <div class="main">
    <div class="btns">
      <button class="btn1" type="button" v-on:click="this.$router.push({path: '/selection'})">I'm COVID positive</button>
      <button class="btn2" type="button" v-on:click="this.$router.push({path: '/faq'})">I'm a Close Contact</button>
    </div>

    <div class="img">
      <img class="swab" src="https://www.aamc.org/sites/default/files/woman-swab-test-1266490168.jpg" alt="COVID">
    </div>
  </div>
</template>

<script>
export default {
  name: 'GettingStartedPage',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main {
    max-width: 750px;
    margin: auto;
    padding: 1rem 2rem 1rem 1rem;
  }

  .btns {
    max-width: 750px;
  }

  .btn1 {
    all:unset;
    position: relative;
    width: 200px;
    height: 50px;
    right: 50px;
    top: 50px;
    background: #F5F5DD;

    cursor: pointer;
    font-size:1rem;
    padding: 5px 0.5rem;
    border-radius: 10px;
    text-align: center;
  }

  .btn2 {
    all:unset;
    position: relative;
    width: 200px;
    height: 50px;
    left: 50px;
    top: 50px;
    background: #F5F5DD;

    cursor: pointer;
    font-size:1rem;
    padding: 5px 0.5rem;
    border-radius: 10px;
    text-align: center;
  }

  .swab {
    position: relative;
    width: 650px;
    height: 350px;
    top: 100px;
  }
</style>