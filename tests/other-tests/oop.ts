//створити клас з пропертями вага, вік, стать, колір очей, колір волосся
// і методами ходити, бігати, брати і присідати

class Human {
  public weight: number;
  protected age: number;
  protected sex: string;
  protected eyeColor: string;
  public hairColor: string;

  constructor(
    weight: number,
    age: number,
    sex: string,
    eyeColor: string,
    hairColor: string
  ) {
    this.weight = weight;
    this.age = age;
    this.sex = sex;
    this.eyeColor = eyeColor;
    this.hairColor = hairColor;
  }

  public walk() {
    console.log(`I'm walking`);
  }

  public run() {
    console.log(`I'm running`);
  }

  public grab() {
    console.log(`I'm grabbing`);
  }

  public squat() {
    console.log(`I'm squatting`);
  }
}

const me = new Human(90, 32, `male`, `brown`, `black`);

me.grab();
me.run();
me.walk();
me.squat();
me.weight;
me.hairColor;
