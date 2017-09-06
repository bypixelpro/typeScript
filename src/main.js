import { DebugComponent } from './exercises/debugComponent';
import { sayHello } from "./greet";
import { TypesClass } from "./exercises/tipado";
import { ClassTest } from "./exercises/classes";
import { MyNameSpace } from "./exercises/namespace";
import { DecoratorWithClass } from './exercises/decorators';
import { Printer } from './exercises/decorators';
import { ReadOnlyClass, DecoratorInstancesComponent } from './exercises/decorators';
import * as jQuery from "jquery";
window.jQuery = jQuery;
function welcomeToTypeScript(divName, name) {
    let debug = new DebugComponent();
    /**
     * Tests
     */
    let exerciseA = {
        a: (typeof jQuery !== undefined)
    };
    debug.toConsole(exerciseA, 'jQuery');
    // Load jQuery
    // Load Function
    const elt = document.getElementById(divName);
    elt.innerHTML = `<h1>${sayHello(name)}</h1>`;
    /**
     * Typed
     */
    new TypesClass(debug);
    /**
     * Functions
     */
    let exerciseB = {
        a: sayHello(name)
    };
    debug.toConsole(exerciseB, 'Call function');
    /**
     * Classes and Interfaces
     */
    // User 1
    let user1 = { name: "Dani" };
    let Dani = new ClassTest();
    // User 2
    let user2 = { name: "David", lastName: "Piqué" };
    let David = new ClassTest();
    let exerciseC = {
        a: Dani.hello(user1),
        b: David.hello(user2),
        c: David.logExtends(),
        d: David.message
    };
    // Debug
    debug.toConsole(exerciseC, 'Clases & Interfaces');
    /**
     * Name space
     */
    let exerciseD = {
        a: new MyNameSpace.MyNumberClass().returnNum(500),
        b: MyNameSpace.greeting
    };
    debug.toConsole(exerciseD, 'Name spaces');
    /**
     * Decorators
     */
    let exerciseE = {
        a: DecoratorWithClass.foo(54),
        b: new ReadOnlyClass(),
        d: Printer.printC()
    };
    exerciseE.c = exerciseE.b.name;
    debug.toConsole(exerciseE, 'Decorators');
    new DecoratorInstancesComponent();
}
welcomeToTypeScript("greeting", "TypeScript");
