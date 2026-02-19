let login=()=>{
    localStorage.setItem("username","Anshu")
        localStorage.setItem("userage",25)
            localStorage.setItem("userpass","Anshul123")
            localStorage.setItem("usercity","bhopal")
            // location.href="01-08.html" //js ancertag
location.reload()

}
let show=document.querySelector("#show")
show.innerHTML=localStorage.getItem("username")
// show.innerHTML=localStorage.getItem("userage")

let logout=()=>{
    localStorage.removeItem("username")
        localStorage.removeItem("userage")
        location.reload()
}