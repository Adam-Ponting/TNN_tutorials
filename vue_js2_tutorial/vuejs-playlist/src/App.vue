<template>
  <div>
    <app-header></app-header>
    <!-- show the route declared in vue router  -->
    <router-view></router-view>
  </div>
</template>

<script>
import header from "@/components/header.vue";

export default {
  components: {
    "app-header": header
  }
};
</script>

<style scoped>
body {
  margin: 0;
  font-family: "Nunito Semibold";
}
</style>