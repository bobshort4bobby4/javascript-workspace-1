/*==variables*/

let diffToggle = "easy";
let firstItemClicked = true;
let card1;
let card2;
let numberOfMatches = 0;

// music variables
let musicToggle = false;
let gameMusic = new Audio("./assets/media/gametune.mp3");
gameMusic.loop = true;

// sound effects variables
let babyLaugh = new Audio("./assets/media/baby-laugh.mp3");
let siren = new Audio("./assets/media/polis-siren.wav");
let victorySound = new Audio("./assets/media/victory.wav");
let matchsound = new Audio("./assets/media/shimmer.flac");
let unmatchedSound = new Audio("./assets/media/lose-sound.wav");
let soundfxToggle = false;

// timer variables
let clock;
let currentSeconds  = 0;
let currentMinutes = 0;
let bestSeconds;
let bestMinutes;

let cards = document.querySelectorAll('.card');
console.log(cards);
cards.forEach(card => card.style.pointerEvents="none"); // disable all cards untill start


cards.forEach(card => card.addEventListener('click', turnCard)); // call turnCard function when card clicked

/*eventlistener for difficulty option*/
let diffOption = window.document.getElementById("easy-hard");
diffOption.addEventListener("click", toggleDifficulty);

/*eventlistener for soundfx option*/
let soundfxOption = window.document.getElementById("soundfx-option");
soundfxOption.addEventListener("click", toggleSoundfx);

/*eventlistener for music option*/
let musicOption = window.document.getElementById("music-option");
musicOption.addEventListener("click", toggleMusic);

/*eventlistenr for modal close ---*/
let closex = window.document.querySelector(".close");
let mod = document.querySelector(".modal-wrapper");
closex.addEventListener("click", hideModal); // eventlistener for modal close on x
mod.addEventListener("click",hideModal);//event listener for modal close on entire screen



/*event listener for start button*/
let startButton = document.getElementById("start");
console.log(startButton);
startButton.classList.add("startthrop"); //begin the start button animation  
startButton.addEventListener("click", startGame);

/*controls to hide/show instruction page*/
let hideOption = window.document.getElementById("inst-btn"); // hide instruction
hideOption.addEventListener("click", slideInstruction);

let menu_btn = document.getElementById('instructions'); // show Instructions
menu_btn.addEventListener("click", slideInstruction);



/**
 * function to start and run game
 */
function startGame() {
    console.log("in startgame function)");
    startButton.style.animationPlayState = "paused"; // stops the start button animation while playing 
    if(musicToggle) {
        gameMusic.load();
        gameMusic.play();
        gameMusic.volume = 0.2;
    }
    window.clearInterval(clock);//reset timer 
    firstItemClicked = true;// reset in case user did not complete last game cycle
    cards.forEach(card => card.classList.remove("turn"));//remove turn class from all cards
   

    if(diffToggle === "easy") {//set up for easy option
        console.log("in easy if statement");
        cards = document.querySelectorAll('.card');
        let numberOfCardDivs = cards.length;
        if(numberOfCardDivs === 18) {//if previous game was hard remove extra cards
            for(let i = 0; i < 6; i++){
                let parent = document.getElementById("box-container");
                let child = parent.lastElementChild;
                parent.removeChild(child);
            }
        cards = document.querySelectorAll('.card');//NB this line and following moved from for loop immediately above to here after testing process, 
        cards.forEach(card => card.classList.remove("resize-cards"));// seems to work fine and avoids code being run multiple times unnecessarily nb comment for testing remove if no prob
        }

        let panelarray = [0,1,2,3,4,5,6,7,8,9,10,11];
        scrambledArray = scramble(panelarray);
        cardIcons = [
            '<i data-type="ambulance" class="fas fa-ambulance icon"></i>',
            '<i data-type="ambulance" class="fas fa-ambulance icon"></i>',
            '<i data-type="glass" class="fas fa-glass-martini-alt icon"></i>',
            '<i data-type="glass" class="fas fa-glass-martini-alt icon"></i>',
            '<i data-type="bomb" class="fas fa-bomb icon"></i>',
            '<i data-type="bomb" class="fas fa-bomb icon"></i>',
            '<i data-type="ship" class="fas fa-ship icon"></i>',
            '<i data-type="ship" class="fas fa-ship icon"></i>',
            '<i data-type="apple" class="fas fa-apple-alt icon"></i>',
            '<i data-type="apple" class="fas fa-apple-alt icon"></i>',
            '<i data-type="knight" class="fas fa-chess-knight icon"></i>',
            '<i data-type="knight" class="fas fa-chess-knight icon"></i>'
        ];
    }
   
    if(diffToggle === "hard"){//set up for hard option
        console.log("in hard if statement");
        panelarray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
        scrambledArray = scramble(panelarray);
        cardIcons = [
            '<i data-type="ambulance" class="fas fa-ambulance icon"></i>',
            '<i data-type="ambulance" class="fas fa-ambulance icon"></i>',
            '<i data-type="glass" class="fas fa-glass-martini-alt icon"></i>',
            '<i data-type="glass" class="fas fa-glass-martini-alt icon"></i>',
            '<i data-type="bomb" class="fas fa-bomb icon"></i>',
            '<i data-type="bomb" class="fas fa-bomb icon"></i>',
            '<i data-type="ship" class="fas fa-ship icon"></i>',
            '<i data-type="ship" class="fas fa-ship icon"></i>',
            '<i data-type="apple" class="fas fa-apple-alt icon"></i>',
            '<i data-type="apple" class="fas fa-apple-alt icon"></i>',
            '<i data-type="knight" class="fas fa-chess-knight icon"></i>',
            '<i data-type="knight" class="fas fa-chess-knight icon"></i>',
            '<i data-type="anchor" class="fas fa-anchor icon"></i>',
            '<i data-type="anchor" class="fas fa-anchor icon "></i>',
            '<i data-type="arch" class="fas fa-archway icon "></i>',
            '<i data-type="arch" class="fas fa-archway icon"></i>',
            '<i data-type="baby" class="fas fa-baby icon"></i>',
            '<i data-type="baby" class="fas fa-baby icon"></i>'
        ];
        cards = document.querySelectorAll('.card');
        let numberOfCardDivs = cards.length;
        if(numberOfCardDivs === 12) { //add extra cards if needed
            targetBox= document.getElementById("box-container");
            div1 = document.querySelector(".card"); 
            for(let i = 0; i < 6; i++){
                targetBox.appendChild(div1.cloneNode(true) );
        }
    }
         /*===get array of cards-------------*/
         cards = document.querySelectorAll('.card');//change size of cards to reflect greater number 
         cards.forEach(card => card.classList.add("resize-cards"));

        /* note to self use event delegation for this  remove before finish*/
        cards.forEach(card => card.addEventListener('click', turnCard));
        }

        currentSeconds = 0;
        currentMinutes = 0;
    /*call the function to populate panels face-side passing in the icons and the random placing*/
    populateBehindCards(cardIcons, scrambledArray);
    //--make cards clickable
    cards.forEach(card=>card.style.pointerEvents = "auto");
    clock = window.setInterval(timer,1000); // start clock
    }   
