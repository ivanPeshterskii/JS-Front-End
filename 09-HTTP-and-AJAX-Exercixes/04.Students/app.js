const baseUrl = 'http://localhost:3030/jsonstore/collections/students';

const formElement = document.getElementById('form');

initialPageLoad();

async function initialPageLoad() {
    const students = await fetchStudents();

    rednerStudents(students);

    formElement.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const newStudent = Object.fromEntries(formData);
        
        await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newStudent),
        });

        // REset the form after submit
        formElement.reset();
    });
}

async function fetchStudents() {
    const response = await fetch(baseUrl);
    const result = await response.json();
    const data = Object.values(result);

    return data;
}

function rednerStudents(students) {
    const resultTable = document.getElementById('results');

    const studentElements = students.map(createStudentElement);

    resultTable.append(...studentElements);
}

function createStudentElement(student) {
    const tableRow = document.createElement('tr');

    const firstNameTdElement = document.createElement('td');
    firstNameTdElement.textContent = student.firstName;
    tableRow.appendChild(firstNameTdElement);

    const lastNameTdElement = document.createElement('td');
    lastNameTdElement.textContent = student.lastName;
    tableRow.appendChild(lastNameTdElement);

    const facultyNumberTdElement = document.createElement('td');
    facultyNumberTdElement.textContent = student.facultyNumber;
    tableRow.appendChild(facultyNumberTdElement);

    const gradeTdElement = document.createElement('td');
    gradeTdElement.textContent = student.grade;
    tableRow.appendChild(gradeTdElement);

    return tableRow;
}
