"use strict";
/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor(phrases){
         this.missed  = 0;
         this.phrases = phrases;
         this.activePhrase = null;
     }

     checkForWin(){
        return document.querySelectorAll('#phrase li.hide').length === 0
    }

     handleInteraction(buttonElement){
        buttonElement.disabled = 'true';
         if(this.activePhrase.checkLetter(buttonElement.innerText)){
             buttonElement.classList.add('chosen');
             this.activePhrase.showMatchedLetter(buttonElement.innerText);
         } else {
            buttonElement.classList.add('wrong');
            this.removeLife();
         }
     }

     getRandomPhrase(){
         const randomIndex = Math.floor(Math.random() * Math.floor(this.phrases.length - 1));
         return this.phrases[randomIndex];
     }

     removeLife(){
         const hearts = document.querySelectorAll('.tries');
         const numHearts =  hearts.length;

         this.missed ++;

         if(!(this.missed > numHearts)){
             hearts[numHearts - this.missed].src = `images/lostHeart.png`;
         }
     }

     startGame(){
         document.querySelector('#overlay').style.display = "none";
         this.activePhrase = this.getRandomPhrase();
         this.activePhrase.addPhraseToDisplay();
    }
 }