/*====end of startgame function===*/


/**
 * a function to turn cards in pairs
 * @returns 
 */
 function turnCard(){

    if(firstItemClicked) {
         //code for specific icon sounds
        let ico1 = this.getElementsByClassName("icon");
        if(soundfxToggle) { // play sound effect on certain icons
            if(ico1[0].getAttribute("data-type") === "baby") {
                babyLaugh.play();
            } else if(ico1[0].getAttribute("data-type") === "ambulance") {
            siren.volume = 0.2;//reduce volume on siren sound
            siren.play();
            } //end of sound code block
        }

        this.classList.add("turn");
        this.style.pointerEvents = "none"; //stops user clicking on already turned card before second card choice
        card1 = this;
        firstItemClicked = false;    
        return;
    }
    firstItemClicked = true;
    this.classList.add("turn");
     //code for specific icon sounds
     let ico1 = this.getElementsByClassName("icon");
    if(soundfxToggle) {
        if(ico1[0].getAttribute("data-type") === "baby") {
        babyLaugh.play();
        } else if(ico1[0].getAttribute("data-type") === "ambulance") {
            siren.volume = 0.2;//reduce volume on siren sound
            siren.play();
        } //end of sound code block
    }
    card2 = this;
   
    card1.style.pointerEvents = "auto";//resets pointerevents for 1st choice card
    compare(card1,card2);//call compare function
}


/**
 * a function to compare the two cards takes in two cards and calls victory functon if all matched
 */
 function compare(card1, card2){
  
    let ico1 = card1.getElementsByClassName("icon");
    let ico2 = card2.getElementsByClassName("icon");
    if(ico1[0].getAttribute("data-type") === ico2[0].getAttribute("data-type"))     {
        if(soundfxToggle){matchsound.play();}
        card1.style.pointerEvents = "none";
        card2.style.pointerEvents = "none";
        card1 = null;
        card2 = null;
        firstItemClicked = true;
        numberOfMatches++;
        if(numberOfMatches === 6 && diffToggle === "easy") {
            gameMusic.pause();
            victory(); 
            stopClock();
        }
        if(numberOfMatches === 9 && diffToggle === "hard"){
            gameMusic.pause();
            victory(); 
            stopClock();
        }
       
        return;
        } else {
        // do the un-matched stuff
            if(soundfxToggle){unmatchedSound.play();}    
            setTimeout(() => {//display unmatched cards for 1 second before re-turning
            card1.classList.remove("turn");
            card2.classList.remove("turn");
            card1 = null;// re-set cards
            card2 = null;
            
        return;
          }, 1000);
        firstItemClicked = true;
        return;
    }
}

