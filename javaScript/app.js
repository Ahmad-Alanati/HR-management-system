'use strict';

let form = document.getElementById("employeeForm");
form.addEventListener("submit", formSubmitHandler);

function Employee(employeeInformation) {
    this.employee_ID = employeeInformation["employee_ID"]==0?this.employeeID():employeeInformation["employee_ID"];
    this.fullName = employeeInformation.fullName;
    this.department = employeeInformation.department;
    this.level = employeeInformation.level;
    this.imageURL = employeeInformation.imageURL;
    this.salary = employeeInformation["salary"]==0?this.salaryGenerator(this.level):employeeInformation["salary"];
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
            section = document.getElementById("administrationSection");
            break;
        case "Marketing":
            section = document.getElementById("marketingSection");
            break;
        case "Development":
            section = document.getElementById("developmentSection");
            break;
        case "Finance":
            section = document.getElementById("financeSection");
            break;
    }
    let div = document.createElement("div");
    let img = document.createElement("img");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    img.src = this.imageURL;
    img.alt = `this img should be ${this.fullName} img`;
    div.appendChild(img);
    p1.textContent = `Name: ${this.fullName} - ID: ${this.employee_ID}`;
    p2.textContent = `Department: ${this.department} - Level: ${this.level}`
    p3.textContent = `Salary: ${this.salary}`
    p1.style = "text-align: center;";
    p3.style = "text-align: center;";
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    div.className = "mainSection";
    section.appendChild(div);
}


function formSubmitHandler(event) {
    event.preventDefault();
    let formObject =
    {
        "employee_ID":0,
        "fullName": event.target.fullName.value,
        "department": event.target.department.value,
        "level": event.target.level.value,
        "imageURL": event.target.imageURL.value,
        "salary":0
    }
    let employee = new Employee(formObject);
    employee.renderEmployeeInformation();
    saveInLocalStorage(employee);
}

function saveInLocalStorage(obj) {
    switch (obj.department) {
        case "Administration":
            let administrationSalary =localStorage.getItem("administrationSalary")==null?0:parseInt(localStorage.getItem("administrationSalary"));
            let administrationCount = localStorage.getItem("administrationCount")==null?0:parseInt(localStorage.getItem("administrationCount"));
            administrationCount++;
            administrationSalary+=obj.salary;
            localStorage.setItem("administrationCount",administrationCount);
            localStorage.setItem("administrationSalary",administrationSalary);
            break;
        case "Marketing":
            let marketingSalary =localStorage.getItem("marketingSalary")==null?0:parseInt(localStorage.getItem("marketingSalary"));
            let marketingCount = localStorage.getItem("marketingCount")==null?0:parseInt(localStorage.getItem("marketingCount"));
            marketingCount++;
            marketingSalary+=obj.salary;
            localStorage.setItem("marketingCount",marketingCount);
            localStorage.setItem("marketingSalary",marketingSalary);
            break;
        case "Development":
            let developmentSalary = localStorage.getItem("developmentSalary")==null?0:parseInt(localStorage.getItem("developmentSalary"));
            let developmentCount = localStorage.getItem("developmentCount")==null?0:parseInt(localStorage.getItem("developmentCount"));
            developmentCount++;
            developmentSalary+=obj.salary;
            localStorage.setItem("developmentCount",developmentCount);
            localStorage.setItem("developmentSalary",developmentSalary);
            break;
        case "Finance":
            let financeSalary = localStorage.getItem("financeSalary")==null?0:parseInt(localStorage.getItem("financeSalary"));
            let financeCount = localStorage.getItem("financeCount")==null?0:localStorage.getItem("financeCount");
            financeCount++;
            financeSalary+=obj.salary;
            localStorage.setItem("financeCount",financeCount);
            localStorage.setItem("financeSalary",financeSalary);
            break;
    }
}

//localStorage.clear();
//let employees = employeeGenerator(employeeInformation);
//renderTable(employees);