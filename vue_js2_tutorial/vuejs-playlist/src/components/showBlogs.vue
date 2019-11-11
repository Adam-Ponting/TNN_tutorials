<template>
  <!-- v-theme is a custom directive -->
  <!-- :column is the argument with the directive -->
  <div v-theme:column="'wide'" id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" name id v-model="search" placeholder="search box" />
    <div v-for="(blog, index) in filteredBlogs" :key="index" class="single-blog">
      <router-link :to="'/blog/' + blog.id">
        <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
      </router-link>
      <article>{{ blog.body | snippet}}</article>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import searchMixin from "@/mixins/searchMixin.js";

export default {
  data() {
    return {
      blogs: [],
      search: "" // used for search filter
    };
  },
  created() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
      this.blogs = response.data.slice(0, 10); // get the first 10 responses
    });
  },
  computed: {
    // filteredBlogs() { // used as a mixin
    //   return this.blogs.filter(blog => {
    //     return blog.title.match(this.search); // searches for the search string in the blog title
    //   });
    // }
  },
  filters: {
    // register filter locally
    toUppercase(value) {
      // same as 'to-uppercase: function(value){}
      return value.toUpperCase();
    }
  },
  directives: {
    rainbow: {
      // eslint-disable-next-line no-unused-vars
      bind(el, binding, vnode) {
        el.style.color =
          "#" +
          Math.random()
            .toString()
            .slice(2, 8);
      }
    }
  },
  mixins: [searchMixin] // use mixins, declared as array
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