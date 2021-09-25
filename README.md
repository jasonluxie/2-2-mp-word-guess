# 2-2-mp-word-guess

## Description

Try to guess the word! The words you can guess are apple, banana, and pineapple. 

## Deployed page

https://jasonluxie.github.io/2-2-mp-word-guess/

## Notes

Early concept right now. Game does not continue if you guess the word or if you run out of time. 

## Logic

1. When user clicks button, function to run game runs
1. Timer starts
    1. Set time in s, run a function which subtracts the time every second every 1000ms for interval. 
1. Select word from inside array of words, 
    1. Store word inside another variable
    1. Remove word from array so that it doesn't come up again
    1. Count length of word
    1. Change word string into array
1. Fill <div id=word> with children of the same class equal to the number of letters. 
1. When user inputs keystroke, check all positions in array compared to letter, 
if they match, display that array position letter. 
1. If timer runs out, return function, display alert saying they lost 
    * To continue, if boolean == true then run function again
1. Track wins/losses on screen

## To do
* Need to check for and track wins and losses. 
* Chosen word gets removed from array so that different words can load. 