/**
     * A function that puts a random icon behind each panel
     * takes in list of icons and a ramdonly sorted list and places an icon behind the cards 
     * using the random list to determine  position
     * @param {*} cardIcons 
     * @param {*} scrambledArray 
     */
 function populateBehindCards(cardIcons, scrambledArray) {
    let behinds = window.document.getElementsByClassName("face-side"); 
    
    for (let i =0 ; i < scrambledArray.length; i++){
        behinds[i].innerHTML = cardIcons[scrambledArray[i]];
    }
 }


/**
 * function used to scramble an array. Code taken from  Fisher–Yates shuffle Algorithm page on Wikipedia
 * takes in an array and returns a scrambled version of the original array
 * @param {*} array 
 * @returns 
 */
 function scramble(array){
    var i = array.length,
    j = 0,
    temp;

while (i--) {

    j = Math.floor(Math.random() * (i+1));

    // swap  elements 
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
return array;
}


/***
 * a function to handle the instruction page
 */
 function slideInstruction(){
    let page = window.document.getElementById("instruction-page");
     page.classList.toggle("show-instructions");
    
}

/**
 * A function to declare victory
 */
 function victory() {
    showModal();
    if(soundfxToggle){victorySound.play();}
    setTimeout(()=> {
    cards.forEach(card => card.style.pointerEvents="none");
    cards.forEach(card => card.classList.remove("turn"));
    },1000);
    stopClock();
    numberOfMatches = 0;
    
}

/**
 * A function to  display victory screen
 */
 function showModal() {
    document.getElementById("modal-time-minutes").innerText = currentMinutes;
    document.getElementById("modal-time-seconds").innerText = currentSeconds;
    document.getElementById("modal-difficilty").innerText = diffToggle.toUpperCase();
    mod = document.querySelector(".modal-wrapper");
    mod.style.display = "block";
}

/**
 * a function to hide victory screen
 */
 function hideModal() {
    mod.style.display = "none";
    startButton.style.animationPlayState = "running"; // starts the start button animation while not playing 
}


/**
 * A function to toggle music
 */
 function toggleMusic() {
    if(musicToggle === true){
        musicToggle  = false;
        musicOption.innerHTML = '<i class="fas fa-volume-mute"></i>'; // sets the icon on the options page
       gameMusic.pause();
    }else{
        musicToggle = true;
        gameMusic.load();
        gameMusic.play();
        gameMusic.volume = 0.2;
        musicOption.innerHTML = '<i class="fas fa-volume-up"></i>'; // sets the icon on the options page
    }
}

/**
 * A function to toggle the soundfx variable
 */
 function toggleSoundfx() {
    if(soundfxToggle === true) {
        soundfxToggle = false;
        soundfxOption.innerHTML = '<i class="fas fa-volume-mute"></i>'; // sets the icon on the options page
    } else {
        soundfxToggle = true;
        soundfxOption.innerHTML = '<i class="fas fa-volume-up"></i>'; // sets the icon on the options page
    }
}

/**
 * A function to change difficulty level
 */
 function toggleDifficulty() {
    if(diffToggle === "easy"){
        diffToggle  = "hard";
        diffOption.innerText = "Hard";
    }else{
        diffToggle = "easy";
        diffOption.innerText = "Easy";
    }
}

/**
 *  A function to update the timer.
 */
 function timer() {
    currentSeconds++;

    if( currentSeconds/ 60 === 1){//if seconds over 60 update minute
        currentMinutes++;
        currentSeconds = 0;
    }

    if(currentSeconds < 10){//if seconds less than ten add a preceeding 0
        currentSeconds = "0" + currentSeconds.toString();
    }
    document.getElementById("currTimeSec").innerText = currentSeconds;
    document.getElementById("currTimeMin").innerText = currentMinutes;
}

/**
 * A function to stop clock
 */
 function stopClock() {
    window.clearInterval(clock);
    updateBestScore(currentSeconds, currentMinutes);
 }

 /**
 * a function to update the best score
 */
function updateBestScore(currentSeconds,currentMinutes) {
    bestSeconds = document.getElementById("bestTimeSec");
    bestMinutes = document.getElementById("bestTimeMin");
    let bestSec = (Number(bestSeconds.textContent)) + (Number(bestMinutes.textContent) * 60);//convert times to seonds for comparasion
    let scoreSec = currentSeconds + (currentMinutes * 60);
    if(bestSec === 0 || scoreSec < bestSec) {//change  Best Score if current one better or if first play-through
        bestMinutes.textContent = currentMinutes;
        bestSeconds.textContent = currentSeconds;
    }     
}
