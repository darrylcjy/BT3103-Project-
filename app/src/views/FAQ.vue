<template>
    <NavigationBar/>
    <FAQContent/>
</template>

<script>
import FAQContent from '../components/FaqContent.vue' 
import NavigationBar from '../components/NavigationBar.vue'

export default {
    name:'FAQ',
    components: {
        FAQContent,
        NavigationBar
    }
}
</script>

<style>

</style>