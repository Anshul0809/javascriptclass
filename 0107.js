// post method crud 
let Ins=()=>{
    let name=document.querySelector("#name").value
    let adhar=document.querySelector("#adhar").value
    let checkin=document.querySelector("#checkin").value
    let checkout=document.querySelector("#checkout").value
    let city=document.querySelector("#city").value
    let person=document.querySelector("#person").value 

    let url='http://localhost:3000/hotelbooking'

    fetch(url ,{
        method:'POST',
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({
            name:name,
            adhar:adhar,
            checkin:checkin,
            checkout:checkout,
            city:city,
            person:person,
            price:500

            
        })
    })
    location.href="crud.html"
    return  false 
    
    

}