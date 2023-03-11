'use strict';

let form = document.getElementById("employeeForm");
form.addEventListener("submit", formSubmitHandler);

function Employee(employeeInformation) {
    this.employee_ID = this.employeeID();
    this.fullName = employeeInformation.FullName;
    this.department = employeeInformation.Department;
    this.level = employeeInformation.level;
    this.imageURL = employeeInformation.imageURL;
    this.salary = this.salaryGenerator(this.level);
}

Employee.prototype.employeeID = function () {
    let ID = this.randomNumberGenerator(0, 9999);
    let IDString = ID.toString()
    while (IDString.length < 4) {
        IDString = "0" + IDString;
    }
    return IDString;
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
    return salary - (salary * 0.075);
}

Employee.prototype.randomNumberGenerator = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

Employee.prototype.renderEmployeeInformation = function () {
    let section;
    switch (this.department) {
        case "Administration":
            section= document.getElementById("administrationSection");
            break;
        case "Marketing":
            section= document.getElementById("marketingSection");
            break;
        case "Development":
            section= document.getElementById("developmentSection");
            break;
        case "Finance":
            section= document.getElementById("financeSection");
            break;
    }
    let div = document.createElement("div");
    let img = document.createElement("img");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    img.src= this.imageURL;
    img.alt=`this img should be ${this.fullName} img`;
    div.appendChild(img);
    p1.textContent =`Name: ${this.fullName} - ID: ${this.employee_ID}`;
    p2.textContent =`Department: ${this.department} - Level: ${this.level}`
    p3.textContent =`Salary: ${this.salary}`
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    div.className="mainSection";
    section.appendChild(div);
}


function formSubmitHandler(event) {
    event.preventDefault();
    let formObject =
    {
        "FullName": event.target.fullName.value,
        "Department": event.target.department.value,
        "level": event.target.level.value,
        "imageURL": event.target.imageURL.value,
    }
    let employee = new Employee(formObject);
    employee.renderEmployeeInformation();
}

//let employees = employeeGenerator(employeeInformation);
//renderTable(employees);