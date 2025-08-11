const moment = require("moment");
var unique = require("uniq");

const myDate = new Date();
const date = moment(myDate).format("MMMM Do YYYY, h:mm:ss a");
console.log(date);

const data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

console.log(unique(data));
