<template>
    <div v-if="user">
        <!-- Navigation bar -->
        <!-- Contact Us -->
        <NavigationBar/>
        <ContactUs/>
    </div>

    <div v-else>
        <NotLoggedIn/>
    </div>
</template>

<script>
import ContactUs from '../components/ContactUsContent.vue' 
import NavigationBar from '../components/NavigationBar.vue'
import NotLoggedIn from '../components/NotLoggedIn.vue'
import {getAuth, onAuthStateChanged} from 'firebase/auth'

export default {
    name:'FAQ',
    components: {
        ContactUs,
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