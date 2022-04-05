<template>
    <div v-if="user">
        <!-- Navigation bar -->
        <NavigationBar/>
    </div>

    <div v-else>
        <!-- Navigation bar -->
        <NavigationBarUnauthorized/>
    </div>
    
    <!-- Contact Us -->
    <Home/>
    <Covid-Info/>
    <Footer/>
</template>

<script>
import Home from '../components/HomePage.vue' 
import NavigationBar from '../components/NavigationBar.vue'
import NavigationBarUnauthorized from '../components/NavigationBarUnauthorized.vue'
import CovidInfo from '../components/CovidInfo.vue'
import Footer from '../components/Footer.vue'
import {getAuth, onAuthStateChanged} from 'firebase/auth'

export default {
    name:'FAQ',
    components: {
        Home,
        NavigationBar,
        NavigationBarUnauthorized,
        CovidInfo,
        Footer
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