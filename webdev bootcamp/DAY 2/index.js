console.log(12);
console.log("Hello world")
///variable declaration
//let,var,const
let a=12
console.log(a)
a=13
console.log(a)
const b=13
console.log(typeof b)
console.log(b)
//b=14//invalid cannot change
//console.log(b)
let c=true
console.log(typeof c)
let d=null
console.log(typeof d)
let e="hello"
console.log(typeof e)
let arr=[1,"hello"]
console.log(arr)
console.log(typeof arr)
arr.push(12)
console.log(arr)
arr.unshift(45)
console.log(arr)

// functions
function sum(num1,num2)
{return num1+num2}

console.log(sum(1,2))

// DOM manipulation
// let inp1=document.getElementById("input1");
// let inp2=document.getElementById("input2");
// function sum1(inp1,inp2)
// {var elem=document.getElementById("res")
// elem.innerHTML=inp1+inp2}

const input1=document.querySelector("#input1")
const input2=document.querySelector("#input2")
const btn=document.querySelector("#input3")
const out=document.querySelector("#out")
btn.addEventListener("click",function(){
    let val1=input1.value
    let val2=input2.value
    console.log(val1)
    console.log(val2)
    let a=parseInt(val1)
    let b=parseInt(val2)
    let sum=a+b
    let prod=a*b
    out.innerHTML=`<p>Sum:${sum}</p>
    <p>Product:${prod}</p>`
})