<template>
    <div id="navbar">

        <div id="covidcare">
            <button id="covidcare-button">CovidCare</button>
        </div>

        <i id = "covidcare-icon">
            <img src="../assets/app.png" alt="Icon not found">
        </i>

        <div id="profile">
            <button id="profile-button" v-on:click="this.$router.push({path: '/login'})"> Sign up | Login </button>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    /* nav bar container */
    #navbar {
        overflow: hidden;
        background-color: #F5F5DD;
        width: 100%
    }

    /* covidcare dropdown */
    #covidcare, #covidcare-icon {
        float: left;
    }

    #covidcare-button, 
    #profile-button {
        font-size: 1.5rem;
        font-weight: bold;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        border: none;
        padding: 12px 16px;
        width: 100%;
        color: black;
        background-color: inherit;
    }
    
    /* profile dropdown */
    #profile {
        float: right;
    }

    #profile-button {
        cursor: pointer;
    }

    #profile-button:hover{
        cursor: pointer;
        color: rgb(14, 83, 185)
    }
</style>