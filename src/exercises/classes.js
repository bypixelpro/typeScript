export class SayHello {
    constructor(_user) {
        let lastName = '';
        if (typeof _user.lastName !== 'undefined') {
            lastName = ' ' + _user.lastName;
        }
        return `Esto es un saludo para ${_user.name}` + lastName;
    }
}
class ExtendClass {
    constructor() {
        this.log = 'Esto es un método extendido de una clase';
    }
    logExtends() {
        return this.log;
    }
}
export class ClassTest extends ExtendClass {
    constructor() {
        super();
        this.message = 'Esto es una variable pública';
        this.messagePrivate = 'Esto es una propiedad privada';
        this.log = 'Esto es un método extendido de una clase y además modificamos sus propiedades';
    }
    hello(_user) {
        return new SayHello(_user);
    }
}
