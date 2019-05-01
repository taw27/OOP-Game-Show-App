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
        /* 
           sets the event listener for the game start button to create a new game object, start the game and add event listeners
           for the onscreen and physical key buttons to handle the game
         */
        document.querySelector("#btn__reset").addEventListener("click", () => {
            const newGame = new Game(phrases);
            newGame.startGame();
            document.querySelector("#qwerty").addEventListener("click", (event) => {
                if(event.target.tagName === "BUTTON" && newGame.activePhrase){ // checks if activePhrase is not null to skip previous listeners
                    newGame.handleInteraction(event.target);
                }
            });
   
            document.addEventListener("keydown", (event) => {
                if(!event.repeat && newGame.activePhrase){
                    newGame.handlePhysicalKeyboardInteraction(event.key);
                }
            })
        });
    
 });

 

