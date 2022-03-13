<template>
    <NavigationBar/>
    <IsolationCheckout/>
</template>

<script>
import NavigationBar from '../components/NavigationBar.vue'
import IsolationCheckout from '../components/IsolationCheckout.vue'

export default {
    name: 'Self-Isolation Checkout',
    components: {
        IsolationCheckout,
        NavigationBar
    }
}
</script>

<style>

</style>