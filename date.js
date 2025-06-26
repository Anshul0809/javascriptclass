// console.log( new Date()) //(new keywords se object nikalta hai aur bina new ke string)

// let time=new Date()
// console.log(time.getFullYear()) //2025
// console.log(time.getMonth()) //5
// console.log(time.getDate()) // 17
// console.log(time.getDay()) // 14
// console.log(time.toLocaleString()) 

let digital=()=>{
    setInterval(()=>{
        let time = new Date()
        let Hours=time.getHours()
        let Minutes=time.getMinutes()
        let Seconds=time.getSeconds()

        let show = document.querySelector("#show")
        show.innerHTML=`${Hours} : ${Minutes} : ${Seconds}`
    },1000)
}


