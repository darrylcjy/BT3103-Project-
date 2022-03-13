<template>
  <div class="main">
    <div class="btns">
      <button class="btn1" type="button">I'm COVID positive</button>
      <button class="btn2" type="button">I'm a Close Contact</button>
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
    max-width: 650px;
  }

  .btn1 {
    all:unset;
    position: absolute;
    width: 200px;
    height: 50px;
    left: 450px;
    top: 150px;
    background: #F5F5DD;

    cursor: pointer;
    font-size:1rem;
    padding: 5px 0.5rem;
    border-radius: 10px;
    text-align: center;
  }

  .btn2 {
    all:unset;
    position: absolute;
    width: 200px;
    height: 50px;
    left: 900px;
    top: 150px;
    background: #F5F5DD;

    cursor: pointer;
    font-size:1rem;
    padding: 5px 0.5rem;
    border-radius: 10px;
    text-align: center;
  }

  .swab {
    position: absolute;
    width: 750px;
    height: 400px;
    left: 400px;
    top: 250px;
  }
</style>