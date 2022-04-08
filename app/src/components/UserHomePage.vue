<template>
  <div class="main">
    <div class="welcome">
      <h1 class="heading">Welcome, {{ name }}</h1>
      <button class="btn" type="button" v-on:click="this.$router.push({path: '/getting-started'})">Get started!</button>
    </div>
    <br>
    <div class="header size">
      <h1>COVID Resources</h1><hr>
    </div>
    <div class="resources size">
      <div class="subresource" v-on:click="this.$router.push({path: '/facil-confirmation/active-appts'})">
        <img class="image" src="../assets/userhome2.png" alt="">
        <h2>View Latest Appointment</h2>
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
    margin: auto;
  }

  .size {
    max-width: 1000px;
    margin: auto;
    padding: 0;
  }

  .welcome {
    background: url("../assets/userhome1.png");
    background-position-y: 90%;
    background-size: cover;
    height: 300px;
  }

  .heading {
    position: relative;
    color: white;
    top: 100px;
    margin-top:0;
  }

  .header {
    text-align: left;
  }

  .resources {
    display: flex;
    gap: 1rem;
  }

  .subresource {
    flex-grow: 1;
    cursor: pointer;
  }

  .image:hover {
    box-shadow: 1px 1px 3px grey;
  }

  .image {
    height: 90%;
    width: 100%;
  }

  h2 {
    background: skyblue;
    margin-top: 0;
  }

  .btn {
    all: unset;
    position: relative;
    top: 100px;
    background: #f5f5dd;

    cursor: pointer;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 0.6rem 2rem;
    border-radius: 10px;
    text-align: center;
  }

  .btn:hover {
    box-shadow: 1px 1px 3px white;
  }
</style>