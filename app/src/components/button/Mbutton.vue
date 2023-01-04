<template>
  <button
    :type="type"
    @click="AddOnClick"
    id="button"
    class="button ms-button ms-button-primary ms-dropdown-style-default"
  >
    <div class="ms-button-text ms-button--text">
      {{ title }}
    </div>
  </button>
</template>

<script>
export default {
  name: "MbuttonVue",
  props: {
    title: String,
    AddOnClick: Function,
    type: String,
    isPrimary: Boolean,
  },
};
</script>

<style scoped>
@import url(./Mbutton.css);
</style>
