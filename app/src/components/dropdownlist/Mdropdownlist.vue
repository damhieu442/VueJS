<template>
  <div class="ms-combo">
    <span>
      <div class="con-ms-tooltip">
        <div class="tooltip-content dropdown">
          <div class="select">
            <input class="selected" v-model="dropdownValue" disabled />
            <button
              class="caret"
              @click="isDropdown = !isDropdown"
              @blur="onBlur"
            >
              <div
                class="icon icon-16 icon-arrow-dropdown"
                :class="{
                  'arrow-dropdown--active': isDropdown,
                  'arrow-dropdown--unactive': !isDropdown,
                }"
              ></div>
            </button>
          </div>
          <ul class="menu-dropdown" v-show="isDropdown">
            <li
              class="item-dropdown--active"
              v-for="(record, index) in recordInPageValue"
              :key="index"
              @click="onSelect(record)"
            >
              {{ record }}
            </li>
          </ul>
        </div>
      </div>
    </span>
  </div>
</template>

<script>
export default {
  name: "MdropdownlistVue",
  data() {
    return {
      recordInPageValue: [
        "10 bản ghi trên 1 trang",
        "20 bản ghi trên 1 trang",
        "30 bản ghi trên 1 trang",
        "50 bản ghi trên 1 trang",
        "100 bản ghi trên 1 trang",
      ],
      isDropdown: false,
      dropdownValue: "20 bản ghi trên 1 trang",
    };
  },
  methods: {
    onBlur() {
      this.isDropdown = false;
    },
    onSelect(record) {
      this.dropdownValue = record;
      this.isDropdown = false;
      // console.log(record);
    },
  },
};
</script>

<style scoped>
@import url(./Mdropdownlist.css);
</style>
