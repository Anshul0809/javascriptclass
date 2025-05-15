//def. Array is collection of heterogeneous element
//example = var a=[10,20,"appple","banana"]
// let a=new Array(1,2,3,4,5)
let a=new Array(1,2,3,4,5)
console.log(a) 
// Array methods
// 1.length
// 2.pop()  (Remove the last element)
// 3.push() (Add the element at the end)
// 4.unshift() (Add the element at the beginning/starting)
// 5.shift()   (remove the frist element)
// 6.splice() (Remove the element at the specific index)
// 7.slice()  (Copy the element at the specific index)
// 8.join()   (conver array to string)
// 8.toString()   (conver array to string)


let fruits=["apple","banana","mango"]
// fruits.pop()
// fruits.shift()
// fruits.push("grapes")
// fruits.unshift("orange","grapes")
// console.log(fruits.length)
// console.log(fruits[1]) //array value access
console.log(fruits.toString())  // prints the array as a string
console.log(typeof (fruits.toString()))   
// let ans=fruits.toString()
// console.log(typeof(ans))
console.log(fruits.join('-'))
console.log(typeof(fruits.join())) 
console.log()

console.log(fruits)
