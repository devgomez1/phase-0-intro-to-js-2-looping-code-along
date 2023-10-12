// Code your solutions in this file
//for (let age = 30; age < 40; age++) {
  //  console.log(`Im ${age} years old. Happy birthday to me!`);
   // debugger
//};

//const gifts = ["teddy bear", "drone", "doll"];

//function wrapGifts(gifts) {
   // for (let i = 0; i < gifts.length; i++) {
     //   console.log (`Wrapped ${gifts[i]} and added a bow!`);
      //  debugger
   // }
   // return gifts;
//};

//wrapGifts(gifts);

function writeCards(names, event) {
    let customMessage = [];

    for (let i=0; i < names.length; i++) {
        let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        customMessage.push(message);
    }
    console.log(customMessage);
    return customMessage;
}

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

function countDown() {
    let count = 10;
    while (count >= 0) {
        console.log(count);
        count--;
    }
};


countDown();