<template>
    <NavigationBar/>
    <!-- Contact Us -->
    <UserHome/>
    <br>
    <Logout/>
</template>

<script>
import UserHome from '../components/UserHomePage.vue' 
import NavigationBar from '../components/NavigationBar.vue' 
import UserHome from '../components/UserHomePage.vue'
// Testing logout button (can remove later once added on nav bar with logout)
import Logout from '../components/Logout.vue'

export default {
    name:'FAQ',
    components: {
        UserHome,
        NavigationBar
        Logout
    }
}
</script>

<style>

</style>