# OOP Game Show App (Tree house FSJS unit-04)

## Table of Contents

* [Description](#description)
* [Game Mechanics](#game-mechanics)
* [Running Instructions](#running-instructions)
* [Modifications](#modifications)

## Description

A web based game to get familiar with object oriented programming in JavaScript

## Game Mechanics

* The player’s goal is to guess all the letters in a hidden, random phrase. At the beginning, the player only sees the number of letters and words in the phrase, represented by blank boxes on the screen
* The player clicks an onscreen keyboard to guess letters in the phrase
* The letter is disabled on the onscreen keyboard and a player can't select that letter again.
* If the selected letter is in the phrase at least once, the letter and its position in the phrase is highlighted on screen. All instances of the letter are made visible (so if there are 3 A's, all of the A's in the phrase appear at once)
* If the selected letter is not in the phrase, one of the player's hearts in the scoreboard is changed from a "live" heart to a "lost" heart
* The player keeps choosing letters until they reveal all the letters in the phrase, or they make five incorrect guesses.

## Running Instructions

1. Visit <https://taw27.github.io/fsjs-unit-04/>
2. Click Start Game

## Modifications

The following addition design modifications has been made to the starter design provided using CSS and JavaScript

1. Fade in CSS transition for revealing matched letter
2. Green color change for correct onscreen keys
3. Red color change for incorrect onscreen keys
4. Slide down and slide up transition for overlay modal
