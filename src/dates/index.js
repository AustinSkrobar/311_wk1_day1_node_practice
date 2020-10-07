// import moment here; use this package in each function
const moment = require("moment");

const today = () => {
  // write code for dates.today
  const day = moment().format("dddd");
  console.log(day)
  return day;
};

const calendar = () => {
  // write code for dates.calendar
  const date = moment().format("MMM DD, YYYY");
  console.log(date)
  return date;
};

const currentTime = () => {
  // write code for dates.currentTime
  const time = moment().format("hh:mm:ss A");
  console.log(time)
  return time;
};


module.exports = {
  today,
  calendar,
  currentTime
}