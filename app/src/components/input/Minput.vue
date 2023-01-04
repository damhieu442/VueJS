<template>
  <div class="ms-component ms-con-input-label ms-input">
    <span>
      <div class="ms-con-input">
        <input
          class="ms-input--input ms-input-normal"
          :type="type"
          :placeholder="placeholder"
          v-model="inputData"
        />
        <div
          v-if="isIconSearch"
          class="ms-input--icon icon-after icon-no-border icon-search icon icon-16"
        ></div>
      </div>
    </span>
  </div>
</template>

<script>
export default {
  name: "MinputVue",
  props: {
    type: String,
    placeholder: String,
    isIconSearch: Boolean,
  },
  data() {
    return {
      inputData: "",
    };
  },
  watch: {
    inputData: function (newValue) {
      this.$emit("change", newValue);
      console.log("Input value: ", newValue);
    },
  },
};
</script>

<style scoped>
@import url(./Minput.css);
</style>
