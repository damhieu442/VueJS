<template>
  <label class="ms-component ms-checkbox justify-center ">
    <div class="ms-checkbox--input">
      <input type="checkbox" />
    </div>
    <span v-if="islabel" class="con-slot-label">
      <div class="con-ms-tooltip">
        <div class="tooltip-content">{{ label }}</div>
      </div>
    </span>
  </label>
</template>

<script>
export default {
  name: "McheckboxVue",
  props: {
    islabel: Boolean,
    label: String,
  },
};
</script>

<style scoped>
@import url(./Mcheckbox.css);
</style>
