export class GreetingComponent {

    constructor(public _name: string) {}

    say(): string {
        return `Hello from TypeScript ${this._name}, welcome!.`;
    }
}