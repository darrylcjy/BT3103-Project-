<template>
    <div v-if="user">
        <NavigationBar/>
        <!-- Contact Us -->
        <GettingStarted/>
    </div>

    <div v-else>
        <NotLoggedIn/>
    </div>
</template>

<script>
import GettingStarted from '../components/GettingStartedPage.vue' 
import NavigationBar from '../components/NavigationBar.vue' 
import NotLoggedIn from '../components/NotLoggedIn.vue'
import {getAuth, onAuthStateChanged} from 'firebase/auth'

export default {
    name:'FAQ',
    components: {
        GettingStarted,
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