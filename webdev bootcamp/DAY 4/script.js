//frontend

let button=document.querySelector(".btn")
function getDetails(){
    //fetch is in browser api and not in js
    //isko backend mei run nhi kr skte baaki js ke chiz backend mei kr skte hai
    fetch("http://localhost:5000/obj").then((res)=>{
        console.log(res)
        return res.json();
    }).then(function(data){
        console.log(data);
        first.textContent=data.name;
        second.textContent=data.password;  
    })
    let first=document.querySelector(".username");
    let second=document.querySelector(".password");

    first.textContent="ABCD";
    second.textContent="EFGH";    
}

button.addEventListener(fetch());
getDetails();