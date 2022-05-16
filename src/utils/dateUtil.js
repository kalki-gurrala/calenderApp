export const selectedYear = new Date().getFullYear();
export const selectedMonth = new Date().getMonth();

//return 31
export const daysInMonth = function (month, year) {
  return new Date(year, month + 1, 0).getDate();
};
//0-->for counting for all months(erase data and recount)

//get or map specific date --> specific day

export const monthDays = function (date) {
  return new Date(date).getDay();
};
