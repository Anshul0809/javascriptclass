
let fetchdata=async()=>{
    // pending resolve reject 
   let url='http://localhost:3000/hotelbooking' 
  let res= await fetch(url,{method:"GET"})
  let data= await res.json()
  console.log(data)

  let show=document.querySelector("#datashow")
  data.map((e)=>{
    show.innerHTML+=
    `
    <tr>
    <td> ${e.name} </td>
     <td> ${e.Adhar} </td>
      <td> ${e.checkin} </td>
       <td> ${e.checkout} </td>
        <td> ${e.city} </td>
         <td> ${e.person} </td>
          <td> ${e.price*e.person} </td>
           <td onclick="del('${e.id}')">Delect </td>
          <td onclick="formopen('${e.id}')">Ubdate </td>

    </tr>
    `
  })

  


}

let del=(id)=>{
  let url='http://localhost:3000/hotelbooking/'
  fetch(url,{method:"DELECT"})
}


let formopen=async(id)=>{
  let url=`http://localhost:3000/hotelbooking/${id}`
 let res=await fetch(url,{method:"GET"})
 let data=res.json()
 console.log(data)

let FormData=`
<form>
        enter name : <input type="text"  id="upname" value="${data.name}"><br><br>
        enter adhar : <input type="text"  id="upadhar" value="${data.adhar}><br><br>
        enter checkin : <input type="date"  id="upcheckin" value="${data.checkin}><br><br>
        
        enter checkout : <input type="date"  id="upcheckout" value="${data.checkout}><br><br>
        <select id="upcity">
            <option value="bhopal">bhopal</option>
            <option value="indore">indore</option>
            <option value="delhi">delhi</option>
            <option value="kashmir">kashmir</option>
            <option value="pakistan">pakistan</option>
        </select><br><br>
        enter person : <input type="text"  id="upperson" value="${data.person}><br><br>
        <input type="submit" value="ubdate now" onclick="return updatedata(${data.id})">
    </form>`

    
    document.querySelector("#formshow").innerHTML=FormData

    let updatedata=()=>{
    let name=document.querySelector("#upname").value
    let adhar=document.querySelector("#upadhar").value
    let checkin=document.querySelector("#upcheckin").value
    let checkout=document.querySelector("#upcheckout").value
    let city=document.querySelector("#upcity").value
    let person=document.querySelector("#upperson").value 

    let url=`http://localhost:3000/hotelbooking/${id}`

    fetch(url ,{
        method:'PUT',
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

}