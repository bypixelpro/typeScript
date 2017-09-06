var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
export class DecoratorWithClass {
    static foo(n) {
        return n * 2;
    }
}
__decorate([
    log
], DecoratorWithClass, "foo", null);
function log(target, key, descriptor) {
    let originalMethod = descriptor.value;
    /**
     * Obtiene la función o método original
     */
    console.log(originalMethod);
    descriptor.value = function (...args) {
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
const printA = (target, key, descriptor) => {
    console.log("A");
};
const printB = (target, key, descriptor) => {
    console.log("B");
};
export class Printer {
    static printC() {
        return "C";
    }
}
__decorate([
    printA,
    printB
], Printer, "printC", null);
/**
 * 3 Decorador
 */
let Person = class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get() {
        console.log(Object.getPrototypeOf(this));
        console.log(this.hasOwnProperty('constructor'));
        console.log(this);
    }
};
Person = __decorate([
    addCourse({
        course: "Angular 2"
    })
], Person);
export { Person };
function addCourse(config) {
    return function (target) {
        target.course = config;
    };
}
function ReadOnly(target, key) {
    Object.defineProperty(target, key, { writable: true });
}
export class ReadOnlyClass {
}
__decorate([
    ReadOnly // notice there are no `()`
], ReadOnlyClass.prototype, "name", void 0);
// Module
// Components
class ComponentInstance {
}
let DecoratorInstancesComponent = class DecoratorInstancesComponent {
    constructor() {
    }
};
DecoratorInstancesComponent = __decorate([
    Module({
        instances: [
            ComponentInstance
        ]
    })
], DecoratorInstancesComponent);
export { DecoratorInstancesComponent };
function Module(config) {
    return function (target) {
        console.log(config);
        console.log(target);
    };
}
