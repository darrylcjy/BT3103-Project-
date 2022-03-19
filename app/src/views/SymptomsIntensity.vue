<template>
  <NavigationBar/>
  <Symptoms3 />
</template>

<script>
import Symptoms3 from "@/components/Symptoms3.vue";
import NavigationBar from '../components/NavigationBar.vue' 

export default {
  name: "Intensity",
  components: {
    Symptoms3,
    NavigationBar
  },
};
</script>

<style>
</style>
