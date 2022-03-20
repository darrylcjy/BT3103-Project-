<template>
    <div id="navbar">

        <div id="covidcare-dropdown">
            <button id="covidcare-button">CovidCare</button>
            <div id="covidcare-content">
                <a href="#" v-on:click="this.$router.push({path: '/user-home'})">Home</a>
                <a href="#" v-on:click="this.$router.push({path: '/facil-confirmation/active-appts'})">Active Appointments</a>
                <a href="#" v-on:click="this.$router.push({path: '/faq'})">FAQs</a> 
                <a href="#" v-on:click="this.$router.push({path: '/contact-us'})">Contacts</a> 
            </div>
        </div>

        <i id = "covidcare-icon">
            <img src="../assets/app.png" alt="Icon not found">
        </i>

        <div id="profile-dropdown">
            <button id="profile-button"> My Profile </button>
            <div id="profile-content">
                <a href="#" v-on:click="this.$router.push({path: '/profile'})">Profile</a>
                <a href="#">Logout</a>
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
    /* navbar container, which contains 
        1. covidcare dropdown container, which contains
            a. covidcare button
            b. covidcare content
        2. user dropdown container
            a. user button
            b. user content
    */

    /* nav bar container */
    #navbar {
        overflow: hidden;
        background-color: #F5F5DD;
        width: 100%
    }

    /* covidcare dropdown */
    #covidcare-dropdown, #covidcare-icon {
        float: left;
        overflow: hidden;
    }
    
    /* profile dropdown */
    #profile-dropdown, #profile-icon {
        float: right;
        overflow: hidden;
    }

    /* covidcare button */
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

    /* covidcare content , which is hidden by default */
    #covidcare-content, 
    #profile-content {
        display: none;
        position: fixed;
        min-width: 120px;
        background-color: #f9f9f9;
        box-shadow: 0px 6px 12px 0px rgba(0,0,0,0.2);   /* horizontal (-ve is left, + is right), vertical (-ve is top, + is bottom), blur effect, spread radius */
    }

    /* links in covidcare content */
    #covidcare-content a {
        display: block;
        text-align: left;
        text-decoration: none;
        padding: 12px 16px;
        color: black;
    }

    /* links in profile content */
    #profile-content a {
        display: block;
        text-align: right;
        text-decoration: none;
        padding: 12px 16px;
        color: black;
    }

    /* use of hovers */
    #covidcare-dropdown:hover,
    #profile-dropdown:hover {
        background-color: #B7DAFA;
    }

    #covidcare-content a:hover,
    #profile-content a:hover {
        background-color: #ddd;
    }

    /* show the dropdown menu on hover */
    #covidcare-dropdown:hover #covidcare-content {
        display: block;
    }
    #profile-dropdown:hover #profile-content {
        display: block;
    }
</style>