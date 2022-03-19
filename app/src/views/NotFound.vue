<template>
  <div style="text-align:center;" v-if="user">
      <!-- Nav Bar -->

      <!-- Content -->
      <h1>Page Not Found</h1>
      <h2>Please click on the available options on the navigation bar</h2>
  </div>
</template>

<script>
import {getAuth, onAuthStateChanged} from 'firebase/auth'
export default {
    name: "NotFound",

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