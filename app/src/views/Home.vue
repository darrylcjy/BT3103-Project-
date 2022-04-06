<template>
    <div v-if="user">
        <!-- <div v-if="noprofile">
          <NoProfile/>
        </div>
        <div v-else-if="nohealth">
          <NoHealth/>
        </div>
        <div v-else-if="this.noprofile == false && this.nohealth == false"> -->
          <NavigationBarDesign/>
          <Home/>
          <Covid-Info/>
        <!-- </div> -->
    </div>
    <div v-else-if="this.user == false">
      <NavigationBarUnauthorized/>
      <Home/>
      <Covid-Info/>
      <Footer/>
    </div>    
</template>

<script>
import Home from '../components/HomePage.vue' 
import NavigationBarDesign from '../components/NavigationBarDesign.vue'
import NavigationBarUnauthorized from '../components/NavigationBarUnauthorized.vue'
import CovidInfo from '../components/CovidInfo.vue'
// import NoProfile from '../components/NoProfile.vue'
// import NoHealth from '../components/NoHealth.vue'
import Footer from '../components/Footer.vue'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import firebaseApp from "../firebase.js"
import {getFirestore} from "firebase/firestore"
import {doc, getDoc} from "firebase/firestore"
const db = getFirestore(firebaseApp);

export default {
    name:'FAQ',
    components: {
        Home,
        NavigationBarDesign,
        NavigationBarUnauthorized,
        CovidInfo,
        // NoProfile,
        // NoHealth,
        Footer
    },

    data() {
      return {
        user: null,
        nohealth: null,
        noprofile: null
      }
    },

    mounted() {
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.user = true
                this.getData()
            } else {
              this.user = false
            }
        })
    },

    methods: {
      async getData() {
        const auth = getAuth()
        this.email = auth.currentUser.email

        let z = await getDoc(doc(db, "details", String(this.email)))

        let data = z.data()

        try {
          console.log(data.name)

          if (data.pregnant == null) {
            this.nohealth = true
          } else {
            this.nohealth = false
            this.noprofile = false
          }
        } catch (error) {
          console.error("Error getting document: ", error);
          this.noprofile = true
        }
      }
    }
}
</script>

<style>

</style>