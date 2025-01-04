//primitive datatypes ---> ye immutable hota hai 
//7 type : string, Number,Boolean,null,undefined,Symbol,Bigint

//---------------------------------------------------------------
//refrence type or non premitive
//Array,Objects,Functions

const name=["mk","sk","rk"]//Array
obj={name:"mohit",Age:22,class:"btech"}//object
const car = function(){ console.log("start car")} 
//--------------------------------------------------------------
//use symbol
const id=Symbol("123")
const logid=Symbol("123")
console.log(id===logid)//false
