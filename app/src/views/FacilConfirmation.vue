<template>
  <div v-if="user">
    <NavigationBar/>
    <FacilConfirmation/>
  </div>

  <div v-else>
      <NotLoggedIn/>
  </div>
</template>

<script>
import FacilConfirmation from '../components/FacilConfirmation.vue' 
import NavigationBar from '../components/NavigationBar.vue' 
import NotLoggedIn from '../components/NotLoggedIn.vue'
import {getAuth, onAuthStateChanged} from 'firebase/auth'

export default {
  name:'Facility Checkout',
    components: {
      FacilConfirmation,
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