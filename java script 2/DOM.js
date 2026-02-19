// <!-- Dom=document object model
//     DOM is like a tree structure html ka  (jisme js aage kuchh bhi change kar sakti hai,(dynamicaly run kar sakti hai) ) -->
// method=EventListener (attribute ke sath lagta hai (onclick="Anshul()"))
// function Anshul(){
 
//  alert("okay")
// console.log()
// document.write("okay")
// }

// Anshul()

// function first() {
//     alert("Anshul")
// }
// function second(){
//     alert("gajbhiye")
// }
// function third(){
//     alert("boy")
//  }

// let callme=()=>{
//     // document.getElementById("") (camalecasegetElementById)
//     // document.getElementsByClassName("") 
//     // document.querySelector("#text")/(".text") 
//     let mytag= document.querySelector("#text")  
//     mytag.innerHTML=" <p> hello world </p>" 
//     mytag.textContent="" //(textContent tag support nahi karta)

//     // alert("hello i am here")
// }

// let ans=()=>{
//     let mytag= document.querySelector("#gaj")
//     mytag.innerHTML="<i> Gajbhiye </i>"
//     let mytag2= document.querySelector(".ans")
//     mytag2.innerHTML="<i> Anshul </i> <h6> gajbh </h6> "
//     mytag.style.backgroundColor="red"
//     mytag.style.color="white"
// }
// // let gaj=()=>{
// //     let mytag= document.querySelectorAll("#gaj")  (same id,class ke liye)
// //     mytag.innerHTML="<i> Gajbhiye </i>"
// // }

// // 3button red blue green 



// let red=()=>{
//     let mytag=document.querySelector("#box")
//     // mytag.style.backgroundColor="red"
//     // mytag.style.border="5px solid green"
//     mytag.style.backgroundImage="url('')"
// }
// let blue=()=>{
//     let mytag=document.querySelector("#box")
//     // mytag.style.backgroundColor="blue"

//     mytag.style.border="5px solid yellow"
// }
// let reset=()=>{
    
//     mytag.style.backgroundColor=""
//     mytag.style.border=""
// }

// let changeImg=()=>{
//     let image=document.querySelector('#image')
//     image.src="./image/box2.webp" 
// }
// // let hide=()=>{
// //     let mytag=document.querySelector("#ans")
    
// //     mytag.style.display="none"

// // }

// let show=()=>{
//     let mytag=document.querySelector("#ans")
//     if(mytag.style.display == "none")
//     {
//         mytag.style.display = "block"
//     } 
//     else {
//         mytag.style.display = "none"
//     }
// }

// // first method 

// let increment=()=>{
//     let mytag=document.querySelector("#one")
//     let a=mytag.innerHTML
//     mytag.innerHTML=parseInt(a)+1
//     }
    
//  let decrement=()=>
//         {
//         let mytag=document.querySelector("#one")
//         let a=mytag.innerHTML
//         if(a==0){
//            console.log("you cant decrement this number") 
//         }
//         else{
//             mytag.innerHTML=parseInt(a)-1
//         }
        
//     }

//     // second method
//     let count=0
//     let increment2=()=>{
//         let mytag=document.querySelector("#one")
//         count++
//         mytag.innerHTML=count
        
//     }
//     let decrement2=()=>{
//         let mytag=document.querySelector("#one")
//         if(count>0){
//         count--
//         mytag.innerHTML=count
//         }

       
//     }

//     let change1=()=>{
//         let box=document.querySelector("#box")
//         box.style.background="red"
//     }
//     let change2=()=>{
//      let box=document.querySelector("#box")
//         box.style.background="green"
//     }

    // ===================== Form =======================


    let showw=()=>{
        let inp=document.querySelector("#inptext").value
        let show=document.querySelector("#show")
        show.innerHTML=inp
        
    }
    let add=()=>{
        let inp=document.querySelector("#first").value
        let inp2=document.querySelector("#second").value
        let show=document.querySelector("#showw")
        show.innerHTML=parseInt(inp)+parseInt(inp2) 
    }
   
    let pass=()=>{
        let inp=document.querySelector("#pass").value
        let inp1=document.querySelector("#pass").type
        if( inp1== "password"){
            inp1.type="text"
          
        }
        else{
            inp1.type="password"
        }
        
        
    }
    