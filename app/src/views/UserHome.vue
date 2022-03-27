<template>
    <NavigationBar/>
    <!-- Contact Us -->
    <UserHome/>
    <br>
</template>

<script>
import UserHome from '../components/UserHomePage.vue' 
import NavigationBar from '../components/NavigationBar.vue' 
import {getAuth, onAuthStateChanged} from 'firebase/auth'

export default {
    name:'User',
    components: {
        UserHome,
        NavigationBar,
    },
    data() {
        return {
            user: false,
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