<template>
    <div v-if="user">
        <NavigationBar/>
        <FAQContent/>
    </div>

    <div v-else>
        <NotLoggedIn/>
    </div>
</template>

<script>
import FAQContent from '../components/FaqContent.vue' 
import NavigationBar from '../components/NavigationBar.vue'
import NotLoggedIn from '../components/NotLoggedIn.vue'
import {getAuth, onAuthStateChanged} from 'firebase/auth'

export default {
    name:'FAQ',
    components: {
        FAQContent,
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