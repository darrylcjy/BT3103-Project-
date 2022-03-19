<template>
  <NavigationBar/>
  <Symptoms2 />
</template>

<script>
import Symptoms2 from "@/components/Symptoms2.vue";
import NavigationBar from '../components/NavigationBar.vue' 

export default {
  name: "Confirmation",
  components: {
    Symptoms2,
    NavigationBar
  },
};
</script>

<style>
</style>
