const str: string = 'Hello';
const num: number = 12;
const numFloat: number = 12.5;
const isLoading: boolean = true;
const numArr: number[] = [1, 2, 3, 4, 5];
const numArr2: Array<number> = [1, 2, 3, 4, 5];
const strArr: string[] = ['Hello', 'World'];
const person: [string, number] = ['John', 14];
let result: any = 'Ok';
result = 10;

function sayHello(name: string): void {
  console.log(`Hello ${name}`);
}
sayHello('Brad');

type ID = string | number;
const id1: ID = '12';

type EVENT = string;
const event1: EVENT = '12';

type SomeType = null | undefined
const nullVar : SomeType = null
 