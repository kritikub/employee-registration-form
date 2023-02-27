let student_list_key = [];
for (let i = 0; i < localStorage.length; i++) {
    // console.log(localStorage.key(i));
    if(localStorage.key(i)==""){
        continue;
    }
    student_list_key[i] = localStorage.key(i);
}
// console.log(student_list_key);
student_list_key.sort();

let table = document.getElementById('student_list');

for(let i=0;i<student_list_key.length;i++){
    let item = JSON.parse(localStorage.getItem(student_list_key[i]));
    console.log(item.id , item.name , item.dept , item.dob , item.hobby );
    addItemsIntoTable(item.id , item.name , item.dept , item.dob , item.hobby )
}

// console.log(student_list_key);


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