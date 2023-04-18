function num_format(num) {
  let str = "";
  if (num < 10) str += "0";
  str += num.toString();
  return str;
}

function get_datetime() {
  let day = new Date();
  let date = num_format(day.getDate())  + "-" + num_format(day.getMonth()+1) + "-" + num_format(day.getFullYear());
  let time = num_format(day.getHours()) + ":" + num_format(day.getMinutes()) + ":" + num_format(day.getSeconds());
  return (`[${date} ${time}]`);
}

function trace(string) {
  console.log(`${get_datetime()} ${string}`);
}

module.exports = {
  trace
};