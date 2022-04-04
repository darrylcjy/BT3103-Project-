<template>
  <div class="main">
    <div class="btns">
      <button class="btn1" type="button" v-on:click="checkmedical()">
        I'm COVID positive
      </button>
      <button
        class="btn2"
        type="button"
        v-on:click="this.$router.push({ name: 'FAQ', params: { measure: 2 } })"
      >
        I'm a Close Contact
      </button>
    </div>

    <div class="img">
      <img
        class="swab"
        src="https://www.aamc.org/sites/default/files/woman-swab-test-1266490168.jpg"
        alt="COVID"
      />
    </div>
  </div>
</template>

<script>
import firebaseApp from "../firebase.js";
import { getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const db = getFirestore(firebaseApp);

export default {
  name: "GettingStartedPage",

  data() {
    return {
      email: "",
    };
  },

  mounted() {
    const auth = getAuth();
    this.email = auth.currentUser.email;
  },

  methods: {
    async checkmedical() {
      let z = await getDoc(doc(db, "details", String(this.email)));
      let data = z.data();

      this.pregnant = data.pregnant;
      this.hiv = data.hiv;
      this.cancer = data.cancer;
      this.immunocompromised = data.immunocompromised;

      if (
        this.pregnant == "Yes" ||
        this.hiv == "Yes" ||
        this.cancer == "Yes" ||
        this.immunocompromised == "Yes"
      ) {
        alert(
          "Based on your existing medical conditions, you have a higher risk of severe illness from Covid-19."
        );
        this.$router.push({ path: "/med-facils" });
      } else {
        this.$router.push({ path: "/selection" });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  max-width: 750px;
  margin: auto;
  padding: 1rem 2rem 1rem 1rem;
}

.btns {
  max-width: 750px;
}

.btn1 {
  all: unset;
  position: relative;
  width: 200px;
  height: 50px;
  right: 50px;
  top: 50px;
  background: #f5f5dd;

  cursor: pointer;
  font-size: 1rem;
  padding: 5px 0.5rem;
  border-radius: 10px;
  text-align: center;
}

.btn2 {
  all: unset;
  position: relative;
  width: 200px;
  height: 50px;
  left: 50px;
  top: 50px;
  background: #f5f5dd;

  cursor: pointer;
  font-size: 1rem;
  padding: 5px 0.5rem;
  border-radius: 10px;
  text-align: center;
}

.swab {
  position: relative;
  width: 650px;
  height: 350px;
  top: 100px;
}
</style>