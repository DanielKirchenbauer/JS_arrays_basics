"use strict"
console.log("=== Arrays Aufgabe 1-3 ===");


const testArrayLength  = [1,2,3,4];
console.log(testArrayLength.length);

console.log("=== Arrays Aufgabe 1-4 ===");


console.log(testArrayLength);
testArrayLength.push(5,6);
console.log(testArrayLength);

const coincidenceInitials = ["James Bond", "Jack Bauer"];
console.log(coincidenceInitials);
coincidenceInitials.push("Jason Bourne");
console.log(coincidenceInitials);

const superHero = ["Batman", "Ironman", "Hulk"];
console.log(superHero);
superHero.push("Elfriede", "Helmut");
console.log(superHero);

console.log("=== Arrays Aufgabe 1-5 ===");


console.log(testArrayLength);
let lastValue = testArrayLength.pop();
console.log(testArrayLength)
console.log(lastValue);

console.log(coincidenceInitials);
lastValue = coincidenceInitials.pop();
console.log(coincidenceInitials);
console.log(lastValue);

console.log("=== Arrays Aufgabe 1-6 ===");


console.log(coincidenceInitials);
let firstValue = coincidenceInitials.shift();
console.log(coincidenceInitials);
console.log(firstValue);

console.log(superHero);
firstValue = superHero.shift();
console.log(superHero);
console.log(firstValue);

console.log("=== Arrays Aufgabe 1-7");


const favoriteFood = ["Sushi", "Thai-Curry", "Pho", "Steak"];
console.log(favoriteFood);
favoriteFood.unshift("Schinken-Nudeln", "Frikadellen");
console.log(favoriteFood);

const friends = ["Simon", "Marvin", "Daniel"];
console.log(friends);
friends.unshift("Andre", "Klaus", "Marcel", "Julian");
console.log(friends);

console.log("=== Arrays Aufgabe 1-8");


const fernWeh = ["Sardinien", "Teneriffa", "Corsica", "Freudenstadt", "Hamburg", "Usedom"];
console.log(fernWeh);
let sliceOfFernWeh = fernWeh.slice(fernWeh.indexOf("Hamburg"), fernWeh.indexOf("Hamburg") +1);
console.log(sliceOfFernWeh);
sliceOfFernWeh = fernWeh.slice(0,2);
console.log(sliceOfFernWeh);

console.log("=== Arrays Aufgabe 1-9");

console.log(fernWeh);
fernWeh.splice(3,1,"Kopenhagen");
console.log(fernWeh);
fernWeh.splice(3,0, "Nordkap");
console.log(fernWeh);

console.log("=== Arrays Aufgabe 1-10");


const text = "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards."
let splitOfFuturama = text.split("");
console.log(splitOfFuturama);
splitOfFuturama = text.split(" ");
console.log(splitOfFuturama);
splitOfFuturama = text.split(".");
console.log(splitOfFuturama);


