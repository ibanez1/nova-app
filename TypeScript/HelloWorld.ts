let saludo: boolean;

saludo = true;

let numero: string = '1';

let nombre: string = "Adrián";

// let saludoCompleto: symbol = Symbol();

type Person = {name: 'John', surname: string};

let person: Person = {
  name: 'John',
  surname: 'Wayne'
};

type SummerMonths = 'Junio' | boolean | 'Agosto'

let persons: Person[] = [];

persons.push({
  name: 'John',
  surname: 'Wayne'
})

let props: [string, number] = ['Teresa', 1]

let idPerson: unknown;

// let idNumber: number = idPerson;
if (typeof(idPerson) === 'string') {
idPerson.length;
}

enum Colors {
  Red ,
  Green ,
  Purple = 'purple'
}

Colors.Green 

function add(x = 3, y:number): 3 {
  console.log(x, y)
  return 3;
}

let rest: (a: number, b: number) => number;

// rest = add;

let attr: string =  'true';

attr = ((1 as unknown) as string);
attr = <string><unknown>1

attr.replace('','')

// let desconocida: unknown = true;

// attr = (desconocida as true)

// attr = <true>desconocida

type Bird = {name?: string, fly?: Function };
type Dog = {name?: string, run?: Function };
type Cat = {name?: string, arañar?: Function };

let animal: Bird & Dog & Cat = {
  name: undefined,
};

if (animal.run !== undefined) {animal.run();}


// let pajaro: Bird = {
//   fly: () => {}
// };

let nombre1: string = (animal as Bird).name  ? (animal as Bird).name as string : '';


// if () {
//   // 
// }

let ejeX: number = 2;

let coordenadas: {x?: string; y?: string} = {};

coordenadas['x'] = (ejeX as unknown) as string;


abstract class Vehiculo {

  // private motor: string = '';

  constructor(protected color: string, private motor: string){

    // if (motor) {
    //   this.motor = motor
    // };
  }

  arrancar() {
    console.log('Vehículo')
  }

  abstract frenar(): void;
}

// let clio = new Vehiculo('Rojo', '');
// let mercedes = new Vehiculo('Rojo', 'buen_motor');

// clio.arrancar();

// class Coche extends Vehiculo {

//   //  color: 'negra' | 'roja';
//    static ruedas = 4;
//   constructor(c: 'negra' | 'roja') {
//     super(c,'combustion')
//     this.color = c;
//   }

//   arrancar() {
//     super.arrancar();
//     console.log('Furgoneta')
//   }
//   frenar(){
//     console.log('Frena con las zapatas de frena')
//   }
// }

// let furgoneta = new Coche('negra')

// // furgoneta.color = 'roja';
// Coche.ruedas;
// let vehi = [ furgoneta]

// vehi.forEach( e => e.arrancar());


function paraOption(param1?: any, param2?: any) {
  if (param1) {

  }
}

paraOption(undefined, 'Segundo param');


interface ICoche<T> {
  color: T;
  arrancar: Function;
}

type TCoche<T> = {
  color: T;
  arrancar: Function;
}

class Coche<T extends {}> implements ICoche<T> {

  color: T;
  // motor = 'combustion';
  constructor(c: T) {
    this.color = c;
  }
  arrancar(){

  }
}

let carro: Coche<{color: string, opacity: string}> = new Coche({color: 'string', opacity: 'string'})

let car: ICoche<string> = {
  color:'Rojo',
  arrancar: () => {},
}

// interface ICoche {
//   motor: string;
// }

// Define una interfaz de una función e implementala.

interface PublishBook{
  (editorial: string, price: number): string;
}
let publish: PublishBook;
publish = (ed: string, price: number) => `La ${ed} lo publica a ${price}`;

// Define una interfaz de un objeto con un tipo genérico e impleméntala.

interface Computer<T, U>{
  isLaptop: string | boolean;
  peripheral: T;
  properties: U;
}
let comp : Computer<string, string> =  {
  isLaptop: true,
  peripheral: 'none',
  properties: 'none',
}







interface IMesa<U> {
  patas: string;
  precio: U;
}


let mesa:IMesa<number>

export function identity<T>(arg: T): T {
  console.log(arg)
  return arg;
}

let num = identity<number>(8);

let str = identity<string>('str')

interface INombre {
  nombre: string
}


interface Persona<U extends INombre> {
  grupo: string;
  nombre: U
}

interface INombreLang extends INombre{
  lang: string
}

let persona: Persona<INombreLang>


function getPerson(pers: Persona<INombreLang>){
  console.log(pers.nombre)
}



