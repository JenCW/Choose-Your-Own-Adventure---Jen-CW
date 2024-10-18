console.log("hello");  

// Import the prompt-sync module to allow user to give input from the terminal.
const prompt = require('prompt-sync')();

// Game Name
console.log("Welcome to 'A Parisian Romance'!");

// Introduce the setting and the concept of meeting the mysterious stranger.
console.log("\nYou are wandering through the charming streets of Paris. Along the way, you keep crossing paths with a mysterious stranger. The attraction is undeniable, but somehow, the two of you never get a chance to speak. Fate gives you many opportunities—but will you ever finally meet?");

//  The Cafe Scene - First Choice
console.log("\nYou are thirsty, so you decide to go into your favorite little outdoor cafe and low and behold, that stranger is sitting at a little table alone.  This could be the time you two finally speak.  So you walk up to the counter to order but the weathers been strange lately so you have a hard time deciding what to drink??");
const choice = prompt('Do you choose:\n1. Coffee?\n2. Tea?\n3. Iced Beverage?\n> ');

// Wait for the user's choice then produce the outcome.
if (choice === '1' || choice.toLowerCase() === 'coffee') {
    console.log("\nCoffee is a great choice! But unfortunately while you were waiting for it to brew, the stranger finished and left.  Aother missed chance...");
} else if (choice === '2' || choice.toLowerCase() === 'tea'){ 
    console.log("\nTea is perfect for this weather! Sadly they have run out of sugar packets, and by the time the barista brought them, your mystery man has already left.  You wonder if you'll ever see him again?");
  
} else if (choice === '3' || choice.toLowerCase() === 'iced beverage'){
    console.log("\nYou get your beverage in no time and as you walk towards his table his phone rings and he answers but not before you two lock gazes and he gives you a little wink and a smile.  You walk past, feeling a little disappointed, but hope fills your heart that you’ll see him again.");
}
// The Bookstore Scene - Second Choice

console.log("\nLater, you are at the bookstore and unexplicably, you spot him again.  What luck! Thumbing through a collection of love poems you see him walking towards you and you are suddenly filled with fear. A book says a lot about a person and what if this book says i'm desperate?  Or a hopeless fool for love? Oh dear.. In a panic you look around to see which book you should grab.");
const choice2 = prompt('Do you choose:\n1. A Magazine filled with current hip happenings? \n2. A thriller, to show you have a tough side? \n3. or Keep the Love Poems book in hand?\n> ')

//Wait for the user's second choice and print the outcome.
 if (choice2 === '1') {
    console.log("He looked at the magazine and quickly up at the name of the section of the bookstore then with a confused look on his face he walks by without a glance.  You heart is broken and you call it quits and go home for the night");
} else if (choice2 === '2') {
     console.log("\n He walks straight up to you and casually says 'that's a terrible thriller book.  I read it last week and wished i hadn't. Then picks up the love poetry book and heads to the checkout stand.");
} else if (choice === '3') {
     console.log("\n He approaches you and asks about your book.  You tell him you haven't read it yet but would be happy to share any insights after.  He gives you his name and number and you fly home on a bed clouds.");
    return; //ends the story if 3 is selected
}

// The Train station scene - 3rd choice.
let choice3 = prompt("\nThe next day, you cannot believe your eyes when you are at the train station with friends.  You see the stranger on the opposite track.  He seems to be struggling with directions as he looks at a map on display.  You think - this is IT!  I have to go talk to him now but what's the fastest way to get to him, as the trains are approaching quickly. Do you:\n1. Jump onto the tracks and dart across to the other side asking him if he is lost?\n2. Quickly run to take the long way around worried you might be a frazzled mess when you finally make it to him?\n3. Start Yelling at him loudly at him across the tracks trying to tell him your name and phone number?\n> ");

//Wait for users third choice and display  outcome.
if (choice3 === '1') {
    console.log("\nYou rush across the tracks and he is looking at the comotion you have created by a gathering crowd, but before you can say anything meaningful, he reaches out his hand to help you up and you both board his train hand in hand as you stare into each others eyes without saying words.");
    return;
} else if (choice3 === '2'){
    console.log("\nYou get to the other track in a desheveled and messy state just in time to see the train pull away from the station while people look you up and down in confusion.");
} else if(choice3 ==='3') {
    console.log("he stares and starts shouting something back but you cant understand the words so you are now both yelling at each other without comprehension until the trains pull in front of your view and just like that, whisks him away.")
}