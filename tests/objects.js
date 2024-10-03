
console.log(["", true]);

console.log(new Array("", true));

//index from 0 ~

const someObject = {
  key: true,
  someKey: "yes",
};

console.log(someObject.someKey);

console.log(typeof someObject);

const otherObject = {
  firstKey: "", // ключ задано літералом. JSON не дозволяє використовувати літерали, лише ключі в лапках, на відміну від об'єктів
  "first Key": "",
  "first/Key": "",
};

// otherObject["first Key"];

const loginObject = {
  name : "Oles",
  lastName: "Pashynskyi",
  age: 32,
  getFullInfo: async function() {
    console.log(`My full name is ${this.name + " " + this.lastName} and I am ${this.age}`);
  }
};

console.log(loginObject.getFullInfo())

console.log(loginObject)

for (const data in loginObject){
    //console.log(data);
   // console.log(loginObject[name])
}

// додавання ключів

loginObject["pet"] = `Minerva`;

console.log(loginObject.pet)

delete loginObject.pet

console.log(loginObject.pet)

// for ( const key in loginObject) {
//     delete loginObject[key]
// }

console.log(loginObject)

console.log("name" in loginObject)

// prototype

// раніше було:
const student = {
    fullName : `Oles`,
    isActive : true
}

const studentQa = Object.create(student);
console.log(studentQa)

student["budget"] = true;

console.log(studentQa)

studentQa["program"] = `Test automation`

console.log(student)
console.log(studentQa)

//тепер:
