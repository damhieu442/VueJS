<template>
  <div class="ms-grid-viewer">
    <div style="overflow: auto; max-height: calc(100% - 72px)">
      <table class="ms-table-viewer">
        <thead class="ms-thead-viewer">
          <tr class="ms-tr-viewer">
            <th class="text-align-center" style="min-width: 50px">
              <McheckboxVue :islabel="false" />
            </th>
            <th class="text-align-left" style="min-width: 130px">
              MÃ NHÂN VIÊN
            </th>
            <th class="text-align-left" style="min-width: 180px">
              TÊN NHÂN VIÊN
            </th>
            <th class="text-align-left" style="min-width: 120px">GIỚI TÍNH</th>
            <th class="text-align-center" style="min-width: 150px">
              NGÀY SINH
            </th>
            <th
              class="text-align-left"
              style="min-width: 200px"
              title="Số chứng minh nhân dân"
            >
              SỐ CMND
            </th>
            <th class="text-align-left" style="min-width: 250px">CHỨC DANH</th>
            <th class="text-align-left" style="min-width: 250px">TÊN ĐƠN VỊ</th>
            <th class="text-align-left" style="min-width: 150px">
              SỐ TÀI KHOẢN
            </th>
            <th class="text-align-left" style="min-width: 250px">
              TÊN NGÂN HÀNG
            </th>
            <th class="text-align-right" style="min-width: 140px">Lương</th>
            <th class="text-align-center" style="min-width: 120px">
              CHỨC NĂNG
            </th>
          </tr>
        </thead>
        <tbody class="ms-tbody-viewer" v-if="!isData">
          <!-- Loading dữ liệu -->
          <tr
            class="ms-tr-viewer"
            v-for="employee in listEmployees"
            :key="employee.EmployeeCode"
          >
            <td class="text-align-center ms-td-viewer">
              <McheckboxVue class="loading" />
            </td>
            <td class="text-align-left ms-td-viewer">
              <div class="loading">
                {{ employee.data }}
              </div>
            </td>
            <td class="text-align-left ms-td-viewer">
              <div class="loading">
                {{ employee.data }}
              </div>
            </td>
            <td class="text-align-left ms-td-viewer">
              <div class="loading">
                {{ employee.data }}
              </div>
            </td>
            <td class="text-align-center ms-td-viewer">
              <div class="loading">
                {{ employee.data }}
              </div>
            </td>
            <td class="text-align-left ms-td-viewer">
              <div class="loading">
                {{ employee.data }}
              </div>
            </td>
            <td class="text-align-left ms-td-viewer">
              <div class="loading">
                {{ employee.data }}
              </div>
            </td>
            <td class="text-align-left ms-td-viewer">
              <div class="loading">
                {{ employee.data }}
              </div>
            </td>
            <td class="text-align-left ms-td-viewer">
              <div class="loading">
                {{ employee.data }}
              </div>
            </td>
            <td class="text-align-left ms-td-viewer">
              <div class="loading">
                {{ employee.data }}
              </div>
            </td>
            <td class="text-align-left ms-td-viewer">
              <div class="loading">
                {{ employee.data }}
              </div>
            </td>
            <td class="text-align-center ms-td-viewer">
              <div class="loading">
                {{ employee.data }}
              </div>
            </td>
          </tr>
        </tbody>
        <tbody class="ms-tbody-viewer" v-if="isData">
          <!-- Hiển thị dữ liệu  -->
          <tr
            class="ms-tr-viewer"
            v-for="employee in listEmployee"
            :key="employee.EmployeeCode"
          >
            <td class="text-align-center ms-td-viewer">
              <McheckboxVue />
            </td>
            <td class="text-align-left ms-td-viewer">
              <div>
                {{ employee.EmployeeCode || "" }}
              </div>
            </td>
            <td class="text-align-left ms-td-viewer">
              <div>
                {{ employee.FullName || "" }}
              </div>
            </td>
            <td class="text-align-left ms-td-viewer">
              <div>
                {{ employee.GenderName || "" }}
              </div>
            </td>
            <td class="text-align-center ms-td-viewer">
              <div>
                {{ formatDate(employee.DateOfBirth) || "" }}
              </div>
            </td>
            <td class="text-align-left ms-td-viewer">
              <div>
                {{ employee.IdentityNumber || "" }}
              </div>
            </td>
            <td class="text-align-left ms-td-viewer">
              <div>
                {{ employee.PositionName || "" }}
              </div>
            </td>
            <td class="text-align-left ms-td-viewer">
              <div>
                {{ employee.DepartmentName || "" }}
              </div>
            </td>
            <td class="text-align-left ms-td-viewer">
              <div>
                {{ employee.AccNumber || "" }}
              </div>
            </td>
            <td class="text-align-left ms-td-viewer">
              <div>
                {{ employee.BankName || "" }}
              </div>
            </td>
            <td class="text-align-right ms-td-viewer">
              <div>
                {{ formatSalary(employee.Salary) || "" }}
              </div>
            </td>
            <td class="text-align-center ms-td-viewer">
              <div class="function flex justify-end">
                <div class="ms-dropdown">
                  <MbuttonVue
                    title="Sửa"
                    class="ms-dropdown-type-feature"
                    @click.prevent="editEmployee(employee)"
                  />
                  <button
                    class="function-button ms-td-viewer"
                    @click.prevent="showFunction"
                    @blur.prevent ="hideFunction"
                  >
                    <div class="ms-button-icon flex align-center">
                      <div
                        class="icon icon-16 icon-arrow-up--blue relative"
                      ></div>
                    </div>
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="ms-pagination" style="bottom: 0px" v-if="isData">
      <div class="flex items-center justify-between w-full pagination-bar">
        <div class="left-pagination">
          <div class="total-record">
            Tổng số:
            <b>{{ listEmployee.length }}</b>
            bản ghi
          </div>
        </div>
        <div class="flex postion-pagination align-center">
          <div class="record-in-page">
            <MdropdownlistVue />
          </div>
          <div class="flex items-center">
            <div class="mr-4 cursor-pointer unselect disableText">
              <div>Trước</div>
            </div>
            <div class="page-index flex">
              <div class="pl-2 pr-2 cursor-pointer pageSelected">1</div>
              <div class="pl-2 pr-2 cursor-pointer">2</div>
            </div>
            <div class="ml-4 cursor-pointer unselect">
              <div>Sau</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import McheckboxVue from "../checkbox/Mcheckbox.vue";
import MbuttonVue from "../button/Mbutton.vue";
import MdropdownlistVue from "../dropdownlist/Mdropdownlist.vue";
import commonJS from "../../js/common";

export default {
  name: "MtableVue",
  props: {
    listEmployee: Array,
    isData: Boolean,
  },
  data() {
    return {
      listEmployees: [
        { data: "Fechting data" },
        { data: "Fechting data" },
        { data: "Fechting data" },
      ],
    };
  },
  components: { McheckboxVue, MbuttonVue, MdropdownlistVue },

  methods: {
    editEmployee(employee) {
      this.$emit("click", employee);
    },
    showFunction() {
      this.$emit("isShowFunctionList");
    },
    hideFunction() {
      this.$emit("isHideFunctionList");
    },
    // Format dateTime
    formatDate(dateTime) {
      return commonJS.formatDateTime(dateTime);
    },
    formatSalary(money) {
      return commonJS.formatMoney(money);
    },
  },
};
</script>

<style scoped>
@import url(../../components/loading/Mloading.css);
@import url(../../css/icon.css);
@import url(./Mtable.css);
</style>
