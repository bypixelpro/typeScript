export class DecoratorWithClass {
    @log
    public static foo(n: number) {
        return n * 2;
    }
}

function log(target: Function, key: string, descriptor: any) {
    let originalMethod = descriptor.value;
    /**
     * Obtiene la función o método original
     */
    console.log(originalMethod);
    descriptor.value = function (...args: any[]) {
        /**
         * Obtiene los valores de entrada de todos los parámetros del método o función a la que decora
         */
        let a = args.map(a => JSON.stringify(a)).join();
        /**
         * Obtiene el resultado del método o funnción a la que decora
         */
        let result = originalMethod.apply(this, args);
        /**
         * Formatea el resultado en JSON
         */
        let r = JSON.stringify(result);
        console.log(`Call: ${key}(${a}) => ${r}`);
        return result;
    };

    /**
     * Resultado de la función a la que decora
     */
    console.log(descriptor);
    return descriptor;
}

/**
 * 2º Decorador
 */

const printA = (target: Object, key: string | symbol, descriptor: TypedPropertyDescriptor<Function>) => {
    console.log("A");
};

const printB = (target: Object, key: string | symbol, descriptor: TypedPropertyDescriptor<Function>) => {
    console.log("B");
};

export class Printer {
    @printA
    @printB
    public static printC() {
        return "C";
    }
}


/**
 * 3 Decorador
 */
@addCourse({
    course: "Angular 2"
})
export class Person {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get() {
        console.log(Object.getPrototypeOf(this));
        console.log(this.hasOwnProperty('constructor'));
        console.log(this);
    }
}

function addCourse(config: any) {
    return function (target: any) {
        target.course = config;
    }
}

function ReadOnly(target: any, key: string) {
    Object.defineProperty(target, key, { writable: true });
}

export class ReadOnlyClass {
    @ReadOnly             // notice there are no `()`
    name: string;
}

// Module

// Components
class ComponentInstance {

}

@Module({
    instances: [
        ComponentInstance
    ]
})

export class DecoratorInstancesComponent {
    constructor() {

    }
}

function Module(config: any) {
    return function (target: any) {
        console.log(config);
        console.log(target);
    }
}