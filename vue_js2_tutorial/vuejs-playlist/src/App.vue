<template>
  <div id="app">
    <app-header></app-header>
    <!-- use ninjas component -->
    <app-ninjas></app-ninjas>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Ninjas from "@/components/Ninjas.vue"; // import Ninjas component
import Header from "@/components/Header.vue"; // import Ninjas component
import Footer from "@/components/Footer.vue"; // import Ninjas component

export default {
  components: {
    "app-header": Header, // register Header as app-header
    "app-ninjas": Ninjas,
    "app-footer": Footer
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

<style scoped>
h1 {
  color: purple;
}
</style>
