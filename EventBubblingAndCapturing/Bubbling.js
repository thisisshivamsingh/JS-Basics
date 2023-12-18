//if we are not passing any arguments it will be fals ebyDefault

document.querySelector("#grandParent").addEventListener("click",()=>{
    console.log("grandparent clicked")
} ,false)
document.querySelector("#parent").addEventListener("click",()=>{
    console.log("parent clicked")
},false )
document.querySelector("#child").addEventListener("click",()=>{
    console.log("child clicked")
},false )

// so these events are costler like if we have lot of click event then it will affect our app performance
// to sort out this we need to follow as like how to stop propagation

document.querySelector("#grandParent").addEventListener("click",()=>{
  
    console.log("grandparent clicked")
} ,false)
document.querySelector("#parent").addEventListener("click",(e)=>{
    e.stopPropagation()
    console.log("parent clicked")
},false )
document.querySelector("#child").addEventListener("click",()=>{
    
    console.log("child clicked")
},false )
