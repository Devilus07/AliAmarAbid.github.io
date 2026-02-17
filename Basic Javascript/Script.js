
// This function ticks up when pressing the increase counter button 
function tickUp(){
    let current = parseInt(document.getElementById("counter").textContent);
    current = current + 1;
    document.getElementById("counter").textContent = current; 
}

// This function ticks down when pressing the decrease counter button 
function tickDown(){
    let current = parseInt(document.getElementById("counter").textContent);
    current = current - 1;
    document.getElementById("counter").textContent = current;
}


// Simple for Loop 
function runForLoop(){

    let n = parseInt(document.getElementById("counter").textContent);
    let output = " ";

    for(let i = 0; i <= n; i++){
        output = output + i + " ";
    }

    document.getElementById("forLoopResult").textContent = output;
}


// Repetition with Condition 
function showOddNumbers(){
    let n = parseInt(document.getElementById("counter").textContent);
    let output = "";

    for (let i = 1; i <= n; i++) {
        if (i % 2 === 1) {
            output = output + i + " ";
        }
    }

    document.getElementById("oddNumberResult").textContent = output;
}

// Function for arrays (Multiples of 5)
function addMultiplesToArray() {
    let n = parseInt(document.getElementById("counter").textContent);
    let arr = [];

    let start = Math.floor(n / 5) * 5;

    for (let i = start; i >= 5; i -= 5) {
        arr.push(i);
    }

    console.log(arr);
}

// Function for Objects and Form Fields Part 1
function printCarObject() {
    let car = {
        cType: document.getElementById("carType").value,
        cMPG: document.getElementById("carMPG").value,
        cColor: document.getElementById("carColor").value,
    };

    console.log(car);
}

// This function will load the car that was stored
function loadCar(which){
    let car;

    if (which == 1){
        car = carObject1;
    }else if (which === 2) {
        car = carObject2;
    } else if (which === 3) {
        car = carObject3;
    } else {
        return;
    }

    document.getElementById("carType").value = car.cType;
    document.getElementById("carMPG").value = car.cMPG;
    document.getElementById("carColor").value = car.cColor;
}

// Funtion to change page styles 
function changeColor(which) {
    let p = document.getElementById("styleParagraph");

    if (which === 1) {
        p.style.color = "red";
    } else if (which === 2) {
        p.style.color = "green";
    } else if (which === 3) {
        p.style.color = "blue";
    }
}


