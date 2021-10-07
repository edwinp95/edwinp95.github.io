var entry;

function getEntry() {
    do {
        entry = prompt("Which polygon do you desire? (1 - 10)", 1);
        entry = Math.abs(entry);
        entry = Math.round(entry);
    }
    while (validateEntry());
    alert("That is a " + getShape() + "!");
}

function getShape() {
    switch(entry){
        case 1:
            return "Henagon";
        case 2:
            return "Digon";
        case 3:
            return "Trigon";
        case 4:
            return "Tetragon";
        case 5:
            return "Pentagon";
        case 6:
            return "Hexagon";
        case 7:
            return "Heptagon";
        case 8:
            return "Octagon";
        case 9:
            return "Enneagon";
        case 10:
            return "Decagon";
    }
}

function validateEntry() {
    if(isNaN(entry) || entry > 10 || entry < 1){
        alert("Invalid entry. Please enter a number 1 - 10");
        return true;    
    }else{
        return false;
    }
}