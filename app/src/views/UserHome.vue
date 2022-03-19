<template>
    <NavigationBar/>
    <!-- Contact Us -->
    <UserHome/>
</template>

<script>
import UserHome from '../components/UserHomePage.vue' 
import NavigationBar from '../components/NavigationBar.vue' 

export default {
    name:'FAQ',
    components: {
        UserHome,
        NavigationBar
    }
}
</script>

<style>

</style>