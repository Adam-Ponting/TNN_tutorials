export default {
    // create repeated code here to be imported where required
    computed: {
        filteredBlogs() {
            return this.blogs.filter(blog => {
              return blog.title.match(this.search); // searches for the search string in the blog title
            });
          }
    }
}