<template>
  <div>
    <!-- use $event to receive the data from the child component -->
    <app-header :title="title"></app-header>
    <app-ninjas :ninjas="ninjas"></app-ninjas>
    <hr />
    <app-ninjas :ninjas="ninjas"></app-ninjas>
    <app-footer :title="title"></app-footer>
  </div>
</template>

<script>
import Ninjas from "@/components/Ninjas.vue"; // import Ninjas component
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    "app-header": Header, // register Header as app-header
    "app-ninjas": Ninjas,
    "app-footer": Footer
  },
  data() {
    return {
      ninjas: [
        { name: "Ryu", speciality: "Vue Components", show: false },
        { name: "Crystal", speciality: "HTML Wizardry", show: false },
        { name: "Hitoshi", speciality: "Click Events", show: false },
        { name: "Tango", speciality: "Conditionals", show: false },
        { name: "Kami", speciality: "Webpack", show: false },
        { name: "Yoshi", speciality: "Data Diggin", show: false }
      ],
      title: "Vue Ninjas Prop"
    };
  },
  methods: {
    updateTitle(updatedTitle) {
      // updatedTitle is the $event prop
      this.title = updatedTitle;
    }
  }
};
</script>

<style scoped>
</style>
