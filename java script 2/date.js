
//  if new is not wirte so answer is string formate / object formate

 let time= new Date()
console.log(time)
console.log(time.getFullYear())
console.log(time.getMonth()+1)
console.log(time.getDay())
console.log(time.getHours())
console.log(time.getMinutes())
console.log(time.getSeconds())
console.log(time.getMilliseconds())
console.log(time.toLocaleString()) //7/30/2025, 4:10:20 PM
// console.log(time.toLocaleString('en-US', {timeZone: 'America/New_York'}))

// agarjuly likha huaa nikalna ho to 
console.log(time.toLocaleString('en-US', {month: 'long'}))

let Days=['sun','Mon','tue','wed','thr','fir','sat']
console.log(Days[time.getDay()])

// age calculator
// JavaScript for Age Calculator
let a=document.querySelector("#year").value 
















