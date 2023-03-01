

let table = document.getElementById('student_list');


let ans = JSON.parse(sessionStorage.getItem("student_list"));

ans.forEach(element => {
    addItemsIntoTable(element.id , element.name , element.dept , element.dob , element.hobby);
});



function addItemsIntoTable(std_id , std_name , std_dept , std_dob , std_hobby) {
    let row = document.createElement('tr');

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
    let btn = document.createElement('td');
    btn.innerHTML = delete_btn.outerHTML;
    row.appendChild(btn);

    let editBtn = document.createElement('button');
    editBtn.innerHTML = 'Edit';
    editBtn.class = 'edit_btn';
    let btn2 = document.createElement('td');
    btn2.innerHTML = editBtn.outerHTML;
    row.appendChild(btn2)


    table.appendChild(row);
}