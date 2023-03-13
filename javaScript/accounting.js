'use strict';

let departments =
    [
        {
            "departmentName": "Administration",
            "departmentEmployees": localStorage.getItem("administrationCount"),
            "departmentSalary": localStorage.getItem("administrationSalary")
        }
        ,
        {
            "departmentName": "Marketing",
            "departmentEmployees": localStorage.getItem("marketingCount"),
            "departmentSalary": localStorage.getItem("marketingSalary")
        }
        ,
        {
            "departmentName": "Development",
            "departmentEmployees": localStorage.getItem("developmentCount"),
            "departmentSalary": localStorage.getItem("developmentSalary")
        }
        ,
        {
            "departmentName": "Finance",
            "departmentEmployees": localStorage.getItem("financeCount"),
            "departmentSalary": localStorage.getItem("financeSalary")
        }
    ];

function renderTable(departments) {
    let table = document.getElementById("departmentInfo");
    let sumOfEmployee =0;
    let sumOfSalary =0;
    for (let count = 0; count < 4; count++) {
        let trelement = document.createElement("tr");
        for (let element in departments[count]) {
            let tdelement = document.createElement("td");
            tdelement.textContent = `${departments[count][element]}`;
            trelement.appendChild(tdelement);
        }
        let tdelement = document.createElement("td");
        tdelement.textContent = `${departments[count]["departmentSalary"]/departments[count]["departmentEmployees"]}`;
        sumOfEmployee +=parseInt(departments[count]["departmentEmployees"]);
        sumOfSalary +=parseInt(departments[count]["departmentSalary"]);
        trelement.appendChild(tdelement);
        table.appendChild(trelement);
    }
    let trelement = document.createElement("tr");
    let tdelement1 = document.createElement("td");
    let tdelement2 = document.createElement("td");
    let tdelement3 = document.createElement("td");
    let tdelement4 = document.createElement("td");
    tdelement1.textContent = "Total";
    tdelement2.textContent = `${sumOfEmployee}`;
    tdelement3.textContent = `${sumOfSalary}`;
    tdelement4.textContent = `${sumOfSalary/sumOfEmployee}`;
    trelement.append(tdelement1,tdelement2,tdelement3,tdelement4);
    table.appendChild(trelement);
}

renderTable(departments);
//console.log(departments);