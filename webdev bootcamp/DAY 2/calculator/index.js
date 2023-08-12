
function add(){
    const num1=document.querySelector('#number1').value
    const num2=document.querySelector('#number2').value
    document.querySelector("#result").innerHTML=`Result:${parseInt(num1)+parseInt(num2)}`
}

function sub(){
    const num1=document.querySelector('#number1').value
    const num2=document.querySelector('#number2').value
    document.querySelector("#result").innerHTML=`Result:${parseInt(num1)-parseInt(num2)}`
}

function mul(){
    const num1=document.querySelector('#number1').value
    const num2=document.querySelector('#number2').value
    document.querySelector("#result").innerHTML=`Result:${parseInt(num1)*parseInt(num2)}`
}

function div(){
    const num1=document.querySelector('#number1').value
    const num2=document.querySelector('#number2').value
    document.querySelector("#result").innerHTML=`Result:${parseInt(num1)/parseInt(num2)}`
}