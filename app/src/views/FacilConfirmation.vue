<template>
  <NavigationBar/>
  <FacilConfirmation/>
</template>

<script>
import FacilConfirmation from '../components/FacilConfirmation.vue' 
import NavigationBar from '../components/NavigationBar.vue' 

export default {
    name:'Facility Checkout',
        components: {
            FacilConfirmation,
            NavigationBar
        }
}
</script>

<style>

</style>