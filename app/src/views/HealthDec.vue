<template>
    <div v-if="user">
        <div v-if="filled">
          <!-- Navigation bar -->
          <NavigationBar/>
        </div>
        <!-- Contact Us -->
        <HealthDec/>
    </div>

    <div v-else>
        <NotLoggedIn/>
    </div>
</template>

<script>
import HealthDec from '../components/HealthDecForm.vue' 
import NavigationBar from '../components/NavigationBar.vue'
import NotLoggedIn from '../components/NotLoggedIn.vue'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import firebaseApp from "../firebase.js";
import {getFirestore} from "firebase/firestore";
import {doc, getDoc} from "firebase/firestore";
const db = getFirestore(firebaseApp);

export default {

    name:'FAQ',
    components: {
        HealthDec,
        NavigationBar,
        NotLoggedIn
    },

    data() {
      return {
        user: false,
        filled: false
      }
    },

    mounted() {
      const auth = getAuth()
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user = user;
          this.getData();
        }
      })
    },

    methods: {
      async getData() {
            const auth = getAuth()
            this.email = auth.currentUser.email

            let z = await getDoc(doc(db, "details", String(this.email)))

            let data = z.data()
            console.log(data.name)

            if (data.pregnant == "Yes" || data.pregnant == "No") {
              this.filled = true
            }
      }
    }
}
</script>

<style>

</style>