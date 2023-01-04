<template>
  <div id="content-area" class="content-area">
    <div id="main-content" class="relative content-wrapper">
      <TheNavbarVue />
      <EmployeeListVue />
    </div>
  </div>
</template>

<script>
import TheNavbarVue from "./navbar/TheNavbar.vue";
import EmployeeListVue from "@/views/employee/EmployeeList.vue";

export default {
  name: "TheContent",
  components: { TheNavbarVue, EmployeeListVue },
};
</script>

<style scoped>
@import url(../css/layout/the-content.css);
</style>
