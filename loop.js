// loops 
// 1.for of 
// 2.for in
// 3.map
// 4.filter

// 1.for of loop(indexing number(array ,string))

// let arr=["mern","java","python","php"]
// for(let lang of arr){
//     console.log(lang)
// }

// 2.for in (sari keys nikal ke dikhata hai ye for in loop se hota hai )(keys ke sath value bhi nikalo)
// let welcome={
//     name:"anshul",
//     city:"bhopal",
//     age:22
// }
// for(let i in welcome){
//     console.log(i)
//     console.log(i+"=>"+welcome[i]) //(object ko access karne ka second tarika)(for in loop ke andar [] yehi access karna hai)

// }

// 3.map (map ek spaecial type loop hai array ki har ek value ko itreate karega fir usme kuchh na kuchh perform karega aur return karega ek new array)(array wapas chahiye to sirf yr two hi method hai jo array ko return karega(map,filter) )

// 4.filter (map ki tarah bilkul same hai but filter karke perform karta hai aur map sare pe perform karega )

// 3.map 
// let num=[3,6,7,9,2,15]
// let newnum= num.map e => 2*e 
// let newarr=  num.map((e)=>{
//      return e*2
// })
// console.log(newarr)


// let num=[3,5,6,4]
// let newarr= num.map((e)=>{
// return e*e
// })
// console.log(newarr)

// 4.filter 
// (=== strict check data type bhi check karta hai (comparision operator hi hota hai ))
// let num=[3,6,7,9,2,15]
// let newnum =num.filter((e)=>{
//     // return e%2==0
//     // return e%2!=0
//     // return e>5 

// })
// console.log(newnum)

// 5.for each (for each direct print karta hai (string return karta hai array nahi ))

let fruits=["dragon","watermelon","muskmelon"]
fruits.forEach((e)=>{
console.log(e)
})

// call back function kya hota hai =yesa function jo kisi ke aargument me paas kiya gaya 
// highreroder fuction =map is ka higher order function qki usme andar ke function hota hai =jo apne argument me ek function leta hai 


