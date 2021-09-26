window.onload = function greeting() {
    let name = prompt("Greetings beautiful human, what is your name!");
    let wellBeing = prompt("How are you today??");
    let currDate = Date();

    document.getElementById("greetingMessage").innerHTML = "Nice to meet you " + name + "!" + " Today is " + currDate
        + ". Eager Wolf welcomes you! We are glad you are doing " + wellBeing + ".";
    console.log(name);
}

function weather() {
    document.getElementById("freeSpace").innerHTML = "It is very cloudy today.";
}

function insult() {
    document.getElementById("freeSpace").innerHTML = "You look disgusting.";
}

function compliment() {
    document.getElementById("freeSpace").innerHTML = "I love that haircut, you look amazing.";
}

function addTwoNums() {
    var num1 = parseInt(prompt("Num 1: "));
    var num2 = parseInt(prompt("Num 2: "));
    var total = num1 + num2;
    document.getElementById("freeSpace").innerHTML = total;
}

function mainPage() {
    window.location.href="brand-eager-wolf.html";
}
