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

<style>
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
    
    /* profile dropdown */
    #profile {
        float: right;
    }

    #profile-button:hover{
        cursor: pointer;
        color: rgb(14, 83, 185)
    }
</style>