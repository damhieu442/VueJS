<template>
  <div class="combobox">
    <div class="combobox-input__control">
      <input
        type="text"
        class="combobox-input"
        v-model="inputValue"
        @focus="onFocus"
        @blur="onBlur"
      />
      <button
        class="combobox-input__icon"
        @click.prevent="isDropdownVisible = !isDropdownVisible"
      >
        <div
          class="icon icon-16 icon-chevron-down-solid"
          :class="{
            'chevron-down-active': isDropdownVisible,
            'chevron-down-close': !isDropdownVisible,
          }"
        ></div>
      </button>
    </div>
    <div class="combobox-dropdown" v-show="isDropdownVisible">
      <div style="overflow: auto; max-height: 100px; margin: 8px 8px">
        <div
          v-for="item in items"
          :key="item.id"
          class="combobox-dropdown__item"
          @click="onSelected(item)"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "McomboboxVue",
  components: {},
  data() {
    return {
      items: [
        { id: 1, name: "Phòng kế toán" },
        { id: 2, name: "Phòng hành chính" },
        { id: 3, name: "Phòng nhân sự" },
        { id: 4, name: "Phòng đào tạo" },
      ],
      isDropdownVisible: false,
      inputValue: "",
    };
  },
  // computed: {
  //   filters() {
  //     return this.items.filter((item) => {
  //       return item.name.tolowerCase().includes(this.inputValue.tolowerCase());
  //     });
  //   },
  // },
  methods: {
    // Focus vào input thì sẽ hiển thị danh sách
    onFocus() {
      this.isDropdownVisible = true;
    },
    // Đóng danh sách khi blur input
    onBlur() {
      this.isDropdownVisible = false;
    },
    // Binding dữ liệu
    onSelected(item) {
      this.inputValue = item.name;
      this.isDropdownVisible = false;
    },
  },
};
</script>

<style scoped>
@import url(./Mcombobox.css);
</style>
