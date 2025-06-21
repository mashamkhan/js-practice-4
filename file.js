for (let i = 0; i < 10; i++) {
    // Generate random integer between 1 and 100
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Random number ${i + 1}: ${randomNumber}`);
}


for (let i = 0; i < 20; i++) {
    // Generate random number between 1 and 6
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    console.log(`Roll ${i + 1}: ${diceRoll}`);
}


for (let i = 0; i < 10; i++) {
    // There are 25 even numbers between 2 and 50 inclusive (2, 4, 6, ..., 50)
    // So generate a random integer from 1 to 25 and multiply by 2
    let evenNumber = Math.floor(Math.random() * 25 + 1) * 2;
    console.log(`Even number ${i + 1}: ${evenNumber}`);
}



// Computer randomly picks a number between 1 and 10
let secretNumber = Math.floor(Math.random() * 10) + 1;
console.log("Secret Number (chosen by computer):", secretNumber);

// Start guessing from 1 to 10
for (let guess = 1; guess <= 10; guess++) {
    console.log(`Trying: ${guess}`);

    if (guess === secretNumber) {
        console.log(`Correct! The number was ${secretNumber}. Found at guess #${guess}.`);
        break;
    }
}
