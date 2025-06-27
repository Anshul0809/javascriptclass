
let fetchdata=async()=>{
    // pending resolve reject 
   let url='http://localhost:3000/hotelbooking' 
  let res= await fetch(url,{method:"GET"})
  let data= await res.json()
  console.log(data)


}
fetchdata()