const person = ["Will Bettleheim", "Joe Goldberg", "Beck S.", "Love Quinn"];
const salaries = [50000, 80000, 120000, 43000];
const merged = [];

function addSalary(){
    alert("Salary: ");
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
        for(var i =0; i< person.length; i++){
        merged.push([person[i],salaries[i]]);
   }
    for(var i=1; i<table.rows.length; i++){
        for(var j = 0; j< table.rows[i].cells.length; j++){
            table.rows[i].cells[j].innerHTML = merged[i-1][j];
            
       }
    }
    console.log(merged);
}