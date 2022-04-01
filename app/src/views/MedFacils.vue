<template>
  <div v-if="user">
    <NavigationBar/>
    <MedFacilsDetails/>
  </div>

  <div v-else>
      <NotLoggedIn/>
  </div>
</template>

<script>
import MedFacilsDetails from '../components/MedFacilsDetails.vue' 
import NavigationBar from '../components/NavigationBar.vue' 
import NotLoggedIn from '../components/NotLoggedIn.vue'
import {getAuth, onAuthStateChanged} from 'firebase/auth'

export default {
  name:'Medical Facilities',
    components: {
      MedFacilsDetails,
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