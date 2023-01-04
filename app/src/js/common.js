const commonJS = {
  //Format dateTime
  formatDateTime(dateTime) {
    try {
      if (dateTime != null || dateTime != undefined) {
        dateTime = new Date(dateTime);
        let date = dateTime.getDate();
        date = date < 10 ? `0${date}` : date;
        let month = dateTime.getMonth() + 1;
        month = month < 10 ? `0${month}` : month;
        let year = dateTime.getFullYear();
        return `${date}/${month}/${year}`;
      }
    } catch (error) {
      console.log("Format Date: ", error);
      return "";
    }
  },
  //Format money
  formatMoney(money) {
    try {
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(money);
    } catch (error) {
      console.log("Format money: ", error);
      return "";
    }
  },
};

export default commonJS;
