<template>
  <h1>Please select the intensity of the symptoms you are experiencing:</h1>
  <p><b>(1 - Not Severe,&nbsp; 10 - Very Severe)</b></p>
  <br />
  <div id="intensity">
    <!-- insert sliders -->
  </div>
  <br /><br />
  <input
    type="button"
    value="Confirm"
    id="confirmbutton"
    v-on:click="confirmintensity()"
  />
</template>

<script>
import firebaseApp from "../firebase.js";
import { getFirestore } from "firebase/firestore";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const db = getFirestore(firebaseApp);

export default {
  name: "Symptoms3",

  data() {
    return {
      email: "",
    };
  },

  mounted() {
    const auth = getAuth();
    this.email = auth.currentUser.email;
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.display(user);
      }
    });
  },

  methods: {
    async display(user) {
      let docSnap = await getDoc(doc(db, "details", String(user.email)));
      let selected = docSnap.data().symptoms;
      console.log(selected);
      console.log(
        "Creating intensity sliders for the following symptoms: \n" + selected
      );

      let text = "";
      var count = 0;
      selected.forEach(createSlider);
      document.getElementById("intensity").innerHTML = text;

      for (let i = 0; i < count; i++) {
        let slider_info = document.getElementById("slider" + (i + 1));
        let span_info = document.getElementById("s" + (i + 1));
        span_info.innerHTML = slider_info.value;
        slider_info.oninput = function () {
          span_info.innerHTML = this.value;
        };
      }

      function createSlider(symp) {
        count += 1;
        text +=
          "<p><u>Symptom " +
          count +
          "</u>: " +
          symp +
          '</p><div class="slidecontainer"><input type="range" min="1" max="10" value="5" class="slider" id="slider' +
          count +
          '" /><p>Intensity: <span id="s' +
          count +
          '"></span></p></div><br /><br />';
      }
    },

    async confirmintensity() {
      var Intensity = [];
      var count = document.getElementsByClassName("slider").length;

      for (let i = 0; i < count; i++) {
        let s_value = document.getElementById("s" + (i + 1)).innerHTML;
        Intensity.push(s_value);
      }
      console.log(Intensity);

      try {
        const docRef = await updateDoc(doc(db, "details", String(this.email)), {
          intensity: Intensity,
        });
        console.log(docRef);
        alert(`Your symptoms intensity have been recorded!`);
        this.$router.push({ path: "/med-facils" });
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    },
  },
};
</script>

<style>
.slidecontainer {
  width: 40%;
  margin-left: auto;
  margin-right: auto;
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