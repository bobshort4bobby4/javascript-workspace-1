/*==variables*/

let diffToggle = "easy";
let firstItemClicked = true;
let card1;
let card2;




let cards = document.querySelectorAll('.card');//disable all cards untill start
let numberOfMatches = 0;

cards.forEach(card => card.style.pointerEvents="none");

cards.forEach(card => card.addEventListener('click', turnCard));//call turnCard function when card clicked

/*event listener for start button*/
let startButton = document.getElementById("start");
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
    startButton.style.animationPlayState = "paused"; // stops the start button animation while playing 
    firstItemClicked = true;// reset in case user did not complete last game cycle
    cards.forEach(card => card.classList.remove("turn"));//remove turn class from all cards
   
    }
   
    let strtButton = document.getElementById("start");//animate the start button
    strtButton.classList.remove("startthrop");

    if(diffToggle === "easy") {//set up for easy option
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

    
    /*call the function to populate panels face-side passing in the icons and the random placing*/
    populateBehindCards(cardIcons, scrambledArray);
    //--make cards clickable
    cards.forEach(card=>card.style.pointerEvents = "auto");
    
    
/*====end of startgame function===*/


/**
 * a function to turn cards in pairs
 * @returns 
 */
 function turnCard(){

    if(firstItemClicked) {
      
        this.classList.add("turn");
        this.style.pointerEvents = "none"; //stops user clicking on already turned card before second card choice
        card1 = this;
        firstItemClicked = false;    
        return;
    }
    firstItemClicked = true;
    this.classList.add("turn");
   
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
     
        card1.style.pointerEvents = "none";
        card2.style.pointerEvents = "none";
        card1 = null;
        card2 = null;
        firstItemClicked = true;
        numberOfMatches++;
        if(numberOfMatches === 6 && diffToggle === "easy") {
         
            /*victory(); tbd*/
        }
        if(numberOfMatches === 9 && diffToggle === "hard"){
          
            /*victory(); tbd*/
        }
       
        return;
        } else {
        // do the un-matched stuff
      
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