const person = ["Will Bettleheim", "Joe Goldberg", "Beck Something", "Love Quinn"];
const salaries = [50000, 80000, 120000];

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

}