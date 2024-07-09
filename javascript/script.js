/* Javascript CRUD App*/

/* Data Add , Remove , Delete */

document.addEventListener('DOMContentLoaded' , () => {

    const addForm = document.getElementById('Addform');
    const editForm = document.getElementById('Editform');
    const studentTable = document.querySelector('.student-table');

let students = [];

let editIndex = -1;

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newStudent = {
        name: addForm.studentaddname.value,
        age: addForm.studentaddage.value,
        email: addForm.studentaddemail.value,
        phoneno: addForm.studentaddphone.value,
        address: addForm.studentaddaddress.value,
    };
    students.push(newStudent)
    addForm.reset()
    renderTable();
})

editForm.addEventListener('submit' , (e) => {
    e.preventDefault();
    const updateStudent = {
        name: editForm.studentEditname.value,
        age: editForm.studentEditage.value,
        email: editForm.studentEditemail.value,
        phoneno: editForm.studentEditphoneno.value,
        address: editForm.studentEditaddress.value,
    };
    students[editIndex] = updateStudent;
    editIndex = -1
    editForm.reset()
    renderTable();
})

const renderTable = () => {
    const tableHTML = `
    <table border = 7px">
        <thead>
            <tr>
                <th> Name</th>
                <th> Age</th>
                <th> Email</th>
                <th> Mobile</th>
                <th> Address</th>
                <th> Actions</th>
            </tr>
        </thead>
        <tbody>
        ${students.map((student , index) => `
            <tr>
                <td>${student.name}</td>
                <td>${student.age}</td>
                <td>${student.email}</td>
                <td>${student.phoneno}</td>
                <td>${student.address}</td>
            <td>
                <button onclick='editStudent(${index})'>Edit</button>
                <button onclick='deleteStudent(${index})'>Delete</button>
            </td>
            </tr>
            `).join('')}
        </tbody>
    </table>
    `;
    studentTable.innerHTML = tableHTML;
}

window.editStudent = (index) => {
    editIndex = index;
    const student = students[index];
    editForm.studentEditname.value = student.name
    editForm.studentEditage.value = student.age
    editForm.studentEditemail.value = student.email
    editForm.studentEditphoneno.value = student.phoneno
    editForm.studentEditaddress.value = student.address
}

window.deleteStudent = (index) => {
    students.splice(index , 1);
    renderTable();
}

})