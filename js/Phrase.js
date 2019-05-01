"use strict";

/* 
  Phrase class to represent a phrase and with methods to interact with the phrase
 */
class Phrase {
/* 
    constructor to initialise a phrase object, sets the phrase property to the phrase argument passed in lower case
    and makes necessary method bindings 
 */
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
    this.checkLetter = this.checkLetter.bind(this);
    this.showMatchedLetter = this.showMatchedLetter.bind(this);
  }

  /* 
    creates li elements for the phase characters with appropriate classes and adds them to the display
   */
  addPhraseToDisplay() {
    const phraseContainer = document.querySelector("#phrase");
    const phraseLength = this.phrase.length;

    for (let i = 0; i < phraseLength; i++) {
      const li = document.createElement("li");

      li.innerText = this.phrase[i];
      phraseContainer.appendChild(li);

      this.setPhraseLiClassList(li, this.phrase[i]);
    }
  }

  /* 
    takes in a phrase character li element, the phrase character. Sets the class to letter and hide if it is a letter character
    and space if it is a space character
   */
  setPhraseLiClassList(phraseLi, phraseCharacter) {
    if (/^[a-zA-Z]$/i.test(phraseCharacter)) {
      phraseLi.classList.add("hide","letter", phraseCharacter);
    } else if (/^[ ]$/.test(phraseCharacter)) {
      phraseLi.classList.add("space");
    }
  }

  /* 
    rerturns true if the phrase includes the selected letter argument passed in and returns false if not
   */
  checkLetter(selectedLetter) {
    return this.phrase.includes(selectedLetter);
  }

  /* 
    if a phrase includes the passed in character argument, then it displays it by adding the show class and removing hide class
   */
  showMatchedLetter(selectedLetter) {
    if (this.checkLetter(selectedLetter)) {
      Array.from(document.querySelectorAll(`.${selectedLetter}`)).map(
        letterLi => {
          letterLi.classList.remove("hide");
          letterLi.classList.add("show");
        }
      );
    }
  }
}
