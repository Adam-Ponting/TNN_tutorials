<template>
  <div id="show-blogs">
    <h1>All Blog Articles</h1>
    <div v-for="(blog, index) in blogs" :key="index" class="single-blog">
      <h2>{{ blog.title }}</h2>
      <article>{{ blog.body }}</article>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      blogs: []
    };
  },
  created() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
      this.blogs = response.data.slice(0, 10);
    });
  }
};
</script>

<style scoped>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>