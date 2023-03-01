

let ans = document.getElementById("answer");
let resultBtn = document.getElementById("resultbtn");

resultBtn.addEventListener("click" , function(){
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let operation = document.getElementById("operation");
    if(operation.value == "+"){
        ans.innerText = "=" + (parseInt(number1) + parseInt(number2));
    }
    else if(operation.value == "-"){
        ans.innerText = "=" + (parseInt(number1) - parseInt(number2));
    }
    else if(operation.value == "*"){
        ans.innerText = "=" + (parseInt(number1) * parseInt(number2));
    }
    else if(operation.value == "/"){
        ans.innerText = "=" + (parseInt(number1) / parseInt(number2));
    }
    else{
        ans.innerText = "Please Insert a valid input"
    }
});
