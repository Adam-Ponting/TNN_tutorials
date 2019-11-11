<template>
  <div id="single-blog">
    <h1>{{ blog.title }}</h1>
    <article>{{ blog.content }}</article>
    <p>Author: {{blog.author}}</p>
    <ul>
      <li v-for="category in blog.categories" :key="category">{{category}}</li>
    </ul>
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
      // .get("http://jsonplaceholder.typicode.com/posts/" + this.id) // get the post matching route params id
      .get("https://tnn-tutorials.firebaseio.com/posts/" + this.id + ".json") // get the post matching route params id
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