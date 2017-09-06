import { UserI, ControlClassI } from "./interfaces";

export class SayHello {
    constructor(_user: UserI) {
        let lastName: string = '';
        if(typeof _user.lastName !== 'undefined') {
            lastName = ' ' + _user.lastName;
        }
        return `Esto es un saludo para ${_user.name}` +  lastName;
    }
}

class ExtendClass {

    protected log: string;

    constructor() {
        this.log = 'Esto es un método extendido de una clase';
    }

    logExtends(): string {
        return this.log;
    }
}

export class ClassTest extends ExtendClass implements ControlClassI{
    public message: string = 'Esto es una variable pública';
    private messagePrivate: string = 'Esto es una propiedad privada';

    constructor() {
        super();
        this.log = 'Esto es un método extendido de una clase y además modificamos sus propiedades';
    }

    public hello(_user: UserI) : SayHello {
        return new SayHello(_user);
    }
}