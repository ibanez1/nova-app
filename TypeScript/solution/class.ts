// Define una clase, instanciala y accede a sus métodos.
// Define una clase abstracta y que la clase anterior herede de esta.
// Define algún modificador de acceso para la clase. 
// Uno de ellos no debe de ser accesible por una subclase y otro sólo por las subclases
// Define otra subclase que sobreescriba ciertos métodos.
// Asegurate que estás aprovechando el polimorfismo.

abstract class Food {
  constructor(private type: string){
  }

  abstract getColor(): string;
}

class Fruit extends Food{

  private isRipe: boolean = false;

  constructor(protected color: string, public name: string) {
    super('Fruit');
  }

  setIsRipe(): void {
    this.isRipe = true;
  }

  getRipe() {
    console.log(this.isRipe)
  }

  getColor(){
    return this.color;
  }

  eat() {
    console.log('La fruta va a ser comida')
  }
}

let lemonG: Fruit = new Fruit('yellow', 'lemon');

lemonG.setIsRipe();

class Lemon extends Fruit {

  constructor() {
    super('yellow', 'lemon');
  }

  eat() {
    console.log('El limón es exprimido, no comido.')
  }
}

let lemon: Lemon = new Lemon();


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