
document.addEventListener("DOMContentLoaded", function() {

const benAUDIO = document.getElementById("ben-audio");
const eughAudio = document.getElementById("eugh-audio");
const benIMG = document.getElementById("ben-img");
const benBLACK = document.getElementById("ben-black")
const BPC = document.getElementById("bens-per-click");
const BPS = document.getElementById("bens-per-second");
// Bens per Click / Bens Per Second

const pointCounter = document.getElementById("point-counter-container");

let bensPerclick = 1;
let bensPerSecond = 0;
let currentPoints = 0;

let eughPlayed = false;

// Adds Points and Plays Audio on Click
benIMG.addEventListener("click", () => {
   if(currentPoints >= 5000 && eughPlayed === false) {
      eughAudio.play();
      benIMG.classList.add("hidden");
      benBLACK.classList.remove("hidden");
      eughPlayed = true;
   };

   benAUDIO.play();
   currentPoints += bensPerclick;
   currentPoints = parseInt(currentPoints);
   pointCounter.textContent = currentPoints;
   saveGame();
})

benBLACK.addEventListener("click", () => {
   if(currentPoints < 5000 && eughPlayed === true) {
      eughAudio.play();
      benIMG.classList.remove("hidden");
      benBLACK.classList.add("hidden");
      eughPlayed = false;
   };


   benAUDIO.play();
   currentPoints += bensPerclick;
   currentPoints = parseInt(currentPoints);
   pointCounter.textContent = currentPoints;
   saveGame();
})


// Adds Points when pressing Spacebar

document.addEventListener("keyup", (event) => {
   if (event.keyCode == 32) {
       benAUDIO.play()
       currentPoints += bensPerclick;
       currentPoints = parseInt(currentPoints);
       pointCounter.textContent = currentPoints;
       saveGame();
   }
});


// Mute Game

const muteButton = document.getElementById("mute-button");
let isMuted = false;


function muteGame() {
   benAUDIO.muted = true;
   yesAudio.muted = true;
   noAudio.muted = true;
   eughAudio.muted = true;
   isMuted = true;
}

function unmuteGame() {
   benAUDIO.muted = false;
   yesAudio.muted = false;
   noAudio.mute = false;
   isMuted = false;
}

muteButton.addEventListener("click",() => {
   if(isMuted) {
      muteButton.classList.remove("muted");
      muteButton.classList.add("unmuted");
      muteButton.textContent = "Mute";
      unmuteGame();
   }else {
      muteButton.classList.remove("unmuted");
      muteButton.classList.add("muted");
      muteButton.textContent = "Unmute"
      muteGame();
   }

})

// Upgrades

const yesAudio = document.getElementById("yes-audio");
const noAudio = document.getElementById("no-audio");

// Upgrade 1

const upgrade1BuyButton = document.getElementById("upgrade-1-buy");
const upgrade1CostText = document.getElementById("upgrade-1-cost");
let upgrade1Cost = 100;


upgrade1BuyButton.addEventListener("click", () => {
   if(currentPoints < upgrade1Cost) {
      noAudio.play();
      noAudio.resume();
   }else {
      if(currentPoints < 5000) {
         benIMG.classList.remove("hidden");
         benBLACK.classList.add("hidden");
      }
   yesAudio.play();
   bensPerclick++;
   BPC.textContent = bensPerclick;
   currentPoints -= upgrade1Cost;
   pointCounter.textContent = currentPoints;
   pointCounter.textContent = parseInt(pointCounter.textContent);
   upgrade1Cost *= 1.25;
   upgrade1CostText.textContent = upgrade1Cost;
   upgrade1CostText.textContent = parseInt(upgrade1CostText.textContent);
   }
})

// Upgrade 2

const upgrade2BuyButton = document.getElementById("upgrade-2-buy");
const upgrade2CostText = document.getElementById("upgrade-2-cost");
let upgrade2Cost = 100;


upgrade2BuyButton.addEventListener("click", () => {
   if(currentPoints < upgrade2Cost) {
      noAudio.play();
   } else if(upgrade2Cost === 100){

      setInterval(function() {
         currentPoints += bensPerSecond;
         currentPoints = parseInt(currentPoints);
         pointCounter.textContent = currentPoints;

         if(currentPoints >= 5000) {
            benIMG.classList.add("hidden");
            benBLACK.classList.remove("hidden");
         }
      }, 1000);

      yesAudio.play();
      bensPerSecond++;
      BPS.textContent = bensPerSecond;
      currentPoints -= upgrade2Cost;
      pointCounter.textContent = currentPoints;
      pointCounter.textContent = parseInt(pointCounter.textContent);
      upgrade2Cost *= 1.25;
      upgrade2CostText.textContent = upgrade2Cost;
      upgrade2CostText.textContent = parseInt(upgrade2CostText.textContent);
      }
   else {
      if(currentPoints < 5000) {
         benIMG.classList.remove("hidden");
         benBLACK.classList.add("hidden");
      }
   yesAudio.play();
   bensPerSecond++;
   BPS.textContent = bensPerSecond;
   currentPoints -= upgrade2Cost;
   pointCounter.textContent = currentPoints;
   pointCounter.textContent = parseInt(pointCounter.textContent);
   upgrade2Cost *= 1.25;
   upgrade2CostText.textContent = upgrade2Cost;
   upgrade2CostText.textContent = parseInt(upgrade2CostText.textContent);
   }
})


// Upgrade 3

const upgrade3BuyButton = document.getElementById("upgrade-3-buy");
const upgrade3CostText = document.getElementById("upgrade-3-cost");
let upgrade3Cost = 200;

upgrade3BuyButton.addEventListener("click", () => {
   if(upgrade2Cost === 100) {
      alert("Buy Upgrade 2 first!");
      return;
   }else if(currentPoints < upgrade3Cost) {
      noAudio.play();
   }else {
      if(currentPoints < 5000) {
         benIMG.classList.remove("hidden");
         benBLACK.classList.add("hidden");
      }

   yesAudio.play();
   bensPerSecond += 2;
   BPS.textContent = bensPerSecond;
   currentPoints -= upgrade3Cost;
   pointCounter.textContent = currentPoints;
   pointCounter.textContent = parseInt(pointCounter.textContent);
   upgrade3Cost *= 1.2;
   upgrade3CostText.textContent = upgrade3Cost;
   upgrade3CostText.textContent = parseInt(upgrade3CostText.textContent);
   }
})


// Upgrade 4

const upgrade4BuyButton = document.getElementById("upgrade-4-buy");
const upgrade4CostText = document.getElementById("upgrade-4-cost");
let upgrade4Cost = 400;

upgrade4BuyButton.addEventListener("click", () => {
   if(upgrade2Cost === 100) {
      alert("Buy Upgrade 2 first!");
      return;
   }else if(currentPoints < upgrade4Cost) {
      noAudio.play();
   }else {
      if(currentPoints < 5000) {
         benIMG.classList.remove("hidden");
         benBLACK.classList.add("hidden");
      }

   yesAudio.play();
   bensPerSecond += 5;
   BPS.textContent = bensPerSecond;
   currentPoints -= upgrade4Cost;
   pointCounter.textContent = currentPoints;
   pointCounter.textContent = parseInt(pointCounter.textContent);
   upgrade4Cost *= 1.2;
   upgrade4CostText.textContent = upgrade4Cost;
   upgrade4CostText.textContent = parseInt(upgrade4CostText.textContent);
   }
})


// localStorage to save and load game data

const saveGame = () => {
   const gameData = {
      bensPerclick: bensPerclick,
      bensPerSecond: bensPerSecond,
      currentPoints: currentPoints,
      upgrade1Cost: upgrade1Cost,
      upgrade2Cost: upgrade2Cost,
      upgrade3Cost: upgrade3Cost,
      upgrade4Cost: upgrade4Cost,
   };
   localStorage.setItem("gameData", JSON.stringify(gameData));
   console.log("Game Saved")
};

setInterval(saveGame, 60000);

const loadGame = () => {
   const savedData = localStorage.getItem("gameData");
   if(savedData) {
      const gameData = JSON.parse(savedData);
      bensPerclick = gameData.bensPerclick;
      bensPerSecond = gameData.bensPerSecond;
      currentPoints = gameData.currentPoints;

      BPC.textContent = bensPerclick;
      BPS.textContent = bensPerSecond;
      pointCounter.textContent = parseInt(currentPoints);

      upgrade1Cost = gameData.upgrade1Cost;
      upgrade2Cost = gameData.upgrade2Cost;
      upgrade3Cost = gameData.upgrade3Cost;
      upgrade4Cost = gameData.upgrade4Cost;

      upgrade1CostText.textContent = parseInt(upgrade1Cost);
      upgrade2CostText.textContent = parseInt(upgrade2Cost);
      upgrade3CostText.textContent = parseInt(upgrade3Cost);
      upgrade4CostText.textContent = parseInt(upgrade4Cost);

      setInterval(function() {
         currentPoints += bensPerSecond;
         currentPoints = parseInt(currentPoints);
         pointCounter.textContent = currentPoints;

         if(currentPoints >= 5000 && eughPlayed == false) {
            benIMG.classList.add("hidden");
            benBLACK.classList.remove("hidden");
            eughAudio.play();
            eughPlayed = true;
         }else if (currentPoints < 5000 && eughPlayed == true) {
            benIMG.classList.remove("hidden");
            benBLACK.classList.add("hidden");
            eughAudio.play();
            eughPlayed = false;
         }

      }, 1000);
   }
};


const resetButton = document.getElementById("reset");

const resetGame = () => {
   const confirmReset = window.confirm("Are you sure? This will wipe your progress permanently.");

   if(confirmReset) {
      localStorage.removeItem("gameData");
      alert("Game Reset!");
      window.location.reload();
    }
}

resetButton.addEventListener("click", resetGame);


loadGame();
})
