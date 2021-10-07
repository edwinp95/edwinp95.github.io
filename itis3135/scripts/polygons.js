function getShape(num) {
    switch(num){
        case 1:
            return "Henagon";
            break;
        case 2:
            return "Digon";
            break;
        case 3:
            return "Trigon";
            break;   
        case 4:
            return "Tetragon";
            break;
        case 5:
            return "Pentagon";
            break;
        case 6:
            return "Hexagon";
            break;
        case 7:
            return "Heptagon";
            break;
        case 8:
            return "Octagon";
            break;   
        case 9:
            return "Enneagon";
            break;
        case 10:
            return "Decagon";
            break;
    }
}

function validateEntry(entry) {

}

function getEntry() {
    prompt("Which polygon do you desire? (1 - 10)", 1);
}