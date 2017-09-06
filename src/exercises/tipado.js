export class TypesClass {
    constructor(_debug) {
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
    booleanFn() {
        let booleanVars = {
            1: true,
            2: false
        };
        this.debug.toConsole(booleanVars, 'Boolean');
    }
    // Number
    numberFn() {
        let booleanVars = {
            1: 1,
            2: 1.234545
        };
        this.debug.toConsole(booleanVars, 'Numeric');
    }
    // String
    stringFn() {
        let booleanVars = {
            1: "Esto es una prueba"
        };
        this.debug.toConsole(booleanVars, 'String');
    }
    // Array
    arrayFn() {
        let booleanVars = {
            1: [1, 2, 3]
        };
        this.debug.toConsole(booleanVars, 'Array');
    }
    // Tuple
    tuplaFn() {
        let booleanVars = {
            1: ["hello", 10]
        };
        this.debug.toConsole(booleanVars, 'Tuple');
    }
    // Enum
    enumFn() {
        var ColorEnum;
        (function (ColorEnum) {
            ColorEnum[ColorEnum["Red"] = 0] = "Red";
            ColorEnum[ColorEnum["Green"] = 1] = "Green";
            ColorEnum[ColorEnum["Blue"] = 2] = "Blue";
        })(ColorEnum || (ColorEnum = {}));
        let c = ColorEnum.Green;
        let booleanVars = {
            1: c
        };
        this.debug.toConsole(booleanVars, 'Enum');
    }
    // Any
    anyFn() {
        let booleanVars = {
            1: [1, true, "free"],
            2: 'Hola',
            3: 3,
            4: {}
        };
        this.debug.toConsole(booleanVars, 'Any');
    }
    hybridFn() {
        let booleanVars = {
            1: "Hola a todos",
            2: 1,
            3: [1, 2, 3]
        };
        this.debug.toConsole(booleanVars, 'Hybrid');
    }
    // Void
    voidFn() {
        let booleanVars = {
            1: undefined
        };
        this.debug.toConsole(booleanVars, 'Undefined');
    }
    // Null/Undefined
    nullUndefinedFn() {
        let booleanVars = {
            1: undefined,
            2: null
        };
        this.debug.toConsole(booleanVars, 'Undefined|null');
    }
    // Generics
    genericsFn() {
        function identity(arg) {
            return arg;
        }
        function loggingIdentity(arg) {
            return arg;
        }
        let nayString = ("Hola " + 1.8 + ' ' + [1, 2, 3]);
        let anyTypeVar = [1, nayString, 1.2, null, undefined];
        function anyType(data) {
            return data;
        }
        let booleanVars = {
            1: identity("Hola"),
            2: identity(1),
            3: identity([1, 2, 3]),
            4: `Número de elementos del array ${loggingIdentity([1, "a", { test: 1 }]).length}`,
            5: anyType(anyTypeVar)
        };
        this.debug.toConsole(booleanVars, 'Generics');
    }
}
