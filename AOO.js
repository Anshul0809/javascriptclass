
// map 

// let num=[2,5,7,4,9,1]

// let newar=num.map((e)=>{

//     return e*2
// // return e%2==0   


// })

// // let newar=num.map((e)=> e*2) // same as above line(array function ka benefite)


// console.log(newar)

// filter (same as map but it returns only those values which satisfy the condition)

// let num=[2,5,7,4,9,1]

// let newar=num.filter((e)=>{

// // return e%2==0
// // return e>4 


// })
// console.log(newar)

// for each 

// let num=[2,4,5,6,8,9,]
// num.forEach((e)=>{
//     console.log(e*2)
// })
 
// let num=[2,4,5,6,8,9]
// let newnum=num.map((e)=>{
//     return e/2
// })
// console.log(newnum)

// // Array of object 
// let =[2,4,5,6]
// let object={
//     name:"anshul"
//     age:25

// }

// Array of object 

let student=[
    {name:"Anshul",
    age:20,
    city:"bhopal",
    college:"tit"
    },

    {name:"Anshul",
    age:20,
    city:"bhopal"},

    {name:"Anshul",
    age:20,
    city:"bhopal"},
{
    name:"Anshul",
    age:20,
    city:"bhopal"
}
]

    // let data=document.querySelector("#show")


    // student.map((e)=>{
    //     data.innerHTML+= `
    //     <tr>

    //     <td> ${e.name} </td>
    //     <td> ${e.age} </td>
    //     <td> ${e.city} </td>
    //     </tr>
        
    //     `
        
    // })

    let data=document.querySelector("#showa")

    student.map((e)=>{
        data.innerHTML+= `
        <tr>
        <td> ${e.name} </td>
        <td> ${e.age} </td>
        <td> ${e.city} </td>
       <td> ${e.college} </td>

        </tr>
        
        `
    })




