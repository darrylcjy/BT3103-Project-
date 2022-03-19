<template>
  <h1>Please select the intensity of the symptoms you are experiencing:</h1>
  <p><b>(1 - Not Severe,&nbsp; 10 - Very Severe)</b></p>
  <br />
  <div id="confirmation">
    <p><u>Symptom 1</u>: Flu</p>
    <div class="slidecontainer">
      <input
        type="range"
        min="1"
        max="10"
        value="5"
        class="slider"
        id="slider1"
      />
      <p>Intensity: <span id="s1"></span></p>
    </div>
    <p>
      <br /><br />
      <u>Symptom 2</u>: Cough
    </p>
    <div class="slidecontainer">
      <input
        type="range"
        min="1"
        max="10"
        value="5"
        class="slider"
        id="slider2"
      />
      <p>Intensity: <span id="s2"></span></p>
    </div>
    <br /><br />
    <p><u>Symptom 3</u>: Loss of taste or smell</p>
    <div class="slidecontainer">
      <input
        type="range"
        min="1"
        max="10"
        value="5"
        class="slider"
        id="slider3"
      />
      <p>Intensity: <span id="s3"></span></p>
    </div>
  </div>
  <br /><br />
  <input type="button" value="Confirm" id="confirmbutton" v-on:click="this.$router.push({path: '/med-facils'})"/>
</template>

<script>
export default {
  name: "Symptoms3",
  mounted() {
    function load() {
      var slider1 = document.getElementById("slider1");
      var output1 = document.getElementById("s1");

      var slider2 = document.getElementById("slider2");
      var output2 = document.getElementById("s2");

      var slider3 = document.getElementById("slider3");
      var output3 = document.getElementById("s3");

      output1.innerHTML = slider1.value;
      output2.innerHTML = slider2.value;
      output3.innerHTML = slider3.value;

      slider1.oninput = function () {
        output1.innerHTML = this.value;
      };
      slider2.oninput = function () {
        output2.innerHTML = this.value;
      };
      slider3.oninput = function () {
        output3.innerHTML = this.value;
      };
    }
    load();
  },
};
</script>

<style>
.slidecontainer {
  width: 30%;
}

.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 25px;
  background: #b7dafa;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  background: #3f0101;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #3f0101;
  cursor: pointer;
}

#confirmbutton {
  border-style: none;
  width: 150px;
  height: 35px;
  border-radius: 10px;
  background-color: #f5f5dd;
  display: inline-block;
}
</style>