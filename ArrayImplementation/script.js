
arr = ['push' , 'pop' , 'shift' , 'unshift' , 'concat' , 'slice' , 'slicefrom' , 'indexof' , 'includes' , 'reverse'];
var text = [];
arr.forEach(element => {
   document.getElementById(element).addEventListener('click' , (e) =>{
    makeStringToArray();
    console.log(e.target.innerText);
    let btn = e.target.innerText;
    if(btn.toLowerCase() == "push"){
        let newItem = prompt("Enter New Item Here ");
        text.push("  "+newItem+"  ");
        updateText();
    }
    if(btn.toLowerCase() == "pop"){
        text.pop();
        updateText();
    }

    //remove items from start
    if(btn.toLowerCase() == "shift"){
        alert(text.shift());
        updateText();
    }

    //add items in start
    if(btn.toLowerCase() == "unshift"){
        text.unshift(prompt("Enter element to insert : "));
        updateText();
    }

    if(btn.toLowerCase() == "concat"){
        let newItems = prompt("Enter New Items Here ");
        text = text.concat(newItems.split(" "));
        updateText();
    }

    if(btn.toLowerCase() == 'slice'){
        alert(text.slice(prompt("Enter Start") , prompt("Enter End")));
        updateText();
    }
    if(btn.toLowerCase() == 'indexof'){
        
    }

   })
});


function updateText(){
    document.getElementById("result").innerText = text;
}


function makeStringToArray(){
    let text1 = document.getElementById("giventext").value;
    console.log(text1.split(" "));
    let textArray = text1.split(" ");
}