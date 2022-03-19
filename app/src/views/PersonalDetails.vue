<template>
    <!-- Navigation bar -->
    <!-- Personal Details -->
    <div v-if="user">
        <h1>Personal Details</h1>
        <div class="details">
            <p>Username: {{this.user.displayName}}</p>
            <p>Email: {{this.user.email}}</p>
        </div>
        <PersonalDetailsForm :email="this.user.email"/>
    </div>
    
</template>

<script>
import PersonalDetailsForm from '../components/PersonalDetailsForm.vue' 
import {getAuth, onAuthStateChanged} from 'firebase/auth'

export default {
    name:'PersonalDetails',
    components: {
        PersonalDetailsForm
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