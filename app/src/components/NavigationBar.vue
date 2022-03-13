<template>
    <div id="navbar">
        <div id="covidcare-dropdown">
            <button id="covidcare-button">CovidCare</button>
            <div id="covidcare-content">
                <a href="#">Home</a>
                <a href="#">Active Appointments</a> 
                <a href="#">FAQs</a> 
                <a href="#">Contacts</a> 
            </div>
        </div>

        <div id="profile-dropdown">
            <button id="profile-button"> My Profile </button>
            <div id="profile-content">
                <a href="#">Edit personal details</a>
                <a href="#">Logout</a>
            </div>
        </div>
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
    }

    /* covidcare dropdown */
    #covidcare-dropdown {
        float: left;
        overflow: hidden;
    }
    
    /* profile dropdown */
    #profile-dropdown {
        float: right;
        overflow: hidden;
    }

    /* covidcare button */
    #covidcare-button, 
    #profile-button {
        font-size: 20px;
        font-family: Avenir;
        font-weight: bold;
        border: none;
        padding: 12px 16px;
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