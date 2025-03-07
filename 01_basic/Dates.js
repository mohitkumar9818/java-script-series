//Dates // is a object
// let mydate=new Date()
// console.log(mydate.toString())//Fri Jan 03 2025 10:02:37 GMT+0000 (Coordinated Universal Time)
// console.log(mydate.toDateString())//Fri Jan 03 2025
// console.log(mydate.toLocaleDateString())// 1/3/2025
// console.log(typeof mydate)//object

// let my_create_date=new Date(2023,0,23)
// console.log(my_create_date)//2023-01-23T00:00:00.000Z
// console.log(my_create_date.toString())//Mon Jan 23 2023 00:00:00 GMT+0000 (Coordinated Universal Time)

 let my_create_date=new Date("2023-01-15")
// console.log(my_create_date.toLocaleDateString())//1/15/2023

// let time_stamp=Date.now()
// console.log(time_stamp)//1735899648427

console.log(my_create_date.getTime())//1673740800000

console.log(Math.floor(Date.now()/1000))//1735900227
let newDate=new Date()
console.log(newDate)//2025-01-03T10:30:27.732Z
console.log(newDate.getMonth()+1)//1
console.log(newDate.getDay())//5
newDate.toLocaleDateString('default',{
    weekday:"long"

})
