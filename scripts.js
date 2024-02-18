const counter = document.querySelector("#counter");
const ben = document.querySelector("#benimg");
const benAUDIO = document.querySelector("#benaudio");
const yesAUDIO = document.querySelector("#yesaudio");
const noAUDIO = document.querySelector("#noaudio");
const hohohoAUDIO = document.querySelector("#hohohoaudio");
const pointsBTN = document.querySelector("#points");
const upgrd1COST = document.querySelector(".upgrade-1-cost")
const bpc = document.querySelector("#bens-per-click");
const bp5s = document.querySelector("#bens-per-5s");
const upgrd2COST = document.querySelector("#upgrade_2_cost");

let bensperclick = 1;
let bensPer5s = 0;

let upgrade_1_cost = 100;
let upgrade_2_cost = 100

let pointsPerClick = 1;
let newCount = 0;




// Adds Ben Points on Click
ben.addEventListener("click", function() {
    newCount += pointsPerClick;
    newCount = parseInt(newCount);
    counter.textContent = newCount;
    benAUDIO.resume();
    AudioContext.resume();
});


pointsBTN.addEventListener("click", addPointsPerClick);
function addPointsPerClick() {
    if (newCount < upgrd1COST.textContent) {
        // alert("Not enough Bens!");
        noAUDIO.play();
    }else {
        yesAUDIO.play();
        pointsPerClick++;
        newCount -= upgrd1COST.textContent;
        newCount = parseInt(newCount);
        bensperclick++;
        bpc.textContent = bensperclick;
        counter.textContent = newCount;
        upgrade_1_cost *= 1.25;
        upgrd1COST.textContent = parseInt(upgrade_1_cost);
    }
}


// Plays Ben sound on Click
function playSound() {
    benAUDIO.play()
}
ben.addEventListener("click", playSound);



const upgrade2BTN = document.querySelector("#upgrade_2_buy");


// Adds points every 5 Seconds based on Bens per 5 Seconds
 function addPointsPer5s() {
     if (newCount < upgrd2COST.textContent) {
        noAUDIO.play();
     }else if (upgrade_2_cost === 100) {
        setInterval(function() {
            newCount += bensPer5s;
            newCount = parseInt(newCount);
            counter.textContent = newCount;
        }, 5000);
        yesAUDIO.play();
        bensPer5s++;
        newCount -= upgrd2COST.textContent;
        counter.textContent = newCount;
        bp5s.textContent = bensPer5s;

        upgrade_2_cost *= 1.25;
        upgrd2COST.textContent = parseInt(upgrade_2_cost);
     }else {
        yesAUDIO.play();
        bensPer5s++;
        newCount -= upgrd2COST.textContent;
        newCount = parseInt(newCount);
        counter.textContent = newCount;
        bp5s.textContent = bensPer5s;
        upgrade_2_cost *= 1.25;
        upgrd2COST.textContent = parseInt(upgrade_2_cost);
     }
 }

upgrade2BTN.addEventListener("click", addPointsPer5s);
