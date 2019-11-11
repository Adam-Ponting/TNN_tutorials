<template>
  <header>
    <h1 @click="changeTitle">{{ title }}</h1>
  </header>
</template>

<script>
import { eventBus } from "../main.js";

export default {
  props: {
    title: {
      type: String,
      default: "no header",
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    changeTitle() {
      // this.$emit("changeTitle", "Vue-Wizards"); // event name and data to be sent with the event - must be received with $event
      this.title = "vue_wizards";
      eventBus.$emit("titleChanged", this.title);
    }
  }
};
</script>

<style scoped>
header {
  background: lightgreen;
  padding: 10px;
}
h1 {
  color: #222;
  text-align: center;
}
</style>