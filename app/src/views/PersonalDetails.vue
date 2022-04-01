<template>
    <!-- Navigation bar -->
    <!-- Personal Details -->
    <div v-if="user">
        <h1>Personal Details</h1>
        <div class="details">
            <div>Username: {{this.user.displayName}}</div>
            <div>Email: {{this.user.email}}</div>
        </div>
        <PersonalDetailsForm :email="this.user.email"/>
    </div>
    
    <div v-else>
        <NotLoggedIn/>
    </div>
</template>

<script>
import PersonalDetailsForm from '../components/PersonalDetailsForm.vue' 
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import NotLoggedIn from '../components/NotLoggedIn.vue'

export default {
    name:'PersonalDetails',
    components: {
        PersonalDetailsForm,
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

<style scoped>
.details{
    display: flex;
    justify-content: center;
    gap: 2rem;
    padding: 0.5rem;
    
}

.details div {
    font-size: 1.5rem;
    padding: 0.5rem;
}

h1 {
    margin-bottom: 0.2rem;
    text-align: center;
}

@media(max-width: 700px) {
    .details{
        flex-direction: column;
        gap: 0rem;
    }
}

</style>