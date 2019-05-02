"use strict";
/* 
    waits till the dom content has been loaded
  */
document.addEventListener("DOMContentLoaded", () => {
  /* 
           sets the event listener for the game start button to create a new game object, start the game and add event listeners
           for the onscreen and physical key buttons to handle the game
         */
  document.querySelector("#btn__reset").addEventListener("click", () => {
    const newGame = new Game();
    newGame.startGame();
    document.querySelector("#qwerty").addEventListener("click", event => {
      if (event.target.tagName === "BUTTON" && newGame.activePhrase) {
        // checks if activePhrase is not null to skip previous listeners
        newGame.handleInteraction(event.target);
      }
    });

    document.addEventListener("keydown", event => {
      if (!event.repeat && newGame.activePhrase) {
        newGame.handlePhysicalKeyboardInteraction(event.key);
      }
    });
  });
});
