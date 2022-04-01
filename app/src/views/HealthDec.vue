<template>
    <div v-if="user">
        <!-- Navigation bar -->
        <NavigationBar/>
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

export default {
    name:'FAQ',
    components: {
        HealthDec,
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