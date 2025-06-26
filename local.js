let signup=()=>{
    let name=document.querySelector("#signname").value
    
    let email=document.querySelector("#signemail").value
    let number=document.querySelector("#signnumber").value
    let pass=document.querySelector("#signpass").value
    let cpass=document.querySelector("#signcpass").value

    if(name==""){
        document.querySelector("#signname").placeholder="please enter name"
        return false

    }

    localStorage.setItem("name",name)
    localStorage.setItem("number",number)
    localStorage.setItem("email",email)
    localStorage.setItem("pass",pass)
    localStorage.setItem("cpass",cpass)

    location.href="locallogin.html"
    return false
}