/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor(){
         
     }

     addPhraseToDisplay() {
         const phraseContainer = document.querySelector("#phrase");
         const phraseLength = this.phrase.length;

         for(let i = 0; i < phraseLength; i++){
             const li =  document.createElement("li");
             li.innerText = this.phrase[i];

             phraseContainer.appendChild(li);
         }
     }

     set phrase (phraseValue) {
         this.phraseLowerCase = phraseValue.toLowerCase();
     }

     get phrase () {
         return this.phraseLowerCase;
     }
 }