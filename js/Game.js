"use strict";
/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor(phrases){
         this.missed  = 0;
         this.phrases = phrases;
         this.activePhrase = null;

         this.resetForGameOver = this.resetForGameOver.bind(this); // bind this object so that wheen resetForGameOver is called in setTimeOut it behaves as expected
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

     handlePhysicalKeyboardInteraction(key){
            if(/[a-zA-Z]/i.test(key)){
                const correspondingButton = Array.from(document.querySelectorAll(`.key`)).filter(
                keyButton => {
                    return keyButton.innerText.includes(key);
                }
                )[0];

                if(!correspondingButton.disabled){
                    this.handleInteraction(correspondingButton);
                }
            } 
     }

     gameOver(){
         const overlay = document.querySelector('#overlay');
         const checkWin = this.checkForWin();
         overlay.classList.remove('overlay-hide');
         document.querySelector('#game-over-message').innerText =  checkWin ? "Congratulations!! You have won the game" : "Oops, better luck next time";
         overlay.classList.remove("start", "win", "lose");
         checkWin ? overlay.classList.add("win") : overlay.classList.add("lose");

         window.setTimeout(this.resetForGameOver, 800);
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

         if(this.missed < numHearts){
             hearts[numHearts - this.missed].src = `images/lostHeart.png`;
         } else if (this.missed === numHearts){
             hearts[numHearts - this.missed].src = `images/lostHeart.png`
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

     resetForGameOver(){
        this.removePhraseLi();
        this.resetHearts();
        this.resetKeyBoard();
        this.missed = 0;
        this.activePhrase = null;
     }

     startGame(){
        document.querySelector('#overlay').classList.add('overlay-hide');
         this.activePhrase = this.getRandomPhrase();
         this.activePhrase.addPhraseToDisplay();
    }
 }