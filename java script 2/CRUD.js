// fetch (GET POST PUSH DELETE)
let fetchdata=async()=>{
    let url="http://localhost:3000/hotel"
    let res=await fetch(url,{method:"GET"})
    let data=await res.json()
    // console.log(data)

    let show=document.querySelector('#datashow')
    data.map((e)=>{
        show.innerHTML+=`
        <tr>
        <td>${e.name}</td>
        <td>${e.Adhar}</td>
        <td>${e.checkin}</td>
        <td>${e.checkout}</td>
        <td>${e.city}</td>
        <td>${e.person}</td>
        <td>${e.total*e.person}</td>
        <td onclick="Del('${e.id}')">Delete</td>
        <td onclick="Formopen('${e.id}')">Edit</td>


        </tr>
        
        `
    })
    
    
    

}

fetchdata() 
let Del=(id)=>{
        let url=`http://localhost:3000/hotel/${id}`
    fetch(url,{method:"DELETE"})
    }

    let Book=()=>{
       let name=document.querySelector("#name").value 
       let aadhar=document.querySelector("#aadhar").value
       let city=document.querySelector("#city").value
       let checkin=document.querySelector("#checkin").value
       let checkout=document.querySelector("#checkout").value
       let person=document.querySelector("#person").value


       let url='http://localhost:3000/hotel'
       fetch(url,{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            name:name,
            Adhar:aadhar,
            city:city,
            checkin:checkin,
            checkout:checkout,
            person:person,
            total:500
        })
       })
       
       location.href="CRUD.html"
       return false

    }
    let Formopen=async(id)=>{
    let url=`http://localhost:3000/hotel/${id}`
   let res=await fetch(url)
   let data=await res.json()
   console.log(data)
   

   document.querySelector("#formshow").innerHTML=`
    Enter Name: <input type="text" id="upname" value="${data.name}"><br><br>
        Enter aadhar: <input type="text" id="upaadhar" value="${data.Adhar}"><br><br>
       select city:
        <select id="upcity">
            <option value="Bhopal">Bhopal</option>
            <option value="Kashmir">Kashmir</option>
            <option value="Lahore">Lahore</option>
            <option value="Indore">Indore</option>
            <option value="Manali">Manali</option>

        </select><br><br>
        Enter check-In: <input type="date" id="upcheckin" value="${data.checkin}"><br><br>
        Enter check-Out: <input type="date" id="upcheckout" value="${data.checkout}"><br><br>
        Enter person: <input type="text" id="upperson" value="${data.person}"><br><br>
        <input type="submit" value="updateNow" onclick="return finalup('${data.id}')"> 
   `
   let finalup=(id)=>{
    let name=document.querySelector("#upname").value 
       let aadhar=document.querySelector("#upaadhar").value
       let city=document.querySelector("#upcity").value
       let checkin=document.querySelector("#upcheckin").value
       let checkout=document.querySelector("#upcheckout").value
       let person=document.querySelector("#upperson").value

       let url=`http://localhost:3000/hotel/${id}`
       fetch(url,{
        method:"PUT",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            name:name,
            Adhar:aadhar,
            city:city,
            checkin:checkin,
            checkout:checkout,
            person:person,
            total:500
        })
       })
       
    //    location.href="CRUD.html"
       return false

   }
    }


    