var moment = require('moment');
var now = moment();

// console.log(now.format());
// console.log(now.format('X'));
// console.log(now.format('x'));

// var timestamp = 1547471168824;
// var timestampMoment = moment.utc(timestamp);
// console.log(timestampMoment.local().format('h:mm a'));

console.log(moment().unix());

// now.subtract(1, 'year');
// console.log(now.format());
// console.log(now.format('MMM Do YYYY, h:mma'));