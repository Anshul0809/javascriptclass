//BOM
//1.Ask the user of their age and if it is greater than or equals to 18 with ternory operator and display the result in alert.

// function ans(){
//     var a =prompt("enter you age")
//     var b= a>= 18 ? "you are vote" : "you cant vote";
//      alert (b)
//     }
//     ans()

//2.Ask the user if they have completed a course and have a certificate bye (confirm) if both ok then give a complete message by alert otherwise not completed

// function complete()
// {
//     var a = confirm("Have you completed a course?")
    
//         if(a)
//         {
//             var b= confirm('do you have a certificate?')
//             if(b){
//                 alert("you have completed the course and have a certificate")
//             }
//             else{
//                 alert("you have completed the course but dont have a certificate")
//             }
            
//         }
//         else{
//             alert("you have not completed the course")
//         }
        
    

// }
// complete()

//3.ask the user for the price of an item and (confirm) whether they have a discount coupon.,,apply a 10% discount if ther confirm

// function price(){
//     var a=Number (prompt("enter a price of a item "))
//     var b= Number (confirm("your item price is"+a))
//   var d=  confirm('you have a discount coupon?')
//     var c=a*0.1
//     if (d){
//         alert("your final price after 10% discount is"+(a-c))

//     } 
//     else{
//         alert("your final price is"+a)
//     }
    
// }
// price()

// 4.ask the user for their exam score and determine if they passed or failed (above 33 pass)

//  function score(){
//     var a=prompt("enter you exam score")
//     if(a>=33)
//     {
//         alert("you have passed the exam")
//     }
//     else{
//         alert("you have failed the exam")
//     }
//  }
//  score()

// 5.check entered number is even or odd 

//  function check(){
//   var a=Number (prompt("enter a number"))
//   if(a%2==0)
//   {
//     alert("number is even")
//   }
//   else{
//     alert("number is odd")
//  }
// }
//  check()

// 6.Ask for conformation "are you sure to delete" if ok give message "item deleted" otherwise "cancelled."

// function Delete(){
//     var a=confirm("are you sure to delete ?")
//     if (a){
//         alert("item deleted")
//     }
//     else{
//         alert("cancelled")
//     }
// }
// Delete()

// 7.check entered number is positive or negative

// function check(){
//     var a=Number (prompt("enter a number"))
//     if(a>=0){
//         alert("number is positive")
//     }
//     else{
//         alert("number is negative")
//     }
// }
// check()

// 8.print 1-10 number in console by while loop

// function print(){

//     var i = 1;
//     while(i<=10)
//     {
//         console.log(i)
//         i++;
//     }
// }
// print()

// 9.keep asking the user to input a number until they enter a number greater than 10.do while loop

//  function ask(){
//     var a=null
//     do{
//         a=Number(prompt("enter a number"))
//     }while(a<=10);
    
//  }
//  ask()

// 10.ask the user to enter a day of the week 1 for monday 2.for tuesday etc . and display the name of the day by switch case

// function ask(){
//  var a=Number(prompt("enter a day of the week"))
//  switch (a){

 
//  case 1:{
//  alert("monday")
//  break;
//  }
//  case 2:{
// alert("tuesday")
//  break;
//  }
//  case 3:{
// alert("wednesday")
// break;
// }
// case 4:{
// alert("thursday")
// break;
// }
// case 5:{
// alert("friday")
// break;
//  }
//  case 6:{
// alert("saturday")
// break;
//  }
// case 7:{
// alert("sunday")
// break;
//  }
//  default:{
//  alert("invalid day")
// break;
// }
                        
// }
// }
// ask()


// ----------------------------Array question---------------------------------------------
// find the maximum number of the Array [3,7,2,9,5]
// let arr=[3,7,2,9,5]
// let max=arr[0]
// for(let i=1;i<arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i];
//     }
// }
// console.log(max)

// count even and odd numbers
// count how many even and odd number in thi array [1,2,3,5,4,,6,7,8,9]
// let arr=[1,2,3,4,5,6,7,8,9]
// let even=0
// let odd=0
// for(let i of arr){
//     if(i%2==0){
//         even=enve+1
//         }
//         else{
//             odd=odd+1
//         }
// }
// console.log("even number=" (even))
// console.log('odd number='(odd))

// reverse in array

// let arr=[10,20,30,40,50]
// let reversed=[]
// // let j=0;
// for(let i=arr.length-1; i>=0;i--){
//    reversed.push(arr[i])  //push array me element ko pichhe se insert
// //  reversed[j]=arr[i]
// //  j++;
// }
// console.log("reversed=",reversed) 

//second method

// function reverse(){
// let arr=[10,20,30,40,50]
// let start=arr[0]
// let end=arr.length-1
// while(start<end){
//     let temp=arr[start]
//     arr[start]=arr[end]
//     arr[end]=temp
//     start++
//     end--
// }
// console.log("reversed array :",arr)
// }reverse()

/// if element exist or not [3,5,7,9,11] check number 9

// let arr=[3,5,7,9,11]
// let search=9,b=false
// for(let i=0; i<arr.length; i++){
//     if(arr[i]==search){
//         b=true
//         break
//     }
// }console.log(b)

//marge two array without using sprate operator

// let arr=[1,2,3,4]
// let arr2=[5,6,7,8]
// let temp=[]
// let j=0;
// for(let i=0; i<arr.length; i++){
//     temp[j]=arr[i];
//     j++;
// }
// for(let k=0; k<arr2.length; k++){
//     temp[j]=arr2[k]
//     j++;
// }
// console.log(temp)

//second method 

// let arr=[1,2,3,4]
// let arr2=[5,6,7,8]
// let merged=[]
// for(let i=0; i<arr.length; i++){
//     merged.push(arr[i])
// }
// for(let i=0; i<arr2.length; i++){
//     merged.push(arr2[i])
// }
// console.log(merged)

