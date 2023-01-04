<template>
  <div id="message-box">
    <div class="con-ms-message-box">
      <div class="message-center">
        <div class="ms-message-bg"></div>
        <div class="drag-it-dude">
          <div class="ms-mesage-box">
            <div style="width: 444px; min-width: 444px">
              <div class="ms-message-box--content">
                <div class="mess-header">
                  <div class="mess-header-title">Thông báo</div>
                  <div class="mess-header-close">
                    <div class="icon icon-16 icon-dialog-close"></div>
                  </div>
                </div>
                <div class="mess-content">
                  <div class="icon-message">
                    <div
                      class="icon icon-48 icon-warnning-exclamation-48"
                    ></div>
                  </div>
                  <div class="message-content">
                    <div class="message">
                      Mã nhân viên đã tồn tại trong hệ thống, vui lòng kiểm tra
                      lại
                    </div>

                    <!-- <div class="message">
                      icon-error-exclamation-48
                      <span>Tên</span>
                      không được để trống
                    </div> -->

                    <!-- <div class="message">
                      icon-question-exclamation-48
                      Dữ liệu đã bị thay đổi. Bạn có muốn cất không?
                    </div> -->
                  </div>
                </div>
                <div class="mess-line"></div>
                <div class="mess-footer">
                  <div class="RightSecond">
                    <MbuttonVue title="Đồng ý" />
                  </div>

                  <!-- <div class="center">
                    <MbuttonVue title="Đóng" />
                  </div> -->

                  <!-- <div class="Left">
                    <MbuttonVue title="Hủy" class="first-button" />
                  </div>
                  <div class="RightSecond">
                    <MbuttonVue title="Có" />
                  </div>
                  <div class="RightFirst">
                    <MbuttonVue title="Không" class="first-button" />
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MbuttonVue from "../button/Mbutton.vue";
export default {
  name: "MdialogVue",
  components: { MbuttonVue },
  methods: {
    btnAddOnClicka() {
      this.showDialog = true;
    },
  },
  data() {
    return {
      showDialog: false,
    };
  },
};
</script>

<style scoped>
@import url(../../css/icon.css);
@import url(./Mdialog.css);
</style>
