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
             if(this.checkForWin()){

             }
         } else {
            buttonElement.classList.add('wrong');
            this.removeLife();
         }
     }
     gameOver(){
         const overlay = document.querySelector('#overlay');
         overlay.style.display = "flex";

         document.querySelector('#game-over-message').innerText = this.checkForWin() ? "Congratulations!! You have won the game" : "Oops, better luck next time";

         this.removePhraseLi();
     }

     getRandomPhrase(){
         const randomIndex = Math.floor(Math.random() * Math.floor(this.phrases.length - 1));
         return this.phrases[randomIndex];
     }

     removeLife(){
         const hearts = document.querySelectorAll('img.tries');
         const numHearts =  hearts.length;

         this.missed ++;

         if(!(this.missed > numHearts)){
             hearts[numHearts - this.missed].src = `images/lostHeart.png`;
         } else {
             this.gameOver();
         }
     }

     removePhraseLi(){
        Array.from(document.querySelectorAll(`#phrase li`)).map(
            letterLi => {
              letterLi.remove();
            }
          );
        }

     resetHearts() {
        Array.from(document.querySelectorAll(`img.tries`)).map(
             heartImg => {
              heartImg.src = `images/liveHeart.png`;
            }
          );
     }

     startGame(){
         document.querySelector('#overlay').style.display = "none";
         this.activePhrase = this.getRandomPhrase();
         this.activePhrase.addPhraseToDisplay();
    }
 }