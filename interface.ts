interface Person {
  readonly firstName: string;
  readonly lastName: string;
  age: number;
  company?: string;
}

const john: Person = {
  firstName: 'John',
  lastName: 'Qwerty',
  age: 17
};
const brad: Person = {
  firstName: 'Brad',
  lastName: 'Qwerty',
  age: 25,
  company: 'EPAM'
};
brad.age = 26;

console.log(john);
console.log(brad);

interface Man extends Person {
  SayHello: () => void;
}

const george: Man = {
  firstName: 'George',
  lastName: 'Fert',
  age: 23,
  SayHello(): void {
    console.log('Hello');
  }
};
console.log(george);

interface IClock {
  time: Date;
  setTime(date: Date): void;
}

class Clock implements IClock {
  time: Date = new Date();
  setTime(date: Date): void {
    this.time = date;
  }
}


