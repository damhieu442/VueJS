<template>
  <div class="the-navbar bg-white">
    <div class="navbar-wrapper">
      <div class="navbar flex items-center content-space">
        <div class="navbar flex items-center">
          <div class="header-icon icon icon-24 icon-three-stripes"></div>
          <div class="flex header-branch">
            <div class="con-ms-tooltip">
              <div class="tooltip-content">
                <div
                  class="header-branch-name"
                  title="CÔNG TY TNHH - SẢN XUẤT - THƯƠNG MẠI - DỊCH VỤ QUI PHÚC"
                >
                  CÔNG TY TNHH - SẢN XUẤT - THƯƠNG MẠI - DỊCH VỤ QUI PHÚC
                </div>
              </div>
            </div>
            <a href="#" class="flex items-center">
              <div
                class="header-icon icon icon-14 icon-chevron-right header-branch-icon"
              ></div>
            </a>
          </div>
        </div>
        <div class="navbar flex items-center">
          <div class="notify">
            <div
              class="con-ms-tooltip header-menu-icon header-menu-icon-notify"
              title="Thông báo"
            >
              <div class="tooltip-content">
                <div class="header-icon">
                  <div class="wrap-notify header-menu-icon-simple">
                    <div class="icon icon-24 icon-bell__nav wiggle"></div>
                    <div class="notifyno" hidden>4</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="account-info">
            <div class="dropdown-secondary ms-dropdown">
              <button id="button" class="button">
                <div class="ms-button-text ms-button--text flex align-center">
                  <div class="flex items-center ms-dropdown-user">
                    <div class="user-ava">
                      <div class="icon icon-32 icon-user-avatar avatar">
                        <img src="" alt="" />
                      </div>
                    </div>
                    <div class="user-name">
                      <div class="display-user">Đàm Văn Hiếu</div>
                    </div>
                    <div class="icon icon-14 icon-chevron-down"></div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheNavbar",
  components: {},
};
</script>

<style scoped>
@import url(../../css/icon.css);
@import url(../../css/layout/navbar/the-navbar.css);
</style>
