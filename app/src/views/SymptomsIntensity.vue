<template>
  <div v-if="user">
    <NavigationBar/>
    <Symptoms3/>
  </div>

  <div v-else>
      <NotLoggedIn/>
  </div>
</template>

<script>
import Symptoms3 from "@/components/Symptoms3.vue";
import NavigationBar from '../components/NavigationBar.vue'
import NotLoggedIn from '../components/NotLoggedIn.vue'
import {getAuth, onAuthStateChanged} from 'firebase/auth' 

export default {
  name: "Intensity",
    components: {
      Symptoms3,
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
