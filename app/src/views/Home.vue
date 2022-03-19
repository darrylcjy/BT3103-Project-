<template>
    <!-- Navigation bar -->
    <NavigationBarUnauthorized/>
    <!-- Contact Us -->
    <Home/>
</template>

<script>
import Home from '../components/HomePage.vue' 
import NavigationBarUnauthorized from '../components/NavigationBarUnauthorized.vue' 

export default {
    name:'FAQ',
    components: {
        Home,
        NavigationBarUnauthorized
    }
}
</script>

<style>

</style>