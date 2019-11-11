<template>
  <header>
    <h1 @click="changeTitle">{{ title }}</h1>
  </header>
</template>

<script>
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
      // primitive data so only edited in this instance
      // this.title = "Vue Wizards";
      this.$emit("changeTitle", "Vue-Wizards"); // event name and data to be sent with the event - must be received with $event
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