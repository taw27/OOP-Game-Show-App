"use strict";
/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
    this.checkLetter = this.checkLetter.bind(this);
    this.showMatchedLetter = this.showMatchedLetter.bind(this);
  }

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

  setPhraseLiClassList(phraseLi, phraseCharacter) {
    if (/^\w$/.test(phraseCharacter)) {
      phraseLi.classList.add("hide","letter", phraseCharacter);
    } else if (/^[ ]$/.test(phraseCharacter)) {
      phraseLi.classList.add("space");
    }
  }

  checkLetter(selectedLetter) {
    return this.phrase.includes(selectedLetter);
  }

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
