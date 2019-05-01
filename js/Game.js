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
        buttonElement.disabled = true;
         if(this.activePhrase.checkLetter(buttonElement.innerText)){
             buttonElement.classList.add('chosen');
             this.activePhrase.showMatchedLetter(buttonElement.innerText);
             if(this.checkForWin()){
                 this.gameOver();
             }
         } else {
            buttonElement.classList.add('wrong');
            this.removeLife();
         }
     }
     gameOver(){
         const overlay = document.querySelector('#overlay');
         const checkWin = this.checkForWin();
         overlay.style.display = "flex";

         document.querySelector('#game-over-message').innerText =  checkWin ? "Congratulations!! You have won the game" : "Oops, better luck next time";
         overlay.classList.remove("start", "win", "lose");
         checkWin ? overlay.classList.add("win") : overlay.classList.add("lose");

         this.removePhraseLi();
         this.resetHearts();
         this.resetKeyBoard();
         this.missed = 0;
         this.activePhrase = null;
     }

     getRandomPhrase(){
         const randomIndex = Math.floor(Math.random() * Math.floor(this.phrases.length - 1));
         return this.phrases[randomIndex];
     }

     resetKeyBoard(){
        Array.from(document.querySelectorAll(`.keyrow button`)).map(
            button => {
              button.classList.remove("wrong", "chosen");
              button.disabled = false;
            }
          );
     }

     removeLife(){
         const hearts = document.querySelectorAll('li.tries img');
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
        Array.from(document.querySelectorAll(`li.tries img`)).map(
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