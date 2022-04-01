<template>
  <div v-if="user">
    <NavigationBar/>
    <Symptoms1/>
  </div>

  <div v-else>
      <NotLoggedIn/>
  </div>
</template>

<script>
import Symptoms1 from "@/components/Symptoms1.vue"
import NavigationBar from '../components/NavigationBar.vue' 
import NotLoggedIn from '../components/NotLoggedIn.vue'
import {getAuth, onAuthStateChanged} from 'firebase/auth' 

export default {
  name: "Selection",
    components: {
      Symptoms1,
      NavigationBar,
      NotLoggedIn
    },

    data() {
      return {
        user: false
      }
    },

    mounted() {
      const auth = getAuth()
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user = user
        }
      })
    }
};
</script>

<style>
</style>
