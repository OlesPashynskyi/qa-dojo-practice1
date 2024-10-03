
console.log(new Array(`apple`, `pear`));

const birthDate = [1992, 4, 5];
const fruits = [`pomegranate`, `orange`, `pineapple`]
const arr = [1,2];

const birthFruits = birthDate.concat(fruits, arr);  
console.log(birthFruits)

for (const fruit of fruits) {
    console.log(fruit)
}