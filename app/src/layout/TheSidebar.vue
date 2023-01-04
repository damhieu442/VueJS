<template>
  <div class="menu-container expand">
    <div class="logo-container">
      <a href="#" class="icon icon-24 icon-container-option"></a>
      <a href="" class="logo">
        <img
          class="img-icon"
          src="../assets/img/Logo_Module_TiengViet_White.66947422.svg"
          alt=""
        />
      </a>
    </div>
    <div class="menu-bar">
      <div class="menu-item-list scroller">
        <div
          class="parent-item-menu"
          v-for="(sidebar, index) in listSidebar"
          :key="index"
        >
          <a href="#" class="menu-item" :class="{ active: sidebar.isActive }">
            <div class="menu-item__icon">
              <div
                class="icon icon-24"
                :class="[sidebar.isActive ? sidebar.iconActive : sidebar.icon]"
              ></div>
            </div>
            <div class="menu-item__title">{{ sidebar.title }}</div>
          </a>
        </div>
        <!-- <div class="separation-line" hidden></div>
        <div class="parent-item-menu" hidden>
          <a href="#" class="menu-item">
            <div class="menu-item__icon">
              <div class="icon icon-24 icon-sidebar-news"></div>
            </div>
            <div class="menu-item__title">Kiến thức</div>
            <div class="menu-item__notify">
              <div class="notify_icon">7+</div>
            </div>
          </a>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheSidebar",
  data() {
    return {
      listSidebar: [
        {
          title: "Tổng quan",
          isActive: true,
          icon: "icon-sidebar-dashboard",
          iconActive: "icon-sidebar-dashboard--active",
        },
        {
          title: "Tiền mặt",
          isActive: false,
          icon: "icon-sidebar-cash",
          iconActive: "icon-sidebar-cash--active",
        },
        {
          title: "Tiền gửi",
          isActive: false,
          icon: "icon-sidebar-bank",
          iconActive: "icon-sidebar-bank--active",
        },
        {
          title: "Mua hàng",
          isActive: false,
          icon: "icon-sidebar-pu",
          iconActive: "icon-sidebar-pu--active",
        },
        {
          title: "Bán hàng",
          isActive: false,
          icon: "icon-sidebar-sale",
          iconActive: "icon-sidebar-sale--active",
        },
        {
          title: "Quản lý hóa đơn",
          isActive: false,
          icon: "icon-sidebar-invoice",
          iconActive: "icon-sidebar-invoice--active",
        },
        {
          title: "Kho",
          isActive: false,
          icon: "icon-sidebar-stock",
          iconActive: "icon-sidebar-stock--active",
        },
        {
          title: "Công cụ dụng cụ",
          isActive: false,
          icon: "icon-sidebar-tools",
          iconActive: "icon-sidebar-tools--active",
        },
        {
          title: "Tài sản cố định",
          isActive: false,
          icon: "icon-sidebar-fixed-assets",
          iconActive: "icon-sidebar-fixed-assets--active",
        },
        {
          title: "Thuế",
          isActive: false,
          icon: "icon-sidebar-tax",
          iconActive: "icon-sidebar-tax--active",
        },
        {
          title: "Giá thành",
          isActive: false,
          icon: "icon-sidebar-price",
          iconActive: "icon-sidebar-price--active",
        },
        {
          title: "Tổng hợp",
          isActive: false,
          icon: "icon-sidebar-general",
          iconActive: "icon-sidebar-general--active",
        },
        {
          title: "Ngân sách",
          isActive: false,
          icon: "icon-sidebar-budget",
          iconActive: "icon-sidebar-budget--active",
        },
        {
          title: "Báo cáo",
          isActive: false,
          icon: "icon-sidebar-report",
          iconActive: "icon-sidebar-report--active",
        },
        {
          title: "Phân tích tài chính",
          isActive: false,
          icon: "icon-sidebar-finance",
          iconActive: "icon-sidebar-finance--active",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url(../css/icon.css);
@import url(../css/layout/the-siderbar.css);
</style>
