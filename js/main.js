// /** 
//  * RULES OF THE GAME
//  *  there are 10 cards 
//  * 2 players 
//  * users select two cards and check if they are a match
//  *if the two cards match, they stay flipped 
//  if the two cards do not match, then they are flipped back over 
 

//  when is the game done? when all the cards are matched and flipped over
//  *
//  */

//  //10 elements/items in an array, most likely. There should be two of each element. 
// //these are the items that the players are going to be matching


// //  let cardValues = ['🐈', '🐈', '🐙', '🐙', '🐹', '🐹', '🐲', '🐲', '🐺', '🐺']

//  //the player needs to be able to click on the cards

//  //the player needs to be able to match - this means that on each click, the items should be presented to the user. 

//  //after being clicked, the items should be put into a two item array if they match 

//  //but what happens if they do not match? The array vanishes? How would you track it especially if they are emojis

//  //const box = document.querySelector('.box')
//  //box.classlist.add('active)
//     //box.classList.remove('hidden')
//     //box.classList.toggle('visible')

// //I need a bunch of document.querySelectors 

// //**Things to keep track of in my game 
// // whats going on with the cardValues array
// // which 2 current cards are currently flipped 
// // which cards are a match (don't toggle)
// // which player is selecting the cards (avoid chaos)
// // make sure that players can only pick 2 cards at a time
// //  */

// //START LOGIC HERE 

// //this is the array that holds the values for the cards
// let cardValues = ['Cat', 'Cat', 'Octopus', 'Octopus', 'Hamster', 'Hamster', 'Dragon', 'Dragon', 'Rat', 'Rat']
// //the values have to go somewhere when they are clicked by the player. It is an empty array
// let clickedCards = []

// //previously suggested: don't let the user click on a card while the game is in progress or when it is still running (Michael)
// let canPlayerClickAnything = false;

// //there are two players in this game, a human and a computer. so how do i know which one is playing the game at the moment. Are they both reaching for and clicking the board at the same time?
// //no, so choose who is able to go 
// //how to do that? it's just a string, don't overthink it
// let currentPlayer = 'airbreather' //how do you still live airbreatherrrr haha

// //created because we need to keep score 
// let cardMatches = 0

// //connects to the index.html

// const cardGame = document.querySelector('#theGameItself')


// const startTheGame = () => {
//     //lopp over the emojis in the array; appleEmoji is the element iterated over from cardValues
//     cardValues.forEach((appleEmoji) => {
//         const newCardDiv = document.createElement('div')

//         //this is what links to the css for the shape 
//         newCardDiv.classList.add('card')

//         newCardDiv.dataset.appleEmojiValue = cardText

//         //What displays on the screen as the face down side of the card
//         newCardDiv.innerText = 'Face Down'

//         newCardDiv.addEventListener('click', playerClicksOnCard)

//         cardGame.appendChild(newCardDiv)
//     })
// }

// //startTheGame()

// //what happens when  a player clicks on a card? 

// const playerClicksOnCard = (clicked) => { 

//     //clicked.target; targets where the user clicked
//     const clickedCard = clicked.target

//     if(
//         canPlayerClickAnything === true || clickedCard.classList.contains('matched') || clickedCard.classList.contains('flipped')
//     ){
//         return
//         }

//         //Okay what happens when the card is 'flipped'? utilize classes 
//         clickedCard.classList.add('flipped')

//         clickedCard.innerText = clickedCard.dataset.appleEmojiValue

//         clickedCards.push(clickedCard)

//          //Okay what happens when the card is 'flipped'?  And what happens if they match or not? 

//         //checks if two cards have been flipped over by a player; stops them from clicking on more cards 
//         if (clickedCards.length === 2){
//             canPlayerClickAnything = true
//             //what comes next? now i need the emojis from the cards; it' an array
//             const firstCardAppleEmoji = clickedCards[0].dataset.appleEmojiValue
//             const secondCardAppleEmoji = clickedCards[1].dataset.appleEmojiValue

//             if(firstCardAppleEmoji === secondCardAppleEmoji) {
//         //if the player matched the cards 
//             ifThePlayerMatchedTheCards = ();
//             }else {
//                 //if the player does not match the cards 
//                 ifThePlayerDidNotMatchTheCards()
//             }
//         }
//     }

//     //classes are what we are going to track
//     const ifThePlayerMatchedTheCards = () => {
//         clickedCards.forEach(card => {
//              card.classList.remove('flipped')
//         card.classList.add('matched')
//     })

//     //the score needs to update 
//     cardMatches++
//     //do it again for the next players turn 
//     clickedCards = []
//     canPlayerClickAnything = false

//     if (cardMatches === (cardValues.length /2)) {
//         setTimeout(() => {
//             console.log("The game has finished. All of the cards are matched.")
//         }, 100);
//     }  
    

//     const ifThePlayerDidNotMatchTheCards = () => {
//         //okay but how can we check if the Player matched all of the cards? setTimeOut() on the MDN & youtube
//     setTimeOut(() => {

//         //because it is an array you have to use forEach to iterate through it and then make them reset again
//         clickedCards.forEach(card => {
//             card.classList.remove('flipped')
//             card.innerText = '😵‍💫'
//         })
//         //flips cards again back to their base 
//         clickedCards = []
//         canPlayerClickAnything = false
//     }, 1000)
// }
//     }
    

//    startTheGame()


    //*Commented out previous code, too complex and was not working. */







