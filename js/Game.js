/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor(phrases){
         this.missed  = 0;
         this.phrases = phrases;
         this.activePhrase = null;
     }
     handleInteraction(){
         
     }

     getRandomPhrase(){
         const randomIndex = Math.floor(Math.random() * Math.floor(this.activePhrase.length - 1));
         return this.activePhrase[randomIndex];
     }

     startGame(){
         document.querySelector('#overlay').style.display = none;
         this.activePhrase = getRandomPhrase();
         this.activePhrase.addPhraseToDisplay();
    }
 }