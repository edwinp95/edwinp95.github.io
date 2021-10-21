const person = ["Will Bettleheim", "Joe Goldberg", "Beck S.", "Love Quinn"];
const salaries = [50000, 80000, 120000, 43000];
const merged = [];


for(var i =0; i< person.length; i++){
    merged.push([person[i],salaries[i]]);
}

function addSalary(){
    newName = prompt("Employee Name: ", "John Doe");
    newSalary = parseInt(prompt("Salary: ", "50000"));
    merged.push([newName, newSalary]);
    person.push(newName);
    salaries.push(newSalary);
}

function displayResults(){
    let average = 0;
    let sum = 0;
    let maxSal = Math.max(...salaries);
    for(var i = 0; i < salaries.length; i++){
        sum += salaries[i];
    }
    average = sum / salaries.length;
    average = Math.round(average);
    document.getElementById("average").innerHTML = "$" + average;
    document.getElementById("highest").innerHTML = "$" + maxSal;

}

function displaySalary(){
    var table = document.getElementById("results_table");

    for(var i=1; i<table.rows.length; i++){
        for(var j = 0; j< table.rows[i].cells.length; j++){
            table.rows[i].cells[j].innerHTML = merged[i-1][j];
       }
    }

}
