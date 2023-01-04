<template>
  <div class="ms-popup">
    <div class="con-ms-popup">
      <div class="ms-popup--background">
        <div class="drag-it-dude">
          <div class="ms-popup ms-popup-content">
            <header class="ms-popup--header">
              <div class="ms-popup--title">
                <div class="header-popup flex">
                  <div class="title-popup">Thông tin nhân viên</div>
                  <McheckboxVue
                    :islabel="true"
                    label="Là khách hàng"
                    class="checkbox-popup"
                  />
                  <McheckboxVue
                    :islabel="true"
                    label="Là nhà cung cấp"
                    class="checkbox-popup"
                  />
                </div>
              </div>
              <div class="ms-popup-close">
                <div class="icon icon-24 icon-help mr-6-px" title="Giúp"></div>
                <div
                  @click="btnCloseOnClick"
                  class="icon icon-24 icon-close"
                ></div>
              </div>
            </header>
            <div class="ms-popup--header"></div>
            <form class="ms-popup--content" @submit.prevent="save">
              <div class="popup-content employee-scroll">
                <div class="flex pd-b-12">
                  <div class="w-1-2 p-r-26">
                    <span>
                      <div class="flex row-input">
                        <div class="w-2-5 p-r-6">
                          <div class="ms-input">
                            <div class="flex">
                              <div class="ms-input-title">Mã</div>
                              <div class="ms-input-title-require">&nbsp;*</div>
                            </div>
                            <div>
                              <MinputVue
                                :isIconSearch="false"
                                type="text"
                                v-bind:inputData="employee.EmployeeCode"
                                @change="saveCode"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="w-3-5">
                          <div class="ms-input">
                            <div class="flex">
                              <div class="ms-input-title">Tên</div>
                              <div class="ms-input-title-require">&nbsp;*</div>
                            </div>
                            <div>
                              <MinputVue :isIconSearch="false" type="text" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </span>
                    <div
                      class="flex row-input w-full"
                      style="padding-bottom: 10px"
                    >
                      <span class="w-full">
                        <div class="ms-combo">
                          <div class="con-ms-tooltip">
                            <div class="tooltip-content">
                              <div class="combo-title flex">
                                <div class="combo-title__text">Đơn vị</div>
                                <div class="combo-required__text">&nbsp;*</div>
                              </div>
                            </div>
                          </div>
                          <span class="w-full">
                            <McomboboxVue />
                          </span>
                        </div>
                      </span>
                    </div>
                    <div class="flex row-input w-full">
                      <div class="ms-input">
                        <div class="flex">
                          <div class="ms-input-title">
                            <div class="con-ms-tooltip">
                              <div class="tooltip-content">Chức danh</div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <MinputVue type="text" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-1-2">
                    <div class="flex row-input">
                      <div class="w-2-5 p-r-6">
                        <div class="ms-date-picker-container">
                          <div class="con-ms-tooltip">
                            <div class="tooltip-content">
                              <div class="flex">
                                <div class="ms-input-title">Ngày sinh</div>
                              </div>
                            </div>
                          </div>
                          <span>
                            <MinputVue type="datetime-local" />
                          </span>
                        </div>
                      </div>
                      <div class="w-3-5">
                        <div class="gender">
                          <div class="label-input">Giới tính</div>
                          <div class="p-t-5">
                            <div class="flex">
                              <label class="con-ms-radio">
                                <input type="radio" name="gender" id="gender" />
                                <div class="ms-radio--label">Nam</div>
                              </label>
                              <label class="con-ms-radio">
                                <input type="radio" name="gender" id="gender" />
                                <div class="ms-radio--label">Nữ</div>
                              </label>
                              <label class="con-ms-radio">
                                <input type="radio" name="gender" id="gender" />
                                <div class="ms-radio--label">Khác</div>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex row-input">
                      <div class="w-3-5 p-r-6">
                        <span>
                          <div class="ms-input">
                            <div class="flex">
                              <div class="ms-input-title">
                                <div class="con-ms-tooltip">
                                  <div
                                    class="tooltip-content"
                                    title="Số chứng minh nhân dân"
                                  >
                                    Số CMND
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <MinputVue type="text" />
                            </div>
                          </div>
                        </span>
                      </div>
                      <div class="w-2-5">
                        <div class="ms-date-picker-container">
                          <div class="con-ms-tooltip">
                            <div class="tooltip-content">
                              <div class="flex">
                                <div class="ms-input-title">Ngày cấp</div>
                              </div>
                            </div>
                          </div>
                          <span>
                            <MinputVue type="datetime-local" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="flex row-input">
                      <div class="w-full">
                        <div class="ms-input">
                          <div class="flex">
                            <div class="ms-input-title">
                              <div class="con-ms-tooltip">
                                <div class="tooltip-content">Nơi cấp</div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <MinputVue type="text" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex flex-direction-col">
                  <div class="w-full row-input">
                    <span>
                      <div class="ms-input">
                        <div class="flex">
                          <div class="ms-input-title">
                            <div class="con-ms-tooltip">
                              <div class="tooltip-content">Địa chỉ</div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <MinputVue type="text" />
                        </div>
                      </div>
                    </span>
                  </div>
                  <div class="w-4-5 row-input flex flex-direction-row">
                    <div class="w-1-3">
                      <span>
                        <div class="ms-input">
                          <div class="flex">
                            <div class="ms-input-title">
                              <div class="con-ms-tooltip">
                                <div
                                  class="tooltip-content"
                                  title="Điện thoại di động"
                                >
                                  ĐT di động
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <MinputVue type="text" />
                          </div>
                        </div>
                      </span>
                    </div>
                    <div class="w-1-3">
                      <span>
                        <div class="ms-input">
                          <div class="flex">
                            <div class="ms-input-title">
                              <div class="con-ms-tooltip">
                                <div
                                  class="tooltip-content"
                                  title="Điện thoại cố định"
                                >
                                  ĐT cố định
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <MinputVue type="text" />
                          </div>
                        </div>
                      </span>
                    </div>
                    <div class="w-1-3">
                      <span>
                        <div class="ms-input">
                          <div class="flex">
                            <div class="ms-input-title">
                              <div class="con-ms-tooltip">
                                <div class="tooltip-content">Email</div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <MinputVue type="text" />
                          </div>
                        </div>
                      </span>
                    </div>
                  </div>
                  <div class="w-4-5 row-input flex flex-direction-row">
                    <div class="w-1-3">
                      <span>
                        <div class="ms-input">
                          <div class="flex">
                            <div class="ms-input-title">
                              <div class="con-ms-tooltip">
                                <div class="tooltip-content">
                                  Tài khoản ngân hàng
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <MinputVue type="text" />
                          </div>
                        </div>
                      </span>
                    </div>
                    <div class="w-1-3">
                      <span>
                        <div class="ms-input">
                          <div class="flex">
                            <div class="ms-input-title">
                              <div class="con-ms-tooltip">
                                <div class="tooltip-content">Tên ngân hàng</div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <MinputVue type="text" />
                          </div>
                        </div>
                      </span>
                    </div>
                    <div class="w-1-3">
                      <span>
                        <div class="ms-input">
                          <div class="flex">
                            <div class="ms-input-title">
                              <div class="con-ms-tooltip">
                                <div class="tooltip-content">Chi nhánh</div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <MinputVue type="text" />
                          </div>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="footer-container">
                <div class="divide"></div>
                <div class="popup-footer">
                  <div class="flex">
                    <div class="w-full flex align-right">
                      <div class="flex align-right">
                        <div class="right-group-button-popup flex">
                          <div class="px-3">
                            <MbuttonVue
                              type="reset"
                              title="Cất"
                              class="first-button"
                            />
                          </div>
                          <div class="second-right-button">
                            <MbuttonVue type="submit" title="Cất và Thêm" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="w-1-2 btn-left">
                      <div class="left-group-button-popup">
                        <MbuttonVue
                          title="Hủy"
                          class="first-button"
                          :AddOnClick="btnCloseOnClick"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import McheckboxVue from "@/components/checkbox/Mcheckbox.vue";
import MbuttonVue from "@/components/button/Mbutton.vue";
import MinputVue from "@/components/input/Minput.vue";
import McomboboxVue from "@/components/combobox/Mcombobox.vue";

export default {
  name: "EmployeeDetail",
  components: {
    McheckboxVue,
    MbuttonVue,
    MinputVue,
    McomboboxVue,
  },
  props: ["employeeUpdate"],
  data() {
    return {
      employee: {},
    };
  },
  created() {
    this.employee = this.employeeUpdate;
    console.log("props", this.employee);
  },
  methods: {
    btnCloseOnClick() {
      this.$emit("OnClose");
    },
    saveCode(value) {
      this.employee.EmployeeCode = value;
      console.log("Detail gan Id: ", this.employee.EmployeeCode);
    },
    save() {
      console.log("On submit: ", this.employee);
    },
  },
};
</script>

<style scoped>
@import url(../../css/icon.css);
@import url(../../css/views/employee/EmployeeDetail.css);
</style>
