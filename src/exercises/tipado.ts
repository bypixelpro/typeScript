import {DebugComponent} from './debugComponent';

export class TypesClass {

    private debug: DebugComponent;

    constructor(_debug: DebugComponent) {
        this.debug = _debug;
        this.booleanFn();
        this.numberFn();
        this.stringFn();
        this.arrayFn();
        this.tuplaFn();
        this.enumFn();
        this.anyFn();
        this.hybridFn();
        this.voidFn();
        this.nullUndefinedFn();
        this.genericsFn();
    }

    // Boolean
    booleanFn() : void {
        let booleanVars: {[k: string]: boolean} = {
            1: true,
            2: false
        };
        this.debug.toConsole(booleanVars, 'Boolean');
    }

    // Number
    numberFn() : void {
        let booleanVars: {[k: string]: number} = {
            1: 1,
            2: 1.234545
        };
        this.debug.toConsole(booleanVars, 'Numeric');
    }

    // String
    stringFn() : void {
        let booleanVars: {[k: string]: string} = {
            1: "Esto es una prueba"
        };
        this.debug.toConsole(booleanVars, 'String');
    }

    // Array
    arrayFn() : void {
        let booleanVars: {[k: string]: any[]} = {
            1: [1,2,3]
        };
        this.debug.toConsole(booleanVars, 'Array');
    }

    // Tuple
    tuplaFn() : void {
        let booleanVars: {[k: string]: [any]} = {
            1: ["hello", 10]
        };
        this.debug.toConsole(booleanVars, 'Tuple');
    }

    // Enum
    enumFn() : void {
        enum ColorEnum {Red, Green, Blue}
        let c: ColorEnum = ColorEnum.Green;

        let booleanVars: {[k: string]: any} = {
            1: c
        };
        this.debug.toConsole(booleanVars, 'Enum');}

    // Any
    anyFn() : void {
        let booleanVars: {[k: string]: any} = {
            1: [1, true, "free"],
            2: 'Hola',
            3: 3,
            4: {}
        };
        this.debug.toConsole(booleanVars, 'Any');
    }

    hybridFn() : void {
        let booleanVars: {[k: string]: number|string|number[]} = {
            1: "Hola a todos",
            2: 1,
            3: [1, 2, 3]
        };
        this.debug.toConsole(booleanVars, 'Hybrid');
    }

    // Void
    voidFn() : void {
        let booleanVars: {[k: string]: undefined} = {
            1: undefined
        };
        this.debug.toConsole(booleanVars, 'Undefined')
    }

    // Null/Undefined
    nullUndefinedFn() : void {
        let booleanVars: {[k: string]: undefined} = {
            1: undefined,
            2: null
        };
        this.debug.toConsole(booleanVars, 'Undefined|null')
    }

    // Generics
    genericsFn() : void {
        function identity<T>(arg: T): T {
            return arg;
        }
        function loggingIdentity<T>(arg: T[]): T[] {
            return arg;
        }

        let nayString = <string>("Hola " + 1.8 + ' ' + [1, 2, 3]);
        let anyTypeVar: any[] = [1, nayString, 1.2, null, undefined];
        function anyType<T>(data: T[]): T[] {
            return data;
        }

        let booleanVars: {[k: string]: any} = {
            1: identity("Hola"),
            2: identity(1),
            3: identity([1, 2, 3]),
            4: `Número de elementos del array ${loggingIdentity([1, "a", {test: 1}]).length}`,
            5: anyType(anyTypeVar)
        };
        this.debug.toConsole(booleanVars, 'Generics')
    }

}