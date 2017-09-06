# Curso TypeScript

## Requerimientos de uso
- Un servidor que ejecute html
- Un navegador
- Consola (Windows)/Terminal (Mac/Linux)
- Tener git instalado en el equipo [https://git-scm.com/]
## Instrucciones de uso
- Acceder a la carpeta donde vamos a tener el proyecto dentro del servidor, ejemplo:
```
C:\xampp\htdocs\
```
- Hacer un clone del proyecto:
```
git clone https://github.com/bypixelpro/typeScript.git C:\xampp\htdocs\typeScript
```
- Acceder a la carpeta que acabamos de crear _"typeScript"_
```
cd typeScript
```
- Instalamos dependencias
``` 
npm install
```
- Iniciamos el proyecto
``` 
npm run start
```
- Accedemos al proyecto desde el navegador
``` 
http://localhost/Dani/typeScript/dist/
```

# Todo lo que vas a aprender en el curso

## Definición de TypeScript

Es un lenguaje de programación desarrollado por **Microsoft** y es de código abierto u __Open Source__ y que todo el mundo se lo puede descargar, utilizar y modificar completamente gratis.

Es un superconjunto de **JavaScript** que añade tipado estático y está basado en clases.

Su creador es __Anders Hejlsberg__ y es el arquitecto jefe de C# en __Microsoft__, es programador de gran prestigio y galardonado con multitud de premios y podéis saber más de él en __Wikipedia__ en la página https://es.wikipedia.org/wiki/Anders_Hejlsberg.

**TypeScript** extiende la sintaxis de **JavaScript**, con lo que de entrado no es un desconocido para los que ya trabajamos con el lenguaje y tenemos gran parte del camico recorrido. 

Además está compilado en **JavaScript** con lo que es compatible con todos los navegadores y está pensado sobre todo para proyectos grandes, de ahí que Angular esté basado en __TypeScript__.

Además se puede utilizar sin problemas con otras tecnologías ampliamente utilizadas con **JavaScript** como **jQuery, Node.js, MongoDB** etc.

Una de las mejores incorporaciones que incluyen en el lenguaje es el tipado fuerte en todas las entradas y salidas de nuestro código como en propiedades, variables, funciones, métodos, clases, interfaces etc...

Podéis ejecutar y hacer pruebas directamente en la página https://www.typescriptlang.org/play/, todo se compila simplemente haciendo click en __RUN__, además muestra errores como si estuviéramos trabajando directamente en nuestro editor de código, esto está bien para hacer pruebas rápidas pero lo suyo es hacerlo en nuestro editor.

## Instalación y configuración

El archivo package.json
```
{
  "name": "typescript-starter",
  "version": "1.0.0",
  "description": "",
  "main": "gulpfile.js",
  "scripts": {
    "start": "gulp",
    "test": "test"
  },
  "author": "Daniel Ariza",
  "license": "ISC",
  "devDependencies": {
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-stage-2": "^6.24.1",
    "babelify": "^7.3.0",
    "browserify": "^14.4.0",
    "gulp": "^3.9.1",
    "gulp-sourcemaps": "^2.6.0",
    "gulp-typescript": "^3.2.1",
    "tsify": "^3.0.1",
    "typescript": "^2.4.2",
    "vinyl-buffer": "^1.0.0",
    "vinyl-source-stream": "^1.1.0"
  },
  "dependencies": {
    "@types/jquery": "^3.2.12",
    "jquery": "^3.2.1"
  }
}
```

#### Gulp

Cramos un archivo que se llame gulpfile.js con el siguiente código.

```
var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var tsify = require('tsify');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');
var paths = {
    pages: ['/*.html']
};

gulp.task('copyHtml', function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest('/dist'));
});

gulp.task('browserify', function() {
  return browserify({
        basedir: '.',
        debug: true,
        entries: ['src/main.ts'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .transform('babelify', {
        presets: ['es2015'],
        extensions: ['.ts']
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['browserify', 'copyHtml'], function () {
    gulp.watch('app/ts/**/*.ts', ['browserify']);
    gulp.watch('**/*.html', ['copyHtml']);
});
```

Creamos otro archivo llamado **tsconfig.json** con el siguiente código.

```
{
    "files": [
        "src/main.ts"
    ],
    "compilerOptions": {
        "target": "es2015",
        "noImplicitAny": true, // Show errors to compile
        "removeComments": true,
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "sourceMap": true
    },
    "exclude": [
        "node_modules"
    ]
}
```

## Tipado

Una de las mejores cosas que implementa **TypeScript** es el __tipado fuerte__.

Cuando nos referimos al tipado, estamos hablando de los tipos de datos que se manejan y de la forma en que deben usarse, en el carso de hacer alguna violación en algún tipo nos dará un error y no nos dejará continuar hasta que utilicemos el tipo correcto.

#### Los tipos son:
1. Boolean (Boleano) - true|false
2. Number (Numérico) - 1|1.4
3. String (Datos Textuales) - "Hola"
4. Array (Valida Array):
```
let list: number[] = [1, 2, 3],  let list: Array<number> = [1, 2, 3], let list: Array<number|strring> = [1, 2, "Hola"] ...
```
5. Tupla (En matemáticas, una tupla es una lista ordenada de elementos. Una n-tupla es una secuencia o lista ordenada de n elementos, siendo n un número natural )

    ```
    let x: [string, number];
    // Initialize it
    x = ["hello", 10]; // OK
    // Initialize it incorrectly
    x = [10, "hello"]; // Error
    console.log(x[0].substr(1)); // OK
    console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
    ```
6. Enum (La palabra clave enum se utiliza para declarar una enumeración, un tipo distinto que consiste en un conjunto de constantes con nombre denominado lista de enumeradores, estás constante no pueden cambiar de valor una vez definidas)

    ```
    enum Color {Red, Green, Blue}
    let c: Color = Color.Green;
    ```
7. Any (Acepta cualquier tipo de dato).

    ```
    let list: any[] = [1, true, "free"];
    ```
8. Void (Vacío, sel utiliza cuando el método, propiedad, variable o función no devuelve ningún valor)

    ```
    function warnUser(): void {
        alert("Este es un mensaje de alerta");
    }
    ```
9. Null y Undefined

    ```
    let u: undefined = undefined;
    let n: null = null;
    ```
10. Genéricos
Los tipos genéricos en typescript nos permiten no establecer un tipo concreto a algo, variable, propiedad, método, clase etc, aunque es muy parecido al tipo any tiene algunas cosas que lo hacen un poco más completo, de lo que se encarga es que si el dato de entreada tiene un tipo en concreto (por ejemplo un String), salga un string:

  ```
    let nayString = <string>("Hola " + 1.8 + ' ' + [1, 2, 3]);
    let anyTypeVar: any[] = [1, nayString, 1.2, null, undefined];
    function anyType<T>(data: T[]): T[] {
        return data;
    }
    
  ```

Además se pueden combinar tipos de datos, ejemplo:

  ```
  // Declare the generic class.
  class GenericList<T> {
      public constructor(T input) { }
  }
  
  export class TestGenericList
  {
      private class ExampleClass { }
      static Main(): void {
          // Declare a list of type int.
          GenericList<int> list1 = new GenericList<int>();

          // Declare a list of type string.
          GenericList<string> list2 = new GenericList<string>();

          // Declare a list of type ExampleClass.
          GenericList<ExampleClass> list3 = new GenericList<ExampleClass>();
      }
  }
  ```

## Classes

En la versión **ES5** de JavaScript __no utilizamos la programación orientada a objetos convencinal__, en lugar de ello se utiliza la __programación orientada a prototipos__, que a diferencia de la primera las clases no están presentes y la herencia se hace por medio de la decoración de objetos, con lo que la orientación a objetos es conceptualmente muy diferente y hay que hacer un paso extra para aprender como funciona ya que es muy distintas a lenguages como PHP, .NET, PyThon, Ruby y muchos otros lenguages.

Además los objetos son dinámicos, es decir, pueden cambiar estructuralmente durante la ejecución del programa con lo que puede ocsionar muchos problemas si no realizamos la programación correctamente y cuando el proyecto es muy grande se nos pueden pasar algunos errores muy facilmente y es aquí donde TypeScript nos aporta una de sus mayores virtudes ya que es un lenguage fuertemente tipado con lo que tendremos pleno control sobre todo lo que ocurra en nuestro código.

```
// Programación orientado a Prototipo

function A() {
  this.saludo = 'Hola';
  console.log(this.saludo);
}

A.prototype.methodA = function() {
  console.log('Hola desde el método A');
}

var MyClass = new A();
MyClass.methodA;

// Programación orientado a Clases

class A {
  public saludo: string = 'Hola';
  
  constructor() {
    console.log(this.saludo);
  }
  
  methodA(): void {
    console.log('Hola desde el método A');
  }
  
}

let MyClass = new A();
MyClass.methodA();

```

#### Herencia

Además podemos extender la funcionalidad de las clases mediante la herencia por ejemplo con una clase __padre__ y una clase __hija__, ejemplo:

```
class A {
  propertyA: string;
  
  constructor() {
    this.propertyA = 'Propiedad que extiende';
  }
  
  methodA() {
    console.log('Método que extiende');
  }
}

class B extends A {
  propertyB: string = 'Propiedad de clase B';
  
  constructor() {
    super();
  }
  
  methodB() {
    console.log('Método de clase B');
  }
}

let classB = new B();
classB.propertyA;
classB.propertyB;
classB.methodA();
classB.methodB();
```

También podemos utilizar los tipos de propiedades y métodos típicos de la programación orientada a bojetos, __public, protected y private__, si no lo especificamos el valor por defecto es __public__.

```
class Person {
    protected name: string;
    protected constructor(theName: string) { this.name = theName; }
}

// Employee can extend Person
class Employee extends Person {
    private department: string;

    constructor(_name: string, _department: string) {
        super(_name);
        this.department = _department;
    }

    public getElevatorPitch() {
        return `Hola, mi nombre es ${this.name} y trabajo en ${this.department}.`;
    }
}

let Dani = new Employee("Daniel", "Desarrollo tecnológico");
Dani.departament // Error: departament is private
let David = new Person("David"); // Error: The 'Person' constructor is protected
```

#### También podemos utilizar el modificador readonly

La propiedades solo se pueden modificar en el momento de la creación del objeto, si intentamos modificarlo a posteriori no devolverá un error. Solo es necesario añadir readonly delante del nombre de la propiedad, ejemplo:

```
class A {
    readonly a: string;
    constructor (theName: string) {
        this.a = theName;
    }
}
let ClassA: A;
ClassA = new A("Texto de la propiedad a");
// Salida "Texto de la propiedad a"
ClassA.a = "Remplazando texto de la propiedad a"; // error! name is readonly.
```

#### Clases, métodos y propiedades estáticas

Declarar propiedades o métodos de clases como estáticos los hacen accesibles sin la necesidad de instanciar la clase. Una propiedad declarada como static no puede ser accedida con un objeto de clase instanciado (aunque un método estático sí lo puede hacer).

```
class Grid {
    static origen = {x: 0, y: 0};
    calculandoDistanciaDesdeOrigen(point: {x: number; y: number;}) {
        let xDist = (point.x - Grid.origen.x);
        let yDist = (point.y - Grid.origen.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.escala;
    }
    constructor (public escala: number) { }
}

let grid1 = new Grid(1.0);  // 1x escala
let grid2 = new Grid(5.0);  // 5x escala

console.log(grid1.calculandoDistanciaDesdeOrigen({x: 10, y: 10})); // 14.142135623730951
console.log(grid2.calculandoDistanciaDesdeOrigen({x: 10, y: 10})); // 2.8284271247461903
```

#### Clases abstractas

Las clases definidas como abstractas no se pueden instanciar y cualquier clase que contiene al menos un método abstracto debe ser definida como tal. Los métodos definidos como abstractos simplemente declaran la firma del método, pero no pueden definir la implementación.

Cuando se hereda de una clase abstracta, todos los métodos definidos como abstractos en la declaración de la clase madre deben ser definidos en la clase hija; además, estos métodos deben ser definidos con la misma (o con una menos restrictiva) visibilidad. Por ejemplo, si el método abstracto está definido como protegido, la implementación de la función debe ser definida como protegida o pública, pero nunca como privada. Por otra parte, las firmas de los métodos tienen que coincidir, es decir, la declaración de tipos y el número de argumentos requeridos deben ser los mismos. Por ejemplo, si la clase derivada define un argumento opcional y la firma del método abstracto no lo hace, no habría conflicto con la firma. Esto también se aplica a los constructores.

```
abstract class Departmento {

    constructor(public nombre: string) {
    }

    imprimeNombre(): void {
        console.log("Nombre del departamento: " + this.nombre);
    }

    abstract imprimirReunion(): void; // must be implemented in derived classes
}

class Contabilidad extends Departmento {

    constructor() {
        super("Contabilidad y auditoría"); // llamamo al constructor de la clase abstracta super()
    }

    imprimirReunion(): void {
        console.log("El Departamento de Contabilidad se reúne cada lunes a las 10am.");
    }

    generarInformes(): void {
        console.log("Generando informes de contabilidad...");
    }
}

let departmento: Departmento; // ok Especificamos la estructura que tiene que tener
departmento = new Departmento(); // error: No se puede instanciar una clase abstracta
departmento = new Contabilidad(); // ok Instanciamos la clase hija que extiende de la clase abstracta
departmento.imprimeNombre();
departmento.imprimirReunion();
departmento.generarInformes(); // error: El método no está definido en la clase abstracta
```

## Interface

Las interfaces de objetos permiten crear código con el cual especificar qué métodos deben ser implementados por una clase, sin tener que definir cómo estos métodos son manipulados.

Las interfaces se definen de la misma manera que una clase, aunque reemplazando la palabra reservada class por la palabra reservada interface y sin que ninguno de sus métodos tenga su contenido definido.

Todos los métodos declarados en una interfaz deben ser públicos, ya que ésta es la naturaleza de una interfaz.

En las especificación de __ES2015__ no están incluidas las interface, pero typeScript si las tiene implementadas listas para su uso.

En typeScript vamos a utilizar las interfaces para por ejemplo validar tipos en entradas por ejemplo como parámetros en funciones y métodos entre otros y para contralar la estructura de propiedades y métodos en nuestras clases.

Además podemos extender interfaces en otras interfaces como ejemplo:

```
interface AI { 
	varA: string;
}

interface BI {
	varB: string;
}

interface CI extends AI, BI { 
	varC: boolean;
}

let obj = <CI>{};
obj.varA = 'A';
obj.varB = 'B';
obj.varC = true;

console.log(obj); 

```

En el ejmplo anterior la interface **C** obtiene toda la funcionalidad de las interfaces **A y B**.

También podemos implementar todas las interfaces que necesitemos en una sola clase tanto de la manera anterior como separándola las interfaces por **comas**.

```
interface UserI { 
	hello(_user: string): void;
}

interface UserDataI { 
	name: string;
	lastName: string;
	phone?: number
}

class TestUser implements UserI { 
	public name: string;
	public lastName: string;
	public phone: number|void;

	public hello(_user: string): void {
		console.log(_user);
	}

	public configUser(_userObj: UserDataI): void { 
		this.name = _userObj.name;
		this.lastName = _userObj.lastName;
		this.phone = _userObj.phone;	
		console.group('User Data');
		console.info('Name: ' + this.name);
		console.info('LastName: ' + this.lastName);
		console.info('Phone: ' + this.phone);
		console.groupEnd();
	}
}


let userData: UserDataI = {
	name: 'Dani',
	lastName: 'Ariza'
};
let testUser = new TestUser();
testUser.hello('Dani1976');
testUser.configUser(userData);

```

### Características de las interfaces en TypeScript

#### Propiedades Opcionales

En __TypeScript__ nos permiten poner valores opcionales tanto en las clases, interfaces, parámetros etc, simplemente añadiendo el signo de interrogación, ejemplo:

```
name ?: string;
```

#### Propiedades de solo lectura

Sólo deben poder modificarse cuando se crea por primera vez un objeto. Solo es necesario añadir readonly delante del nombre de la propiedad, ejemplo:

```
interface RectaguleI {
    readonly width: number;
    readonly height: number;
}

let p1: RectaguleI = { width: 20, height: 10 };

// Salida en pantalla p1.width = 20
// Salida en pantalla p1.height = 10

// No se puede modificar una vez se ha creado
p1.width = 5; // error!
```

#### Tipos de funciones

Las interfaces nos permiten describir métodos para incluirlos dentro de una clase especificando los tipos de entrada y salida de las mismas, ejemplo:

```
hello(_user: UserI): SayHello;
```

En este ejemplo tendríamos que incorporar este método dentro de la clase que implemente esta interface de la siguiente manera:

```
hello(_user: UserI): SayHello {
  // ... nuestra funcionalidad
}
```

También podemos hacerlo directamente sobre una variable, ejemplo:

```
interface IFormatter {
    (data: string, toUpper : boolean): string;
};

var variableCaseFormatter: IFormatter = function (data: string, toUpper: boolean): string {
    if (toUpper) {
        return data.toUpperCase();
    }

    return data.toLowerCase();
}

// Switch between these at will
var formatter = variableCaseFormatter;

formatter("test", true) // Salida TEST;
```

#### Tipos Indexables

Podemos validar los items de un array y llamar a cada tipo con un index como el siguiente ejemplo:

```
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Carlos", "Ruben"];

let item: string = myArray[0];
// Salida Carlos
```

Además las propiedades también pueden ser readonly

## Funciones y Métodos

**TypeScript** y **ES6** nos permiten hacer cosas interesantes en los métodos y funciones:

Nos permiten poner valores por defecto en los parámetros.

```
function test(name: string = 'Dani', lastName: string = 'Ariza') {
	return `Hola ${name} ${lastName}`;
}

test();       // Hola Dani Ariza
```

Nos permiten poner valores optativos.

```
function test(name: string = 'Dani', lastName?: string) {
	if (typeof lastName !== 'undefined') {
		return `Hola ${name} ${lastName}`;
	}
	return `Hola ${name}`;
}

console.log(test('Ishay'));   // Ishay
console.log(test('Ishay', 'Spiro'));   // Ishay Spiro
```

Nos permite tipar tanto los parámetros de entrada como la salida de la **Función/Método**.

```
function add(x: number, y: number): number {
    return x + y;
}

let myAdd = add(1, 2); // 3
```

## Decoradores

Los decoradores son una parte experimental que han incluido en **TypeScript** y que sirve para hacer cosas interesantes como __como la reflexión o la inyección de dependencias__, es decir se van a encargar de añadir un comportamiento adicional a la propiedad que decoran sin modifiar la funcionalidad original del mismo.

Cuando escribamos nuestra función decoradora esta tiene que devolver siempre el resultado que devuelva la función, método o clase que decore.

Vamos a poner un ejemplo, podemo utilizar por ejemplo para cargar una serie de clases cuando invoquemos la clase o función decorada, por ejemplo:

```
// Función Decoradora
function Module<T extends {new(...args:any[]):{}}>(config: any) {
    let classConstructor = config['components'];
    return function (ctr: Function) {
        let dep: any = {};
        classConstructor.forEach(function (className: any) {
            dep[className] = new className();
        });
        console.log(dep);
        ctr.constructor.apply(arguments, dep);
        console.log(ctr);
        console.log(arguments);
    }
}

// Clase decorada y carga de clases al instanciar la función deocradora

@Module({
    components: [
        ComponentInstance,
        ComponentInstance2
    ]
})

export class DecoratorInstancesComponent {
    say: string;
    constructor(_say: string) {
        this.say = _say;
    }
}
```

También podemos utilizar decoradores por ejemplo para modificar valores de propiedades, o para restringir el acceso a las mismas.

## Iterators

Tenemos dos funciones para iterar directamente sobre arrays y sobre objetos, uno para sacar las claves de cada item y otro para sacar el valor de cada item.

```
  // Get Key of each item 
 for(let key in this.list) {
      console.log(`Key: ${key}`);
  }
  
  // Get val of each item 
  for(let val of this.list) {
      console.log(`Val: ${val}`);
  }
```

