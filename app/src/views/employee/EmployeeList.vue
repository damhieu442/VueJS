<template>
  <div class="router-view fix-view">
    <div class="router-content">
      <div class="content-area__content">
        <div>
          <div class="layout-dictionary">
            <div class="title-distance header-list">
              <div class="header-di">
                <div class="title-di">Nhân viên</div>
                <div class="header-button flex">
                  <div class="add-button ms-dropdown">
                    <MbuttonVue
                      title="Thêm mới nhân viên"
                      :AddOnClick="btnAddOnClick"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div id="layout-dictionary-body" class="body">
              <div class="grid-list-data sticky left-0">
                <div class="grid-button-list flex">
                  <div class="flex-grow inline"></div>
                  <div>
                    <div class="content-input-list">
                      <div class="ms-input input-search">
                        <div>
                          <MinputVue
                            type="text"
                            :isIconSearch="true"
                            placeholder="Tìm theo mã, tên nhân viên"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="ultility-buttons flex">
                    <div
                      class="refresh-button list-button"
                      title="Lấy lại dữ liệu"
                    >
                      <div class="icon icon-24 icon-refresh"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="grid flex bg-white body-height">
                <div class="grid-model-control">
                  <MtableVue
                    :listEmployee="listEmployee"
                    :isData="isData"
                    @isShowFunctionList="isFunctionList = !isFunctionList"
                    @isHideFunctionList="isFunctionList = false"
                  />
                  <!-- @click="EditEmployee" -->
                </div>
              </div>
            </div>
          </div>
          <EmployeeDetail
            v-if="showDialog"
            @onClose="showDialog = !showDialog"
            :employeeUpdate="employeeEdit"
          />
          <ul id="function-list" class="function-list" v-show="isFunctionList">
            <li class="list">Nhân bản</li>
            <li class="list">Xoá</li>
            <li class="list">Ngưng sử dụng</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import MbuttonVue from "../../components/button/Mbutton.vue";
import MinputVue from "../../components/input/Minput.vue";
import MtableVue from "../../components/table/Mtable.vue";
import EmployeeDetail from "../employee/EmployeeDetail.vue";

export default {
  name: "EmployeeList",
  components: { MbuttonVue, MinputVue, MtableVue, EmployeeDetail },
  methods: {
    btnAddOnClick() {
      this.showDialog = true;
    },
    EditEmployee(employee) {
      this.employeeEdit = employee;
      this.showDialog = true;
      console.log("employee edit", this.employeeEdit);
    },
  },
  data() {
    return {
      listEmployee: [],
      showDialog: false,
      isData: false,
      isFunctionList: false,
      employeeEdit: {},
    };
  },
  async mounted() {
    // Call API get data
    try {
      let result = await axios.get(
        "https://cukcuk.manhnv.net/api/v1/employees"
      );
      this.listEmployee = result.data;
      this.isData = true;
    } catch (error) {
      console.warn("fecth data: ", error);
    }
  },
};
</script>

<style scoped>
@import url(../../css/icon.css);
@import url(../../css/views/employee/EmployeeList.css);
</style>
