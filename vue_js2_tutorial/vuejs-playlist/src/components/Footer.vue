<template>
  <footer>
    <p>{{ copyright }} {{ title }}</p>
  </footer>
</template>

<script>
import { eventBus } from "../main.js"; // import event bus

export default {
  props: {
    title: {
      type: String,
      default: "no header",
      required: true
    }
  },
  data() {
    return {
      copyright: "Copyright 2019"
    };
  },
  created() {
    // setup event bus listen for "titleChanged" event
    eventBus.$on("titleChanged", data => {
      this.title = data;
    });
  }
};
</script>

<style scoped>
footer {
  background: #222;
  padding: 6px;
}
p {
  color: lightgreen;
  text-align: center;
}
</style>