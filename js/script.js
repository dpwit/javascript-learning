/*
const country = "England";
const continent = "Europe";
let population = 10;
const description = country + ' is in ' + continent + ' and its population is ' + population + ' million ';
console.log(country);
console.log(continent);
console.log(population);
console.log(description);

const isIsland = true;
let language = "English";

console.log(isIsland);
console.log(language);

console.log(population / 2);
population++;

console.log(population > 6);
console.log(population < 33);

//let variables can change values
let age = 30;
age = 31;

//const variables can't change and are constant and must have a value assigned.
//use const by default
const birthYear = 1969;

const currentYear = 2021;
const ageDarren = currentYear - 1969;
const ageJules = currentYear - 1970;
const ageKate = currentYear - 2007;

console.log(ageDarren, ageJules, ageKate);

let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; //x = x + 1
console.log(x);

const now = 2021;
const ageDarren = now - 1969;
const ageJules = now -1970;

console.log(ageDarren > ageJules);
console.log(now - 1969 >  now -1970);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageDarren + ageJules) / 2;
console.log(ageDarren, ageJules, averageAge);
*/
const firstName = 'Darren';
const jobTitle = 'Director';
const birthYear = 1969;
const year = 2021;

const darren = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + jobTitle;

console.log(darren);

//template literals using back ticks `` ES6
const darrenTl = `I'm ${firstName}, a ${year - birthYear} year old ${jobTitle}`;
console.log(darrenTl);
