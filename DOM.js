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

let callme=()=>{
    // document.getElementById("") (camalecasegetElementById)
    // document.getElementsByClassName("") 
    // document.querySelector("#text")/(".text") 
    let mytag= document.querySelector("#text")  
    mytag.innerHTML=" <p> hello world </p>" 
    mytag.textContent="" //(textContent tag support nahi karta)

    // alert("hello i am here")
}

let ans=()=>{
    let mytag= document.querySelector("#gaj")
    mytag.innerHTML="<i> Gajbhiye </i>"
    let mytag2= document.querySelector(".ans")
    mytag2.innerHTML="<i> Anshul </i> <h6> gajbh </h6> "
    mytag.style.backgroundColor="red"
    mytag.style.color="white"
}
// let gaj=()=>{
//     let mytag= document.querySelectorAll("#gaj")  (same id,class ke liye)
//     mytag.innerHTML="<i> Gajbhiye </i>"
// }

// 3button red blue green 
