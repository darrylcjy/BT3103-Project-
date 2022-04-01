<template>
    <!-- User must be logged in -->
    <div v-if="user">
        <!-- Nav Bar -->
        <NavigationBar/>
        <!-- Personal info of user with edit button-->
        <ProfileInfo/>
    </div>

    <div v-else>
        <NotLoggedIn/>
    </div>
</template>

<script>
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import ProfileInfo from '../components/ProfileInfo.vue'
import NavigationBar from '../components/NavigationBar.vue' 
import NotLoggedIn from '../components/NotLoggedIn.vue'

export default {
    name:'Profile',
    components: {
        ProfileInfo,
        NavigationBar,
        NotLoggedIn
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