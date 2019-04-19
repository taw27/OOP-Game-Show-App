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

             setPhraseLiClassList(li, this.phrase[i]);
         }
     }

     setPhraseLiClassList(phraseLi, phraseCharacter){
        if(/^\w+s$/.test(phraseCharacter)){
            phraseLi.classList.add("hide", "letter", phraseCharacter);
        } else if(/^\s+s$/.test(phraseCharacter)){
            phraseLi.classList.add("space");
        }
     }

     set phrase (phraseValue) {
         this.phraseLowerCase = phraseValue.toLowerCase();
     }

     get phrase () {
         return this.phraseLowerCase;
     }
 }