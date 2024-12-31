//Stack(primitive) and Heap(non - primitive)

//Stack me hme value ka copy milta hai
let ytname = "mkbrain"
let anothername=ytname // copy mila hai ytname ka 
anothername="mohitkumar"//anothername ki value chnage ho jayega  
console.log(anothername)  //out: mohit kumar 
console.log(ytname)//out:mkbrain //yha value samee rhega


//Heap(non_primitive) -- isme hme direct refrence milta hai jo bhi value hai 

let ytchen={yt1:"mk",
    yt2:"rk",
    yt3:"jk"
}
let allchen=ytchen // yha pr ytchen ka direct refrence mila hai 
allchen.yt2="sk" //allchen me value change kiya to refrence me bhi change ho jayega 
console.log(allchen)//{ yt1: 'mk', yt2: 'sk', yt3: 'jk' }

console.log(ytchen)//{ yt1: 'mk', yt2: 'sk', yt3: 'jk' }
//heap me refrence milta hai 
//stack me hme copy milta hai 

