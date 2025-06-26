// localStorage.setItem("name","anshul")

let sett=()=>{
    localStorage.setItem("Age",20);
    localStorage.setItem("name","anshul")
//     let show=document.querySelector("#showname")
// // localStorage.getItem("name")
// show.innerHTML=localStorage.getItem("name")
location.reload()
// location.href="index.html" (jump page)

}

let show=document.querySelector("#showname")
// localStorage.getItem("name")
show.innerHTML=localStorage.getItem("name")

let remove=()=>{
    localStorage.removeItem("name")
//     let show=document.querySelector("#showname")
// // localStorage.getItem("name")
// show.innerHTML=localStorage.getItem("name")
location.reload()

}