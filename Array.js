//def. Array is collection of heterogeneous element
//example = var a=[10,20,"appple","banana"]
// let a=new Array(1,2,3,4,5)
// let a=new Array(1,2,3,4,5)
// console.log(a) 
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
// console.log(fruits.toString())  // prints the array as a string
// console.log(typeof (fruits.toString()))   
// let ans=fruits.toString()
// console.log(typeof(ans))
// console.log(fruits.join('-'))
// console.log(typeof(fruits.join())) 
// console.log()

// console.log(fruits)

//9.slice (starting index ,last index)(use toextract element)
// let slice=fruits.slice(1,3)
// console.log(slice)
//10.splice (starting index ,no of element to be removed,element to be added)
//  console.log(fruits)
//  fruits.splice(2,1,"watermelon")
//  console.log(fruits)

// concat() use to join two array
// let arr1=[1,2]
// let arr2=['anshul','gajbhiye']
// let arr3=[19,20]
// let new_arr=arr1.concat(arr2,arr3)
// let final_arr=new_arr.concat(arr3)
// console.log(new_arr)
// console.log(final_arr)

// 12. reversed() (array ko reversed karna )
let array=[1,2,3,4]
console.log(array.reverse())

//Q  reverse a number =75638
// let num=756238
// let reverse_num=num.toString().split('').reverse().join('')
// console.log(reverse_num)  //string '83657'
// console.log(Number(reverse_num)) //in the form of number 83657

// let num=756238
// let reverse_num=num.toString().split('').reverse().join('')
// console.log(reverse_num)  //number 8

