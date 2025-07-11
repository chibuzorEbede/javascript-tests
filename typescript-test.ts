let item: string = "john";
let isDone: boolean = true;
let line: number = 42;

let changeable: any = 77;
changeable = "tween";

const constant = 33;

//typed arrays
let list: boolean[] = [true, false];
let carDetails: number[] = [];
carDetails[0] = 1;

//generic array
let genArr: Array<string> = ["ham", "yum"];

//enums
enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Blue;

//void: for use when a function returns void

function crapyBird(): void {
  console.log("holly molly");
}

//function signatures

let freckleGen = function (freckleNumber: number): string {
  return freckleNumber + "~~~";
};

let waveFunc = (i: number, j: number): number => {
  return i * j;
};

//function accepting multiple types
let ff = function (i: string | number): string {
  return i + "hola";
};

//interfaces
interface Person {
  name: string;
  id?: string;
  age: number;
  move(): void;
}

//test interface compliance
let jonah: Person = {
  id: "1",
  name: "jonah",
  age: 24,
  move: () => {
    fetch("localhost:3004");
  },
};

//using interface to implement a function

interface isEven {
  (i: number): boolean;
}

let g: isEven = function (i: number): boolean {
  return i % 2 === 0;
};

//classes
