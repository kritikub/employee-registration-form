function getAllData() {
    let form = document.getElementById("student_form").elements;
    let student_id = form.namedItem('student_id').value;
    let student_name = form.namedItem('student_name').value;
    let student_dept = form.namedItem('student_dept').value;
    let student_dob = form.namedItem('student_dob').value;
    let student_hobby = form.namedItem('hobbies').value;
    let student_data = {
        id: parseInt(student_id),
        details: {
            name: student_name,
            dept: student_dept,
            dob: student_dob,
            hobby: student_hobby
        }
    };

    return student_data;
}
function getDataFromLocalStorage() {
    let data = JSON.parse(localStorage.getItem("student_list"));
    return data;
}

let ans =(localStorage.getItem('toEdit'));


if (ans == null) {
    // form.namedItem('student_id').disabled = flase;
    document.getElementById("save").addEventListener("click", (e) => {
        if (!getDataFromLocalStorage()) {
            localStorage.setItem("student_list", JSON.stringify([getAllData()]));
        }
        else {
            data = getDataFromLocalStorage();
            data.push(getAllData());
            localStorage.setItem("student_list", JSON.stringify(data));
        }
        alert("Insertion Sucessfull")
    })
}
else{
    let editField = JSON.parse(localStorage.getItem("student_list"));
    let form = document.getElementById("student_form").elements;
    form.namedItem('student_id').disabled = true;
    form.namedItem('student_id').value = editField[ans].id;

    form.namedItem('student_name').value = editField[ans].details.name;
    form.namedItem('student_dept').value =  editField[ans].details.dept;
    form.namedItem('student_dob').value =  editField[ans].details.dob;
    form.namedItem('hobbies').value =  editField[ans].details.hobby;

    
    document.getElementById('save').addEventListener('click' , ()=>{
        editField.splice(ans ,1, getAllData());
        localStorage.setItem('student_list' , JSON.stringify(editField));
        alert("Updation Sucessfull");
        localStorage.removeItem("toEdit");
        window.location = "./result.html";
    })

}

function showItems(){
    localStorage.removeItem("toEdit");
    window.location='./result.html';

}