const createStudent = (e) =>{
    e.preventDefault()
    const form = e.target
    const table = document.getElementById("student-table")
    table.innerHTML += `
        <tr>
            <td>${form.elements.studentName.value}</td>
            <td>${form.elements.courseName.value}</td>
            <td>${form.elements.price.value}</td>
            <td>${form.elements.discount.value}</td>
            <td>${form.elements.date.value}</td>
        </tr>
    `
}