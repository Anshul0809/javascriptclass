// Array of object 
// map loop (return=array)


// let a=[2,4,5,6,8,9]
//  let b=a.map((e)=> e*2)
// console.log(b)

// filter loop 
// return=array

// let c=[2,4,5,6,8,9]
// let d=c.filter((e)=> e>5)
// console.log(d)

// for each loop 

// let a=[2,4,5,6,8,9]
//  a.forEach((e)=>{
//     // console.log(e*2)
//      console.log(e/2)
// })


// let =[2,4,5,6,7] (array) 

// let={name:"anshul",
//     age:25,
//     city:"delhi",
// }  (object)

// Array of object 

let Aoo=[{
    name:"anshul",
    age:25,
    city:"delhi",
},{
    name:"anshu",
    age:20,
    city:"delh",
},{
    name:"ansh",
    age:21,
    city:"del",
},{
    name:"ans",
    age:22,
    city:"d",
}]
// console.log(Aoo[0].name)
// console.log(Aoo[0].age)

// use Map
let b=document.querySelector("#print")

Aoo.map((e)=>{
    // console.log(e.name)
    // console.log(e.age)
    // console.log(e.name+" "+e.age+" "+e.city)
    // console.log(`${e.name} ${e.age} ${e.city}`)
    // b.innerHTML+=`
    
    // <h1 style="display:flex"> ${e.name} </h1>
    // <p> ${e.age} </p>
    // <p> ${e.city} </p>
    // `
    b.innerHTML+=`
    
    <tr>
    <td> ${e.name} </td>
    <td> ${e.age} </td>
    <td> ${e.city} </td>
    </tr>
    
    `
    
    

})

// frontscreen print 


    
    






