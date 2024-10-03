//=============== Task 1 ===============
const user: any = {};

user["name"] = `senpai`;
user["surname"] = `qa`;

user.name = `Oles`;

//delete user.name;
//delete user.surname;

console.log(user);

//=============== Task 2 ===============

console.log(isEmpty(user));

function isEmpty(obj: Object) {
  let result = Object.keys(obj).length === 0;
  return result;
}

//=============== Task 3 ===============

let toddler = {
  weight: 2960,
  height: 50,
  name: `Oleksa`,
  multiplyNumeric: function () {
    for (let prop in toddler) {
      if (typeof toddler[prop] === `number`) {
        toddler[prop] = toddler[prop] * 2;
      }
    }
    console.log(toddler);
  },
};
toddler.multiplyNumeric();
