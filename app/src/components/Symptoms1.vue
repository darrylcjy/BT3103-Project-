<template>
  <h1>What symptoms are you experiencing?</h1>
  <p>Please select all that apply in the dropdown menu below.</p>
  <br />
  <p>
    Do you have any symptoms:
    <input type="radio" name="symptomscheck" value="Yes" />Yes
    <input type="radio" name="symptomscheck" value="No" />No <br />
  </p>
  <div id="scrollable" style="text-align: left">
    <table id="symptoms">
      <thead>
        <tr>
          <!-- Temporary fix to align table header alignment -->
          <th>
            ------------------- Symptoms ---------------------------------------
          </th>
          <th>Select --------------------------------------</th>
          <!-- <th>Symptoms</th>
          <th>Select</th> -->
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Aches</td>
          <td>
            <input type="checkbox" name="checkbox1" value="Aches" />&nbsp;
          </td>
        </tr>
        <tr>
          <td>Chest Pain</td>
          <td>
            <input type="checkbox" name="checkbox2" value="Chest Pain" />&nbsp;
          </td>
        </tr>
        <tr>
          <td>Cough</td>
          <td>
            <input type="checkbox" name="checkbox3" value="Cough" />&nbsp;
          </td>
        </tr>
        <tr>
          <td>Diarrhoea</td>
          <td>
            <input type="checkbox" name="checkbox4" value="Diarrhoea" />&nbsp;
          </td>
        </tr>
        <tr>
          <td>Fever</td>
          <td>
            <input type="checkbox" name="checkbox5" value="Fever" />&nbsp;
          </td>
        </tr>
        <tr>
          <td>Flu</td>
          <td><input type="checkbox" name="checkbox6" value="Flu" />&nbsp;</td>
        </tr>
        <tr>
          <td>Headache</td>
          <td>
            <input type="checkbox" name="checkbox7" value="Headache" />&nbsp;
          </td>
        </tr>
        <tr>
          <td>Loss of taste or smell</td>
          <td>
            <input
              type="checkbox"
              name="checkbox8"
              value="Loss of taste or smell"
            />&nbsp;
          </td>
        </tr>
        <tr>
          <td>Shortness of breath</td>
          <td>
            <input
              type="checkbox"
              name="checkbox9"
              value="Shortness of breath"
            />&nbsp;
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <br /><br />
  <button
    id="confirmbutton"
    type="button"
    v-on:click="this.$router.push({ path: '/confirmation' })"
  >
    Confirm
  </button>
</template>

<script>
export default {
  name: "Symptoms1",
};
</script>

<style>
p {
  font-size: 20px;
}
table {
  background-color: rgba(183, 218, 250, 1);
  width: 50%;
  border: 2px solid black;
  margin-left: auto;
  margin-right: auto;
  font-size: 20px;
}
td {
  border: 2px solid black;
}
thead {
  background-color: #f5f5dd;
}
tbody {
  height: 250px;
  overflow: auto;
}
td {
  padding: 7px 20px;
  display: inline-block;
  width: 49.5%;
  box-sizing: border-box;
}
input[type="checkbox"] {
  transform: scale(2);
  width: 200px;
}
tr,
tbody {
  display: block;
}
#confirmbutton {
  border-style: none;
  width: 150px;
  height: 35px;
  border-radius: 10px;
  background-color: #f5f5dd;
  display: inline-block;
  font-size: 1rem;
}
</style>