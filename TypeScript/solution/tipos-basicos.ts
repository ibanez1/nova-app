
// Define un variable de cada tipo de la tabla.
let isRed: boolean = true;
let counter: number = 0;
let str: string = 'Hola Mundo';

let n: null;
let und: undefined = undefined;

let obj: {name: string; surname: string};

let objs: Array<{name: string; surname: string}>;

let setObj: (name: string, surname: string) => {name: string; surname: string};

let money: [number, {name: string; surname: string}];

let all: any;

let setProperty: (value: any) => void;

let closeApp: (msg?:string) => never;

let clientResults: unknown;

enum ENGINE {
  ON = 'on',
  OFF = 'off',
  BROKEN = 'broken'
}

// Segunda parte: define un literal types, un type assertion de cada tipo, y una unión e intersección de tipos

let color: 'red' | 'green' | 'yellow';

type Person = {name: string; surname: string};

let person: any = 'Brad Pritt';

// Mediante as
let actor: string = (person as string);

// Mediante <>
let americanActor: string = <string>person;



type Bird = {name?: string, fly?: Function };
type Dog = {name?: string, run?: Function};

let animal: Bird | Dog = {};

animal.name = 'Pepito';

// animal.fly = () => {};



let hippogriff:  Bird & Dog = {};

hippogriff.name = 'Buckbeak'

hippogriff.fly = () => { 
  console.log('El hipogrifo vuela');
}

hippogriff.run = () => {
  console.log('El hipogrifo corre');
}
