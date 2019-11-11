<template>
  <div>
    <!-- keep-alive keeps prevent data/component being destroyed when toggleing -->
    <keep-alive>
      <!-- component will render the component defined by is="" -->
      <component :is="component"></component>
    </keep-alive>
    <button @click="component = 'form-one'">Show form one</button>
    <button @click="component = 'form-two'">Show form two</button>
  </div>
</template>

<script>
// Imports
import FormOne from "@/components/FormOne.vue";
import FormTwo from "@/components/FormTwo.vue";
export default {
  components: {
    "form-one": FormOne,
    "form-two": FormTwo
  },
  data() {
    return {
      component: "form-one"
    };
  }
};
</script>

<style>
body {
  margin: 0;
  font-family: "Nunito SemiBold";
}
</style>