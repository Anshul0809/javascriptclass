// string 
// it is a primitive data type
// it is used to represent the text 
// ## method
// 1.length
// 2.slice()
// 3.concat()
// 4.substring()
// 5.replace() * 
// 6.touppercase()
// 7.tolowercase()
// 8.trim()
// 9.replaceAll()*
// 10.charAt()
// 11.charcodeAt()
// 12.split() *
// 13.indexOf()

// let text="  sid israni  " //white space

function len(){
    let text="siddarth" //string
console.log(text.length) //length of the string
}
len() //output 8

// 2.slice()
 let text="this isstringfrom cybrom"
 console.log(text.slice(7,13)) //output this is string

 //6 touppercase()
 function upper(){
    let text="this is capital letter"
    console.log(text.toUpperCase()) //output THIS IS CAPITAL LETTER
 }
 upper() //output THIS IS CAPITAL LETTER

 //7. tolowercase()
 function lower(){
    let text="THIS IS SMALL LETTER"
    console.log(text.toLowerCase()) //output this is small letter
 }
 lower() //output this is small letter

//  3.concat()
function concat(){
    let a="Anshul"
    let b="Gajbhiye"
    console.log(a.concat(" ," ,b))
}
concat()

//4. Substring()
function substring(){
    let text="this is substring"
    console.log(text.substring(5,7))

}
substring()
//8.trim() (white space ko hatane ke liye)
function trim(){
 let text="    This is String  "
 console.log(text.trim())
}
trim()

//10.charAt()  (perticular charecter ko nikalti hai )(charAt(indexno.))
function charat(){
    let text="this is charat"
    console.log(text.charAt(2)) //output i
    console.log(text.charAt(5))
    console.log(text.charAt(8))
}
charat()
//11.charcodeAt() (charecter ka uanic code nikalke deta hai asscci value deta hai)(charCodeAt(indexno.))
function charCodeAt(){
    let text="this is charCodeAt"
    let emoji="😅"
    console.log(text.charCodeAt(2))
    console.log(text.charCodeAt(18))
    console.log(emoji.charCodeAt(0))
}
charCodeAt()
//12.indexOf() (charecter likhke uski indexvalue  nikalte hai )
function indexOf(){
let text="this is indexof"
console.log(text.indexOf("i"))
}
indexOf()

//5.Replace() (jo bhi usko frist milta hai usko replace karta hai)
function replace(){
    let text="This is string and stRing of JS"
    console.log(text.replace("string","cybrom"))
    console.log(text.replace(/string/gi,"cybrom")) //(without using replaceAll ye syntex replace all ka kaam karta hai )(i ka use case insensetive hota hai )

}
replace()
//9.replaceAll()
function replaceAll(){
let text="This is string and string of JS"
    console.log(text.replaceAll("string","cybrom"))
}
replaceAll()
//14.split() (string ko array me convert karta hai) (split(sapretor))
function split(){
//    let Fruits=["Apple","Banana"] //array
      let okk="this is String"
      console.log(okk.split(" ")) //output ["this","is","String"]
      let ok="this-is S-tr-ing"
      console.log(ok.split("-")) //output ["this","is","S","tr","ing"]

}
split()

 
