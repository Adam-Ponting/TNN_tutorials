<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form v-if="!submitted">
      <label>Blog Title:</label>
      <input type="text" v-model.lazy="blog.title" required />
      <label>Blog Content:</label>
      <textarea v-model.lazy.trim="blog.content"></textarea>
      <div id="checkboxes">
        <label for>Ninjas</label>
        <input type="checkbox" value="ninjas" name id v-model="blog.categories" />
        <label for>Wizards</label>
        <input type="checkbox" value="wizards" name id v-model="blog.categories" />
        <label for>Mario</label>
        <input type="checkbox" value="mario" name id v-model="blog.categories" />
        <label for>Cheese</label>
        <input type="checkbox" value="cheese" name id v-model="blog.categories" />
      </div>
      <label for>Author</label>
      <select name id v-model="blog.author">
        <option value selected disabled hidden>Choose here</option>
        <option v-for="(author, index) in authors" :key="index" :value="author">{{ author }}</option>
      </select>
      <button @click.prevent="post">Add Blog</button>
    </form>
    <div v-if="error">
      <p>There was an error: {{error}}</p>
    </div>
    <div v-if="completed">{{completed}}</div>
    <div v-if="submitted">
      <h3>Thanks for adding your post</h3>
    </div>
    <div id="preview">
      <h3>Preview blog</h3>
      <p>Blog title: {{ blog.title }}</p>
      <p>Blog content:</p>
      <!-- https://www.w3schools.com/cssref/pr_text_white-space.asp -->
      <p style="white-space: pre">{{ blog.content }}</p>
      <p>Blog cagetories:</p>
      <ul>
        <li v-for="category in blog.categories" :key="category">{{ category }}</li>
      </ul>
      <p>Author: {{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */

import axios from "axios";

// Imports
export default {
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: ""
      },
      authors: ["The Net Ninja", "The Angular Avenger", "The Vue Vindicator"],
      submitted: false,
      error: "",
      completed: ""
    };
  },
  methods: {
    post() {
      // post to, with the object to post
      axios
        // .post("https://jsonplaceholder.typicode.com/posts", {
        .post(
          "https://tnn-tutorials.firebaseio.com/posts.json",
          this.blog // send the whole blog as the object, not individually
          // {
          //   title: this.blog.title,
          //   body: this.blog.content,
          // }
        )
        .then(data => {
          console.log(data);
          this.submitted = true;
        })
        .catch(error => {
          this.error = error;
        })
        .finally(() => (this.completed = "AXIOS completed"));
    }
  }
};
</script>

<style>
#add-blog * {
  /* everything within is border-box */
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label {
  display: inline-block;
}
</style>