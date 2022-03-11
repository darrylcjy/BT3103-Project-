<template>
  <h1>Please state if you have the following medical conditions</h1>
  <form name="declaration" id="declaration">
    <div>
      1. Pregnant
      <input type="radio" name="question1" value="Yes">Yes
      <input type="radio" name="question1" value="No">No
    </div>
    <br>
    <div>
      2. HIV/AIDS
      <input type="radio" name="question2" value="Yes">Yes
      <input type="radio" name="question2" value="No">No
    </div>
    <br>
    <div>
      3. Cancer
      <input type="radio" name="question3" value="Yes">Yes
      <input type="radio" name="question3" value="No">No
    </div>
    <br>
    <div>
      4. Immunocompromised
      <input type="radio" name="question4" value="Yes">Yes
      <input type="radio" name="question4" value="No">No
    </div>
    <br>
    <input type="button" name="" value="Save">
</form>
</template>

<script>
export default {
  name: 'HealthDec',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #declaration{
      text-align: center;
  }
</style>