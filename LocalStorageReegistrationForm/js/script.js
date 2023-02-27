function getAllData() {
    let student_data = [];
    let form = document.getElementById("student_form").elements;
    let student_id = form.namedItem('student_id').value;
    let student_name = form.namedItem('student_name').value;
    let student_dept = form.namedItem('student_dept').value;
    let student_dob = form.namedItem('student_dob').value;
    let student_hobby = form.namedItem('hobbies').value;
    student_data = {
        id: parseInt(student_id),
        name: student_name,
        dept: student_dept,
        dob: student_dob,
        hobby: student_hobby
    };

    return student_data;
}

//function to get all items from the form
document.getElementById("save").addEventListener('click', (e) => {
    let student_data = getAllData();
    localStorage.setItem(student_data.id, JSON.stringify(student_data));
    console.log("Insertion sucessful");
    alert("Data Inserted Into Local Storage");
    // localStorage.clear();
})


