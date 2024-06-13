// var a=document.getElementById("div1")
// console.log(a)
// a.innerText="HI"
// a.style.color="Red"
// var b= document.getElementsByClassName("t")
// b[0].style.color="Blue"

// const c=document.querySelector(".div1")

// const elem=document.createElement("div")
// elem.innerText="Yo"
// document.body.appendChild(elem)
// elem.remove()

// const elem1=document.getElementById("div1")
// elem1.classList.add("Jdeep")
// //elem1.className="jdeep"
// elem1.classList.remove("t")
// elem1.classList.toggle("Jdeep")
// elem1.classList.toggle("Jdeep")

// function fn(){
//     elem1.style.color="black"
// }
// elem1.addEventListener("click",fn)
// elem1.addEventListener("dblclick",()=>{
//     elem1.style.color="Red"
// })

const elem=document.getElementById("divtile")

function changecolor(){
    const arr=["red","green","blue"]
    var num=Math.round(Math.random()*2)
    elem.style.borderColor=arr[num]
    elem.style.color=arr[num]
}

function backtonormal(){
    elem.style.borderColor="black"
    elem.style.color="black"
}

elem.addEventListener("mouseenter",changecolor)
elem.addEventListener("mouseleave",backtonormal)



//localStorage