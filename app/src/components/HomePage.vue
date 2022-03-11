<template>
    <img src="../assets/home.png" alt="">
    <h1>Latest News</h1><hr>
    <button @click="updateMe()">Click to update</button>
    <line-chart class="numbers" width=500px :data = "chartdata"></line-chart>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    updateMe: function (){
      this.chartdata = {"Monday": Math.random()*5, "Tuesday": Math.random()*5, "Wednesday": Math.random()*5, "Thursday": Math.random()*5, "Friday": Math.random()*5}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>