///////////////////////////////////////////////////***
// Things this game needs (organized version) 
// ****************************************
// give the cards values
// find the 10 cards in the divs 
// be able to click all of the cards 
// the card needs to flip/show the face/value when you click on it 
// maintain a state where the first card that is clicked will not automatically have it's value disappear 
// maintain a state where that the second card that is clicked will not automatically have its value disappear 
// the cards need to have their values compared 
// are the values duplicates of each other aka do the cards match? 
// if they have the same value then they need to stay flipped up/ have their value continue to remain exposed 
// if the cards do not match then we need to hide both of the cards again 
// i need to make sure that the player cannot click more than 2 cards at one time AND have all three faces up
// the user should not be able to keep clicking on the same card 
// the game needs to know when all ten cards have been matched so that it can end  
//******************************************************** */
///////////////////////////////////////////////////////////*/


//make the array that has the card values for the 10 cards 
const cardValues = ['cat', 'cat', 'octopus', 'octopus', 'hamster', 'hamster', 'dragon', 'dragon', 'rat', 'rat']
console.log(cardValues)

//find the 10 cards 
const cards = document.querySelectorAll('.card')
console.log(cards) //check in the console whether this is identifying all 10 cards correctly
console.log(cardValues.length)
console.log(cards.length)

