<template>
    <NavigationBar/>
    <!-- Contact Us -->
    <GettingStarted/>
</template>

<script>
import GettingStarted from '../components/GettingStartedPage.vue' 
import NavigationBar from '../components/NavigationBar.vue' 

export default {
    name:'FAQ',
    components: {
        GettingStarted,
        NavigationBar
    }
}
</script>

<style>

</style>