//string is a object in js
//string interpolation ---> use (``) this symbol
let name="mohit"
// let age=20
// console.log(`My name is ${name} and i am ${age} year old.`)

// //string declear , new is object in js
// let myname=new String("mohit")
// console.log(myname[1])
// console.log(myname.__proto__)
// console.log(myname.toUpperCase())//string is obj in js and non primitive datatype hota hai isliye actual value me jo hai hmari change nhi hoga
// console.log(myname)
// console.log(name.toUpperCase())
// console.log(name)
// console.log(name.charAt(2))//out;h -->index ke hisab se charcter btata hai ki kon sa chracter hai 
// console.log(name.indexOf('t'))//t kon se index pr hai btata hai out:4

// //slice ---> isme hm only aage ja skte hai but piche nhi aa skte (1,2,3,4,5) - 1to 5 tk ja skte hai but iska ulta 5 se 1 pr nhi aa skte hai 
// const subname=name.substring(0,3)
// console.log(subname)//moh
// console.log(name.substring(0,3))//out:moh ---> 3 se ek kam index tk value return krta hai 
const newname="mohitkumarsinha"
//console.log(newname.length)
// console.log(newname.slice(0,4))//out:mohi  -->isme hm negtive value pass kr skte hai or piche se start hoga indexing jb negtive value hoga 
// console.log(newname.slice(2,7))//out:hitku
// console.log(newname.slice(7,15))//out:marsinha
//console.log(newname.slice(-15,-13))//out:mo
// console.log(newname.slice(-15,2))//out:mo
// console.log(newname.slice(-15,4))//out:mohi
// console.log(newname.slice(-15,6))//out:mohitk

// console.log(newname.slice(-1,-2))//out:null
// console.log(newname.slice(-1,-4))//out:null
// console.log(newname.slice(-1,-6))//out:null

// console.log(newname.slice(-6,-3))//out:rsi
// console.log(newname.slice(-10,-4))//out:kumars
// console.log(newname.slice(-14,-6))//out:ohitkuma

// console.log(newname.slice(0,15))//out:mohitkumarsinha
// console.log(newname.slice(-9,-6))//out:uma
// console.log(newname.slice(-15,-6))//out:mohitkuma

// const bro="    manit     "
// console.log(bro)
// console.log(bro.trim())//space ko htata hai 

const url = "http/mohitkumar.com/mohit%20kumar"
// console.log(url.replace("%20","_"))//jisko bhi replace krna ho jis bhi chiz ke sath 
// console.log(url.includes("mohit"))//true
// console.log(url.includes("sundar"))//false
console.log(url.split("/"))//out:[ 'http', 'mohitkumar.com', 'mohit%20kumar' ]
