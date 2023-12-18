//if we are not passing any arguments it will be true then it is event capturing 

document.querySelector("#grandParent").addEventListener("click",()=>{
    console.log("grandparent clicked")
} ,true)
document.querySelector("#parent").addEventListener("click",()=>{
    console.log("parent clicked")
},true )
document.querySelector("#child").addEventListener("click",()=>{
    console.log("child clicked")
},true )

// so these events are costler like if we have lot of click event then it will affect our app performance
// to sort out this we need to follow as like how to stop propagation

