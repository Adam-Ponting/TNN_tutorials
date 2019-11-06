<template>
  <div id="app">
    <h1>{{title}}</h1>
    <!-- use ninjas component -->
    <ninjas></ninjas>
  </div>
</template>

<script>
import Ninjas from "@/components/Ninjas.vue"; // import Ninjas component

export default {
  components: {
    ninjas: Ninjas // register Ninjas component as ninjas
  },
  data() {
    return {
      title: "Ninja App!"
    };
  },
  methods: {
    greeting() {
      return "hey cowboy";
    }
  }
};
</script>

<style>
</style>
