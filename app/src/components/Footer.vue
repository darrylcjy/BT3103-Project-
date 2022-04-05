<template>
  <footer>
      <p>COVIDCARE</p>
      <p>&copy; 2022 CovidCare. Last Updated 05 April 2022.</p>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #2C3E50;
    color: white;
    padding: 0rem 1rem;
    margin-top: 5rem;
}

p {
    font-size: 1rem;
}

p:first-child {
    font-weight: bold;
    font-size: 1.25rem;
    letter-spacing: 3px;
}

</style>