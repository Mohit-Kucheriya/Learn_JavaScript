let myDate = new Date();
console.log(myDate);

// print Fri Aug 23 2024 11:53:28 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toString());

// print currentDate like, Fri Aug 23 2024
console.log(myDate.toDateString());

// print 2024-08-23T11:56:28.450Z
console.log(myDate.toISOString());
console.log(myDate.toJSON());

// print 8/23/2024
console.log(myDate.toLocaleDateString());

// print 8/23/2024, 11:58:38 AM
console.log(myDate.toLocaleString());

// print 11:59:28 AM
console.log(myDate.toLocaleTimeString());

let myCreatedDate = new Date("01-12-2023");
console.log(myCreatedDate.toLocaleDateString());

// Gives Date in milisecond that to from 1 Jan 1970
let myStampDate = Date.now();
console.log(myStampDate);
console.log(Date.now());

let newDate = new Date();
console.log(
  newDate.toLocaleString("default", {
    weekday: "long",
  })
);
