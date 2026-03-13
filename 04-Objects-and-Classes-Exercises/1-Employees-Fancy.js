function solve(employees = []) {
    const employeeInfoList = employees.map(getEmployeeInfo);

    employeeInfoList.forEach(printEmployeeInfo);

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
