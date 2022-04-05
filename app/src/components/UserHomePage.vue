<template>
  <div class="main">
    <div class="welcome">
      <h1 class="heading">Welcome, {{ name }}</h1>
      <button class="btn" type="button" v-on:click="this.$router.push({path: '/getting-started'})">Get started!</button>
    </div>
    <br>
    <div class="header">
      <h1>COVID Resources</h1><hr>
    </div>
    <div class="resources">
      <div class="subresource" v-on:click="this.$router.push({path: '/facil-confirmation/active-appts'})">
        <img class="image" src="../assets/userhome2.png" alt="">
        <h2>Active Appointments</h2>
      </div>
      <div class="subresource" v-on:click="this.$router.push({path: '/faq'})">
        <img class="image" src="../assets/userhome3.png" alt="">
        <h2>FAQs</h2>
      </div>
      <div class="subresource" v-on:click="this.$router.push({path: '/contact-us'})">
        <img class="image" src="../assets/userhome4.png" alt="">
        <h2>Contacts</h2>
      </div>
    </div>
  </div>
</template>

<script>
import firebaseApp from "../firebase.js";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
const db = getFirestore(firebaseApp);

export default {
  name: 'UserHome',
  
  data(){
    return{
      name: "",
    }
  },

  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.display(user);
      }
    })
  },
  
  methods: {
    async display(user) {
      let z = await getDoc(doc(db, "details", String(user.email)));

      let data = z.data();
      this.name = data.name;
      console.log(this.name)
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

  .welcome {
    background: url("../assets/userhome1.png");
    height: 300px;
    justify-content: center;
    align-items: center;
  }

  .heading {
    position: relative;
    color: white;
    top: 100px;
  }

  .header {
    text-align: left;
  }

  .resources {
    display: flex;
  }

  .subresource {
    flex-grow: 1;
    cursor: pointer;
  }

  .image {
    height: 100%;
    width: 100%;
  }

  h2 {
    background: skyblue;
    margin-top: 0;
  }

  .btn {
    all: unset;
    position: relative;
    width: 130px;
    height: 40px;
    top: 100px;
    background: #f5f5dd;

    cursor: pointer;
    font-size: 1rem;
    padding: 5px 0.5rem;
    border-radius: 10px;
    text-align: center;
  }
</style>