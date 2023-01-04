<template>
  <div id="app">
    <div class="layout--main">
      <TheSidebarVue />
      <TheContentVue />
      <MdialogVue v-if="false" />
    </div>
  </div>
</template>

<script>
import TheSidebarVue from "./layout/TheSidebar.vue";
import TheContentVue from "./layout/TheContent.vue";
import MdialogVue from "./components/dialog/Mdialog.vue";

export default {
  name: "App",
  components: {
    TheSidebarVue,
    TheContentVue,
    MdialogVue,
  },
};
</script>

<style>
@import url(./css/app.css);
</style>
