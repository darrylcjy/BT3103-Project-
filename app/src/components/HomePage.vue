<template>
  <div class = "main">
    <div class = "intro">
      <h2 class="question">Have you tested COVID-positive or been exposed to COVID?</h2>
      <h3 class="prompt">Unsure what to do next?</h3>
      <button class="btn" type="button" v-on:click="this.$router.push({path: '/getting-started'})">Get started!</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main {
    max-width: 1000px;
    margin: auto;
    padding: 1rem 2rem 1rem 1rem;
  }

  .intro {
    background: url("../assets/home.jpg");
    height: 200px
  }

  .question {
    position: relative;
    top: 40px;
    color: red;
  }

  .prompt {
    position: relative;
    top: 30px;
  }

  .btn {
    all:unset;
    position: relative;
    width: 140px;
    height: 30px;
    top: 40px;
    background: blue;

    cursor: pointer;
    font-size:1rem;
    padding: 5px 0.5rem;
    border-radius: 10px;
    text-align: center;
    color: white
  }

</style>