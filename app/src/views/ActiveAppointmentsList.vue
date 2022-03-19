<template>
    <NavigationBar/>
    <ActiveAppointments/>
</template>

<script>
import ActiveAppointments from '../components/ActiveAppointments.vue' 
import NavigationBar from '../components/NavigationBar.vue'

export default {
    name: 'Active Appointments',
    components: {
        NavigationBar,
        ActiveAppointments
    }
}
</script>

<style>

</style>