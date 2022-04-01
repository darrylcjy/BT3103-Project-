<template>
  <div v-if="user">
    <NavigationBar/>
    <Symptoms2 />
  </div>

  <div v-else>
      <NotLoggedIn/>
  </div>
</template>

<script>
import Symptoms2 from "@/components/Symptoms2.vue";
import NavigationBar from '../components/NavigationBar.vue' 
import NotLoggedIn from '../components/NotLoggedIn.vue'
import {getAuth, onAuthStateChanged} from 'firebase/auth'

export default {
  name: "Confirmation",
    components: {
      Symptoms2,
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
}
</script>

<style>
</style>
