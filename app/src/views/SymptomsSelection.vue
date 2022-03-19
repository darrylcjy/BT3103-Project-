<template>
  <NavigationBar/>
  <Symptoms1/>
</template>

<script>
import Symptoms1 from "@/components/Symptoms1.vue";
import NavigationBar from '../components/NavigationBar.vue' 

export default {
  name: "Selection",
  components: {
    Symptoms1,
    NavigationBar
  },
};
</script>

<style>
</style>
