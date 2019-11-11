<template>
  <!-- v-theme is a custom directive -->
  <!-- :column is the argument with the directive -->
  <div v-theme:column="'wide'" id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" name id v-model="search" placeholder="search box" />
    <div v-for="(blog, index) in filteredBlogs" :key="index" class="single-blog">
      <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
      <article>{{ blog.body | snippet}}</article>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  created() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
      this.blogs = response.data.slice(0, 10); // get the first 10 responses
    });
  },
  computed: {
    filteredBlogs() {
      return this.blogs.filter(blog => {
        return blog.title.match(this.search); // searches for the search string in the blog title
      });
    }
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