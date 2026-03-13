function solve(employees = []) {
    const employeeInfoList = employees.map(employeeName => {
        const info = getEmployeeInfo(employeeName);

        return info;
    });

    employeeInfoList.forEach(info => printEmployeeInfo(info));

    function getEmployeeInfo(name) {
        const info = {
            name,
            personalNumber: name.length,
        }

        return info;
    }

    function printEmployeeInfo(info) {
        console.log(`Name: ${info.name} -- Personal Number: ${info.personalNumber}`);
    }
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
);
