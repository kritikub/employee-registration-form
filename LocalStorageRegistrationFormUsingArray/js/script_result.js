

let table = document.getElementById('student_list');


let ans = JSON.parse(localStorage.getItem("student_list"));
let btn_list = [];
let edit_btn = [];
let count = 0;
ans.forEach(element => {
    addItemsIntoTable(element.id, element.details.name, element.details.dept, element.details.dob, element.details.hobby, count);
    count++;
});


function addItemsIntoTable(std_id, std_name, std_dept, std_dob, std_hobby, count) {

    let row = document.createElement('tr');
    //row


    //column
    let id = document.createElement('td');
    id.innerText = std_id;
    let name = document.createElement('td');
    name.innerText = std_name;
    let dept = document.createElement('td');
    dept.innerText = std_dept;
    let dob = document.createElement('td');
    dob.innerText = std_dob;
    let hobby = document.createElement('td');
    hobby.innerText = std_hobby;

    row.appendChild(id);
    row.appendChild(name);
    row.appendChild(dept);
    row.appendChild(dob);
    row.appendChild(hobby);

    let delete_btn = document.createElement('button');
    delete_btn.innerHTML = 'Delete';
    delete_btn.class = 'delete_btn';
    delete_btn.id = std_id + count;
    btn_list.push(std_id + count);
    let btn = document.createElement('td');
    btn.innerHTML = delete_btn.outerHTML;


    row.appendChild(btn);

    let editBtn = document.createElement('button');
    editBtn.innerHTML = 'Edit';
    editBtn.class = 'edit_btn';
    editBtn.id = std_id + count + 'edit';
    edit_btn.push(std_id+count + 'edit');
    let btn2 = document.createElement('td');
    btn2.innerHTML = editBtn.outerHTML;
    row.appendChild(btn2)


    table.appendChild(row);
}



for(let i=0;i<btn_list.length ;i++){
    document.getElementById(btn_list[i]).addEventListener('click' , ()=>{
        if(confirm("ARe You Sure ?")){
        ans.splice(i , 1);
        localStorage.setItem('student_list' , JSON.stringify(ans));
        window.location.reload();
        }
        
    })
}

for(let i=0;i<edit_btn.length;i++){
    document.getElementById(edit_btn[i]).addEventListener('click' , ()=>{
        console.log(ans[i]);
        localStorage.setItem("toEdit" , i);
        window.location="./index.html";
    })
}


