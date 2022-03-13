<template>
  <h1>What symptoms are you experiencing?</h1>
  <p>Please check and confirm your symptoms below.</p>
  <br />
  <div id="confirmation">
    <p><u>Symptom 1</u>: Flu</p>
    <p><u>Symptom 2</u>: Cough</p>
    <p><u>Symptom 3</u>: Loss of taste or smell</p>
  </div>
  <br /><br />
  <button
    id="editbutton"
    type="button"
    v-on:click="this.$router.push({ path: '/selection' })"
  >
    Edit
  </button>
  &nbsp;
  <button
    id="confirmbutton"
    type="button"
    v-on:click="this.$router.push({ path: '/intensity' })"
  >
    Confirm
  </button>
</template>

<script>
export default {
  name: "Symptoms2",
};
</script>

<style>
#confirmbutton {
  border-style: none;
  width: 150px;
  height: 35px;
  border-radius: 10px;
  background-color: #f5f5dd;
  display: inline-block;
}

#editbutton {
  border-style: none;
  width: 150px;
  height: 35px;
  border-radius: 10px;
  background-color: #f56f6f;
  display: inline-block;
}
</style>