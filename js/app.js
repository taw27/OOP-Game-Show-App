"use strict";
/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
// from https://www.phrases.com/
 let phrases = [
     new Phrase("run around"),
     new Phrase("take down"),
     new Phrase("home field advantage"),
     new Phrase("have other fish to fry"),
     new Phrase("pay off")
 ];

 document.addEventListener("DOMContentLoaded", () => {
     document.querySelector("#btn__reset").addEventListener("click", () => {
         const newGame = new Game(phrases);
         newGame.startGame();
     });
 });

