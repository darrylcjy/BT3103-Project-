<template>
    <!-- Navigation bar -->
    <!-- Descriptions -->
    <div class="login">
        <div class="description">
            <div class="main">
                <p class="heading">COVIDCARE</p>
                <div class="content">This web application is created to guide you through the current COVID-19 procedures. If you are COVID-Positive, a close contact or want to get relevant COVID information, this application is for you. We hope that COVIDCARE will serve you well.</div>
                <p>Log in now to get started</p>

            </div>
        </div>
    <!-- Login Form -->
    <LoginFirebaseUI id="ui"/>

    </div>

</template>

<script>
import LoginFirebaseUI from '../components/LoginForm.vue' 

export default {
    name:'Login',
    components: {
        LoginFirebaseUI
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
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.heading {
    font-size: 2.5rem;
    letter-spacing: 8px;
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
}

#ui{
    padding: 1.5rem;
    width: 50%;
    align-self: center;
}
</style>