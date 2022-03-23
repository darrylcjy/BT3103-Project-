<template>
  <div class = "main">
    <div class = "intro">
      <h2 class="question">Have you tested COVID-positive or been exposed to COVID?</h2>
      <h3 class="prompt">Unsure what to do next?</h3>
      <button class="btn" type="button" v-on:click="this.$router.push({path: '/login'})">Click here</button>
    </div>
    <div class="latest">
      <br><br>
      <h1 class="news">Latest Singapore COVID-19 Numbers</h1><hr>
      <!-- <button @click="updateMe()">Click to update</button><br><br>
      <line-chart class="numbers" :data="chartdata"></line-chart> -->
      <iframe class="numbers" src="https://data.gov.sg/dataset/covid-19-case-numbers/resource/6c14814b-09b7-408e-80c4-db3d393c7c15/view/f2df5f18-cbcf-4eea-b15e-f80661980b0f" frameBorder="0"> </iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',

  data(){
    return{
      chartdata: {'Monday': 2, 'Tuesday': 5, 'Wednesday': 2, 'Thursday': 5, 'Friday': 6}
    }
  },
  methods:{
    updateMe: function() {
      this.chartdata = {'Monday': Math.random()*5, 'Tuesday': 5, 'Wednesday': Math.random()*5, 'Thursday': 5, 'Friday': 6}
    }
  }
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

  .news {
    text-align: left;
  }

  .numbers {
    width: 1000px;
    height: 500px;
  }
</style>