let check=()=>{
    let name=document.querySelector("#name")
    let num=document.querySelector("#num")
    let email=document.querySelector("#email")
    let pass=document.querySelector("#pass")
    let cpass=document.querySelector("#cpass")

    let errname=document.querySelector("#errname")
    let errnum=document.querySelector("#errnum")
    let erremail=document.querySelector("#erremail")
    let errpass=document.querySelector("#errpass")
    let errcpass=document.querySelector("#errcpass")

    if(name.value==""){
        errname.innerHTML="Please enter your name"
        return false
    }
    else if(num.value==""){
        errnum.innerHTML="Please enter your number"
        return false

    }
    else if(isNaN(num.value)){
        errnum.innerHTML="please enter only digit"
        return false
    }
    else if(num.value.length!=10){
        errnum.innerHTML="please enter 10 digit number"
        return false
    }
    else if( !(email.value=="" || email.value.includes("@") && email.value.includes(".com")) ){
        erremail.innerHTML="Please enter valid email"
        return false
    }
    else if (pass.value==""){
        errpass.innerHTML="Please enter your password"
        return false
    }
    else if (pass.value.length<8){
        errpass.innerHTML="Please enter password of min. 8 character"
        return false
    }
    else if (pass.value!=cpass.value){
        errcpass.innerHTML="Please enter same password"
        return false
    }


    
}
