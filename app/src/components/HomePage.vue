<template>
  <div class = "main">
    <div class = "intro">
      <h2 class="guide">Step-by-step guides</h2>
      <h2 class="question">Have you tested COVID-positive or been exposed to COVID?</h2>
      <button class="btn" type="button">Click here</button>
    </div>
    <div class="latest">
      <h1 class="news">Latest News</h1><hr>
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
    position: absolute; 
  }

  .intro {
    background: url("../assets/homefiller.jpg");
    width: 100vh;
    height: 200px
  }

  .guide {
    top: 120px;
    color: red;
  }

  .question {

  }

  .btn {
    all:unset;
    position: absolute;
    width: 140px;
    height: 30px;
    left: 280px;
    top: 120px;
    background: blue;

    cursor: pointer;
    font-size:1rem;
    padding: 5px 0.5rem;
    text-align: center;
    color: white
  }

  .latest {

  }

  .news {
    text-align: left;
  }

  .numbers {

  }
</style>