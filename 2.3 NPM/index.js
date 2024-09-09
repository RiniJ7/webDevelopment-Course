//var generateName = require('sillyname');

import generateName from "sillyName";
import {randomSuperhero} from "superheroes";



var sillyName = generateName();
let superHeroName = randomSuperhero();

console.log(`My name is ${sillyName}.`)

console.log(`I am a superhero. My name is ${superHeroName}`)
