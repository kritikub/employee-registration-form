
document.getElementById("name").addEventListener('click' , (e)=>{
    console.log(document.getElementById("name").value);
    document.getElementById('eventText').innerText = "Cliked at : "+ 'name';
})


document.getElementById("email").addEventListener('click' , (e)=>{
    console.log(document.getElementById("email").value);
    document.getElementById('eventText').innerText = "Cliked at : "+ 'email';
})

document.getElementById("message").addEventListener('click' , (e)=>{
    console.log(document.getElementById("message").value);
    document.getElementById('eventText').innerText = "Cliked at : "+ 'message';
})

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

let allInput = document.querySelectorAll('input')

allInput.forEach(input =>{
    input.addEventListener('mouseover' , ()=>{
        console.log("Mouse Over");
        // document.body.style.backgroundColor = 'rgb('+random(255)+','+random(255)+','+random(255)+')';
        
        document.getElementById('eventText').innerText = "MouseOver";
    })
})


allInput.forEach(input =>{
    input.addEventListener('mouseout' , ()=>{
        console.log("Mouse Out");
        // document.body.style.backgroundColor = 'rgb('+random(255)+','+random(255)+','+random(255)+')';
        document.getElementById('eventText').innerText = "MouseOut";
    })
})



