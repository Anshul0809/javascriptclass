// var,Let,Const
function priyansh(){

    //====== redeclaretion
    // var a=10
    // var a =16
    // console.log(a) //16 qki js. top to bottom execution hua h

    // redeclaretion let
    // let name
    // let name  //not allowed

    // redeclaretion const
    // const b=7
    // const b=5  //not allowed

    //==========reassigment 

    // var age=5
    //     age=6 //allowed

    // let age=5
    //     age=6 //allowed

    // const age=5
    //       age=7 //not allowed

    //===========scope

    // if(true){             //block scope
    //   let a=6
    // }


//    var a=7
//    {
//     var a=8
//     console.log(a) 
//    } 
//    console.log(a) //8  //it is a function scope

// let a=7
//    {
//     let a=8
//     console.log(a) //8
//    } 
//    console.log(a) //7 //it is a block scope

// const a=7
//    {
//     const a=8
//     console.log(a) //8
//    } 
//    console.log(a) //7 //it is a block scope

//============Hoisting  //it is a js consept jab bhi js run hongi jitne bhi (var a) decleration hai o apne aap function ke(top of scope me pahuch jayege) top pe jake baith jate hai


// console.log(a)
// var a=5 //undefined (qki (var a) itna jake uper baith gaya )(it is support only var keyword hoisting)

// console.log(a)
// let a=5 // error (let is not support hoisting)

// console.log(a)
// const a=5 // error (let is not support hoisting)

   

}
priyansh()



