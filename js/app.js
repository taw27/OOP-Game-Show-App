"use strict";

/* 
    an array of phrase object to be used by the game
 */
 let phrases = [
     new Phrase("run around"),
     new Phrase("take down"),
     new Phrase("home field advantage"),
     new Phrase("have other fish to fry"),
     new Phrase("pay off")
 ];

 /* 
    waits till the dom content has been loaded
  */
 document.addEventListener("DOMContentLoaded", () => {
    let gameStarted = false;
// iinitialises the event listeners if the game has not been started yet
    if(!gameStarted){
        /* 
           sets the event listener for the game start button to create a new game object, start the game and add event listeners
           for the onscreen and physical key buttons to handle the game interactions
         */
        gameStarted = true; // sets the gamestarted to true to prevent unecessary event listener assignment once the game started
        document.querySelector("#btn__reset").addEventListener("click", () => {
            const newGame = new Game(phrases);
            newGame.startGame();
            document.querySelector("#qwerty").addEventListener("click", (event) => {
                if(event.target.tagName === "BUTTON"){
                    newGame.handleInteraction(event.target);
                }
            });
   
            document.addEventListener("keydown", (event) => {
                if(!event.repeat && newGame.activePhrase){
                    newGame.handlePhysicalKeyboardInteraction(event.key);
                }
            })
        });
    }
 });

