<template>
  <div class="main">
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
      <input type="button" name="" value="Save" v-on:click="savetofs()">
    </form>
  </div>
</template>

<script>
import firebaseApp from "../firebase.js"
import { getFirestore } from "firebase/firestore"
import { doc, setDoc } from "firebase/firestore";
const db = getFirestore(firebaseApp);

export default {
  name: 'HealthDec',
  
  methods: {
    async savetofs() {
      var radio1 = document.getElementsByName("question1");
      var q1 = Array.from(radio1).find(radio => radio.checked);
      var q1value = q1.value;

      var radio2 = document.getElementsByName("question2");
      var q2 = Array.from(radio2).find(radio => radio.checked);
      var q2value = q2.value;

      var radio3 = document.getElementsByName("question1");
      var q3 = Array.from(radio3).find(radio => radio.checked);
      var q3value = q3.value;

      var radio4 = document.getElementsByName("question1");
      var q4 = Array.from(radio4).find(radio => radio.checked);
      var q4value = q4.value;

      alert("Saving")

      try{
        const docRef = await setDoc(doc(db, "Dec", "eg"),{
          Q1: q1value, Q2: q2value, Q3: q3value, Q4: q4value
        })
        console.log(docRef)
        document.getElementById('declaration').reset();
      }
      catch(error) {
        console.error("Error adding document: ", error);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main {
    max-width: 1000px;
    margin: auto;
    padding: 1rem 2rem 1rem 1rem;
  }

  #declaration {
    /* display: inline-block;
    text-align: right; */
  }
</style>