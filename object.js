// ==============OBJECT============
// let text="this is string" //String
// let arr=['anshul ',25,'bhopal'] //Array
// console.log(arr[2]) //bhopal (Array ko access karne ka tarika)

let obj={
    name:'anshul',
    age:25,
    city:'bhopal',
    hobbies:['reading','swimming','gaming'],
    welcome: function(){
        console.log('welcome to my profile')
    }

} //object

console.log(obj.city) //object ko access karne ka tarika
obj.collage="MVM" //object me data add karne ka tarika
console.log(obj)

delete obj.collage
console.log(obj) //object me data delete karne ka tarika

obj.age=26
console.log(obj) //object me data update karne ka tarika


console.log(obj.hobbies[1]) //swimming (object me array ko access karne ka tarika)

obj.welcome() //welcome to my profile (object me function ko access karne ka tarika)









