<template>
    <div v-if="user">
        <NavigationBar/>
        <!-- Contact Us -->
        <UserHome/>
        <CovidInfo/>
    </div>

    <div v-else>
        <NotLoggedIn/>
    </div>
</template>

<script>
import UserHome from '../components/UserHomePage.vue' 
import NavigationBar from '../components/NavigationBar.vue' 
import NotLoggedIn from '../components/NotLoggedIn.vue'
import CovidInfo from '../components/CovidInfo.vue'
import {getAuth, onAuthStateChanged} from 'firebase/auth'

export default {
    name:'User',
    components: {
        UserHome,
        NavigationBar,
        NotLoggedIn,
        CovidInfo
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