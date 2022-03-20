<template>
    <!-- User must be logged in -->
    <div v-if="user">
        <!-- Nav Bar -->
    
        <!-- Personal info of user with edit button-->
        <ProfileInfo/>
    </div>
</template>

<script>
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import ProfileInfo from '../components/ProfileInfo.vue'

export default {
    name:'Profile',
    components: {
        ProfileInfo
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