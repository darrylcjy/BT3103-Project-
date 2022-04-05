<template>
  <div class="main">
    <div class="intro">
      <div class="text">
        <p class="question">
          Have you tested COVID-positive or been exposed to COVID?
        </p>
        <p class="prompt">Unsure what to do next?</p>
        <button
          class="btn"
          type="button"
          v-on:click="this.$router.push({ path: '/login' })"
        >
          Get started!
        </button>
      </div>
      <img src="../assets/banner.png" alt="banner" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.intro {
  position: relative;
  background-color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

img {
  padding: 1rem;
}

.text {
  text-align: left;
  width: 45%;
}

.question {
  color: white;
  font-weight: bold;
  font-size: 2.25rem;
  margin-top: 0;
  margin-bottom: 0;
}

.prompt {
  font-size: 1.5rem;
  margin-top: 0.8rem;
  color: White;
}

.btn {
  all: unset;
  position: relative;
  width: 140px;
  height: 30px;
  background: #b7dafa;

  cursor: pointer;
  font-size: 1.25rem;
  font-weight: bold;
  padding: 5px 0.5rem;
  border-radius: 5px;
  text-align: center;
  color: #2c3e50;
}

.btn:hover {
  box-shadow: 1px 1px 3px white;
}

@media (max-width: 1000px) {
  img {
    display: none;
  }

  .intro {
    height: auto;
  }

  .text {
    width: 80%;
    text-align: center;
    padding: 2rem;
  }
}
</style>