<template>
    <!-- Navigation bar -->
    <!-- Descriptions -->
    <div v-if="user">
        <h2>You are logged in!</h2>
        <a href="/user-home">Go to Home</a>
    </div>

    <div class="login" v-else>
        <div class="description">
            <div class="main">
                <p class="heading">Welcome!</p>
                <div class="content">CovidCare is created to guide you through the current COVID-19 procedures. If you are COVID-19 positive, a close contact or want to get relevant COVID-19 information, this application is for you. We hope to serve you well.</div>
                <div class="last">
                    <button @click="home()">Return to Home</button>
                </div>
            </div>
        </div>
        <!-- Login Form -->
        <LoginFirebaseUI id="ui"/>
    </div>

</template>

<script>
import LoginFirebaseUI from '../components/LoginForm.vue' 
import {getAuth, onAuthStateChanged} from 'firebase/auth'

export default {
    name:'Login',
    components: {
        LoginFirebaseUI
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
    },

    methods: {
        home() {
            this.$router.push({name:'Home'})
        }
    }
}
</script>

<style scoped>
.login {
    display: flex;
}

.description {
    width: 55%;
    padding: 1.5rem;
    background-color: #B7DAFA ;
    box-shadow: 1px 1px 3px grey;
    background: linear-gradient(270deg, rgba(183,218,250,1) 45%, rgba(246,237,255,1) 100%);
    border-top-right-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.heading {
    font-size: 2.5rem;
    /* letter-spacing: 8px; */
    margin-bottom: 0rem;
}

.content {
    width: 80%;
    font-size: 1.25rem;
    line-height: 1.7rem;
    text-align: justify;
    margin: 1rem auto;
}

p {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0rem;
}

#ui{
    padding: 1.5rem;
    width: 50%;
    align-self: center;
}

button {
    all:unset;
    background: none;
    cursor: pointer;
    font-size: 1.25rem;
    font-weight: bold;
    color:inherit;
    padding: 0.5rem 1rem;
    margin-top: 0.7rem;
    border: 1px solid black;
    border-radius: 1rem;
}

button:hover {
    box-shadow: 1px 1px 4px grey;
}

@media(max-width: 750px) {
    .login {
        flex-direction: column;
        min-width: 450px;
        align-items: center;
    }

    .description {
        width: 100%;
        padding: 1.5rem 0rem;
        border-radius:1.5rem;
        min-height: auto;
        background-color: #B7DAFA ;
        box-shadow: 1px 1px 3px grey;
        background: linear-gradient(270deg, rgba(183,218,250,1) 45%, rgba(246,237,255,1) 100%);
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    #ui{
        width:100%;
        align-items: center;
    }
}
</style>