<template>
  <div class="main">
    <h2>Please state if you have the following medical conditions</h2>
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
      <input type="button" name="" class="btn" value="Save" v-on:click="savetofs()">
    </form>
  </div>
</template>

<script>
import firebaseApp from "../firebase.js"
import { getFirestore, updateDoc } from "firebase/firestore"
import { doc } from "firebase/firestore"
import { getAuth } from 'firebase/auth'
const db = getFirestore(firebaseApp);

export default {
  name: 'HealthDec',
  
  methods: {
    async savetofs() {
      try {
        var radio1 = document.getElementsByName("question1");
        var q1 = Array.from(radio1).find(radio => radio.checked);
        var q1value = q1.value;

        var radio2 = document.getElementsByName("question2");
        var q2 = Array.from(radio2).find(radio => radio.checked);
        var q2value = q2.value;

        var radio3 = document.getElementsByName("question3");
        var q3 = Array.from(radio3).find(radio => radio.checked);
        var q3value = q3.value;

        var radio4 = document.getElementsByName("question4");
        var q4 = Array.from(radio4).find(radio => radio.checked);
        var q4value = q4.value;

        alert("Saving")

        try{
          const auth = getAuth()
          this.email = auth.currentUser.email

          const docRef = doc(db, "details", this.email);
          await updateDoc(docRef, {
            pregnant: q1value, hiv: q2value, cancer: q3value, immunocompromised: q4value
          });
          console.log(docRef)
          document.getElementById('declaration').reset();

          alert("Responses saved successfully!")
          this.$router.push({name:'Profile'})
        }
        catch(error) {
          console.error("Error adding document: ", error);
        }
      } catch (error) {
        alert("Please ensure all questions have been answered")
        document.getElementById('declaration').reset();
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

  /* #declaration {
    display: inline-block;
    text-align: right;
  } */

  .btn {
    all:unset;
    width: 100px;
    height: 30px;
    background: #F5F5DD;

    cursor: pointer;
    font-size: 1rem;
    padding: 5px 0.5rem;
    border-radius: 10px;
    text-align: center;
  }
</style>