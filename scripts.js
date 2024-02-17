const counter = document.querySelector("#counter");
const ben = document.querySelector("#benimg");
const benAUDIO = document.querySelector("#benaudio");
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


ben.addEventListener("click", function() {
    newCount += pointsPerClick;
    newCount += bensPer5s;
    counter.textContent = newCount;
} );


function playSound() {
    benAUDIO.play()
}


ben.addEventListener("click", playSound);

pointsBTN.addEventListener("click", addPointsPerClick);

function addPointsPerClick() {
    if (newCount < upgrd1COST.textContent) {
        alert("Not enough Bens!");
    }else {
        pointsPerClick++;
        newCount -= upgrd1COST.textContent;
        bensperclick++;
        bpc.textContent = bensperclick;
        counter.textContent = newCount;
        upgrade_1_cost *= 2;
        upgrd1COST.textContent = upgrade_1_cost;
    }
}


const upgrade2BTN = document.querySelector("#upgrade_2_buy");



 function addPointsPer5s() {
     if (newCount < upgrd2COST.textContent) {
        alert("Not enough Bens!");
     }else if (upgrade_2_cost === 100) {
        alert("test")
        bensPer5s++;
        newCount -= upgrd2COST.textContent;
        counter.textContent = newCount;
        bp5s.textContent = bensPer5s;
        setInterval(function() {ben.click();}, 5000);
        upgrade_2_cost *= 2;
        upgrd2COST.textContent = upgrade_2_cost;
     }else {
        alert("test 200")
        bensPer5s++;
        newCount -= upgrd2COST.textContent;
        counter.textContent = newCount;
        bp5s.textContent = bensPer5s;
        upgrade_2_cost *= 2;
        upgrd2COST.textContent = upgrade_2_cost;
     }
 }

upgrade2BTN.addEventListener("click", addPointsPer5s);
