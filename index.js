//Brooklyn Tech Counter APP
//We are creating a new counter with a background of the brooklyn tech background
// The count goes up everytime something happens
let counter = 0;

function increment(){
    counter++;
    document.getElementById("count-el").innerText = counter;
}

function save(){
    let save = 0
    save = counter
    document.getElementById("prev").innerText = prev.innerText + " " + save + " - ";
}

function reset(){
    counter = 0
    document.getElementById("count-el").innerText = counter;
    document.getElementById("prev").innerText = "Previous entries: ";
}