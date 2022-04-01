<template>
    <div v-if="user">
        <NavigationBar/>
        <ActiveAppointments/>
    </div>

    <div v-else>
        <NotLoggedIn/>
    </div>
</template>

<script>
import ActiveAppointments from '../components/ActiveAppointments.vue' 
import NavigationBar from '../components/NavigationBar.vue'
import NotLoggedIn from '../components/NotLoggedIn.vue'
import {getAuth, onAuthStateChanged} from 'firebase/auth'

export default {
    name: 'Active Appointments',
    components: {
        NavigationBar,
        ActiveAppointments,
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