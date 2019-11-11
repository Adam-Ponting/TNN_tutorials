<template>
  <div>
    <form-helper>
      <div slot="f-header">
        <h3>This is the title of the form</h3>
        <p>Information about the form</p>
      </div>
      <div slot="f-fields">
        <input type="text" placeholder="name" required />
        <input type="password" placeholder="password" required />
      </div>
      <div slot="f-controls">
        <button @click.prevent="handleSubmit">Submit</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
import FormHelper from "@/components/FormHelper.vue"; // import Ninjas component

export default {
  components: {
    "form-helper": FormHelper
  },
  data() {
    return {
      title: "im a dymanic slot title"
    };
  },
  methods: {
    handleSubmit(e) {
      // eslint-disable-next-line no-console
      console.log(e);
      // alert(e);
    }
  }
};
</script>

<style scoped>
</style>
