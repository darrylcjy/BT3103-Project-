<template>
    <div id="navbar">

        <div id="covidcare">
            <button id="covidcare-button">CovidCare</button>
        </div>

        <i id = "covidcare-icon">
            <img src="../assets/app.png" alt="Icon not found">
        </i>

        <div id="profile-dropdown">
            <button id="profile-button"> My Profile </button>
            <div id="profile-content">
                <a href="#" v-on:click="this.$router.push({path: '/profile'})">Profile</a>
                <a href="#" v-on:click="signOut()">Logout</a>
            </div>
        </div>

        <i id = "profile-icon">
            <img src="../assets/user.png" alt="Icon not found">

        </i>

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
        color: rgb(14, 83, 185)
    }
</style>