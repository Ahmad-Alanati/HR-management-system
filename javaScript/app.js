'use strict';

const employeeInformation =
    [
        {
            "EmployeeID": 1000,
            "FullName": "Ghazi Samer",
            "Department": "Administration",
            "level": "Senior"
        },
        {
            "EmployeeID": 1001,
            "FullName": "Lana Ali",
            "Department": "Finance",
            "level": "Senior"
        },
        {
            "EmployeeID": 1002,
            "FullName": "Tamara Ayoub",
            "Department": "Marketing",
            "level": "Senior"
        },
        {
            "EmployeeID": 1003,
            "FullName": "Safi Walid",
            "Department": "Administration",
            "level": "Mid-Senior"
        },
        {
            "EmployeeID": 1004,
            "FullName": "Omar Zaid",
            "Department": "Development",
            "level": "Senior"
        },
        {
            "EmployeeID": 1005,
            "FullName": "Rana Saleh",
            "Department": "Development",
            "level": "Junior"
        },
        {
            "EmployeeID": 1006,
            "FullName": "Hadi Ahmad",
            "Department": "Finance",
            "level": "Mid-Senior"
        }
    ]

function Employee(employeeInformation) {
    this.employee_ID = employeeInformation.EmployeeID;
    this.fullName = employeeInformation.FullName;
    this.department = employeeInformation.Department;
    this.level = employeeInformation.level;
    this.imageURL = null;
    this.salary = this.salaryGenerator(this.level);
}

Employee.prototype.salaryGenerator = function (level) {
    let employeeSalary;
    switch (level) {
        case "Senior":
            employeeSalary = this.randomNumberGenerator(1500, 2000);
            break;
        case "Mid-Senior":
            employeeSalary = this.randomNumberGenerator(1000, 1500);
            break;
        case "Junior":
            employeeSalary = this.randomNumberGenerator(500, 1000);
            break;
    }
    return this.netSalary(employeeSalary);
}

Employee.prototype.netSalary = function (salary) {
    return salary - (salary * 0.075)
}

Employee.prototype.randomNumberGenerator = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

Employee.prototype.renderEmployeeInformation = function () {
    const employeeTable = document.getElementById("employeeTable");
    employeeTable.innerHTML = employeeTable.innerHTML + `
    <tr>
        <th>${this.employee_ID}</th>
        <th>${this.fullName}</th>
        <th>${this.department}</th>
        <th>${this.level}</th>
        <th>${this.salary}</th>
    </tr>
    `;
    
    
}

function employeeGenerator(employeeInformation) {
    let arrOfObjects = [];
    for (let employee of employeeInformation) {
        arrOfObjects.push(new Employee(employee));
    }
    return arrOfObjects
}

function renderTable(employees){
    const employeeTable = document.getElementById("employeeTable");
    employeeTable.innerHTML = `
    <tr>
        <th>Employee ID</th>
        <th>Full Name</th>
        <th>Department</th>
        <th>Level</th>
        <th>Salary</th>
    </tr>
    `;
    for(let employee of employees){
        employee.renderEmployeeInformation()
    }
}

let employees = employeeGenerator(employeeInformation);
renderTable(employees);

//console.log(employees);