<template>
  <div id="app">
    <h1></h1>
    <p>{{ greeting() }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "your first vue file!"
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
