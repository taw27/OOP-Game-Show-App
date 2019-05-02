"use strict";
  /*
    Game class that handles all the logic of the game
 */
  class Game {
    /* 
        Constructor initialises a game object setting missed propert to 0, the phrases property to array of phrases
        passed in as argument and the activePhrase property to null. Binds this to methods which require it
      */
    constructor() {
      this.missed = 0;
      this.phrases = [
        // an array of phrase object to be used by the game
        new Phrase("run around"),
        new Phrase("take down"),
        new Phrase("home field advantage"),
        new Phrase("have other fish to fry"),
        new Phrase("pay off")
      ];
      this.activePhrase = null;

      this.resetForGameOver = this.resetForGameOver.bind(this); // bind this object so that wheen resetForGameOver is called in setTimeOut it behaves as expected
    }

    /* 
        returns true if all the letters have been revealed and false if not by selecting by the .hide class
      */
    checkForWin() {
      return document.querySelectorAll("#phrase li.hide").length === 0;
    }

    /* 
        takes in a qwerty button element of the screen. Disables the button element, if the button matches a letter
        in the active phrase, reveals the letter and adds chosen class the button. If the game is won the gsmeOver method.
        If the button does not match any letter in  the phrase, then adds the wrong class to the button and calls the removeLife
        method
     */
    handleInteraction(buttonElement) {
      buttonElement.disabled = true;
      if (this.activePhrase.checkLetter(buttonElement.innerText)) {
        buttonElement.classList.add("chosen");
        this.activePhrase.showMatchedLetter(buttonElement.innerText);
        if (this.checkForWin()) {
          this.gameOver();
        }
      } else {
        buttonElement.classList.add("wrong");
        this.removeLife();
      }
    }

    /* 
        Takes in the key character pressed, if its a letter in the english alphabet then retreives the corresponding onscreen button element
        and calls the the handleInteraction method with the button element passed in if it is not disabled
      */
    handlePhysicalKeyboardInteraction(key) {
      if (/[a-zA-Z]/i.test(key)) {
        const correspondingButton = Array.from(
          document.querySelectorAll(`.key`)
        ).filter(keyButton => {
          return keyButton.innerText.includes(key);
        })[0]; // gets the corresponding onscreen button element

        if (!correspondingButton.disabled) {
          this.handleInteraction(correspondingButton);
        }
      }
    }

    /* 
        displays the overlay with a win message if game won or a lose message with game loss.
        Resets the game at the end by calling the resetForGameOver message
      */
    gameOver() {
      const overlay = document.querySelector("#overlay");
      const checkWin = this.checkForWin();
      overlay.classList.remove("overlay-hide");
      document.querySelector("#game-over-message").innerText = checkWin
        ? "Congratulations!! You have won the game"
        : "Oops, better luck next time";
      overlay.classList.remove("start", "win", "lose");
      checkWin ? overlay.classList.add("win") : overlay.classList.add("lose");

      document.querySelector("#btn__reset").innerText = `Start New Game`;
      document.querySelector("#btn__reset").disabled = false;

      window.setTimeout(this.resetForGameOver, 800); // so that the game is reset after the overlay message transition finishes
    }

    /* 
     returns a random phrase object from the phrases array
     */
    getRandomPhrase() {
      const randomIndex = Math.floor(
        Math.random() * Math.floor(this.phrases.length - 1)
      );
      return this.phrases[randomIndex];
    }

    /* 
     Resets the keyboard by removing any wrong and/or chosen css classes from the onscreen qwerty buttons and enables all off them  
   */

    resetKeyBoard() {
      Array.from(document.querySelectorAll(`.keyrow button`)).map(button => {
        button.classList.remove("wrong", "chosen");
        button.disabled = false;
      });
    }

    /* 
      Replaces a live heart image with lose heart image to simulate lost life. Calls the gameOver 
      method if all lives run out
      */
    removeLife() {
      const hearts = document.querySelectorAll("li.tries img");
      const numHearts = hearts.length;

      this.missed++;

      if (this.missed < numHearts) {
        hearts[numHearts - this.missed].src = `images/lostHeart.png`;
      } else if (this.missed === numHearts) {
        hearts[numHearts - this.missed].src = `images/lostHeart.png`;
        this.gameOver();
      }
    }

    /* 
        removes all the li descandent of the #phrase container
      */
    removePhraseLi() {
      Array.from(document.querySelectorAll(`#phrase li`)).map(letterLi => {
        letterLi.remove();
      });
    }

    /*
        replaces all heart image src to live heart image to reset the lives
    */
    resetHearts() {
      Array.from(document.querySelectorAll(`li.tries img`)).map(heartImg => {
        heartImg.src = `images/liveHeart.png`;
      });
    }

    /* 
        calls the appropriate methods to reset the game, with the phrase removed, hearts back to live hearts,
        on screen keyboard enabled and normal, missed property to 0 and activePhrase property to null
      */
    resetForGameOver() {
      this.removePhraseLi();
      this.resetHearts();
      this.resetKeyBoard();
      this.missed = 0;
      this.activePhrase = null;
    }

    /* 
        Starts the game by hiding the overlay, setting the active phrase object and adding it to the display
      */
    startGame() {
      document.querySelector("#overlay").classList.add("overlay-hide");
      document.querySelector("#btn__reset").disabled = true;
      this.activePhrase = this.getRandomPhrase();
      this.activePhrase.addPhraseToDisplay();
    }
  };
