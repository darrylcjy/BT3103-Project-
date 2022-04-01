<template>
  <div style="text-align:center;" v-if="user">
      <!-- Nav Bar -->
      <NavigationBar/>
      <!-- Content -->
      <h1>Page Not Found</h1>
      <h3>Please click on the available options on the navigation bar</h3>
  </div>
  <div style="text-align:center;" v-else>
      <NotLoggedIn/>
  </div>
</template>

<script>
import NavigationBar from '../components/NavigationBar.vue'
import NotLoggedIn from '../components/NotLoggedIn.vue'
import {getAuth, onAuthStateChanged} from 'firebase/auth'

export default {
    name: "NotFound",
    components: {
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