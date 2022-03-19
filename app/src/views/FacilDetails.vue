<template>
  <NavigationBar/>
  <FacilDetails/>
</template>

<script>
import FacilDetails from '../components/FacilDetails.vue' 
import NavigationBar from '../components/NavigationBar.vue' 

export default {
    name:'Facility Details',
        components: {
            FacilDetails,
            NavigationBar
        }
}
</script>

<style>

</style>