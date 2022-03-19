<template>
  <NavigationBar/>
  <MedFacilsDetails/>
</template>

<script>
import MedFacilsDetails from '../components/MedFacilsDetails.vue' 
import NavigationBar from '../components/NavigationBar.vue' 

export default {
    name:'Medical Facilities',
        components: {
            MedFacilsDetails,
            NavigationBar
        }
}
</script>

<style>

</style>