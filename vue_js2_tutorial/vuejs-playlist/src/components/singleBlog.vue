<template>
  <div id="single-blog">
    <h1>{{ blog.title }}</h1>
    <article>{{ blog.body }}</article>
    <div v-if="error">{{error}}</div>
    <div v-if="xfinally">{{xfinally}}</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {}, // to store blog retrieved from the server
      error: "",
      xfinally: ""
    };
  },
  created() {
    axios
      .get("http://jsonplaceholder.typicode.com/posts/" + this.id) // get the post matching route params id
      .then(response => {
        this.blog = response.data;
      })
      .catch(error => {
        this.error = error;
      })
      .finally(() => {
        this.xfinally = "AXIOS call complete";
      });
  }
};
</script>

<style scoped>
#single-blog {
  max-width: 960px;
  margin: 0 auto;
}
</style>