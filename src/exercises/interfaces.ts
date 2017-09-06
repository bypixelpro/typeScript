import {SayHello} from './classes'

export interface UserI {
    name: string;
    lastName?: string;
}

export interface ControlClassI {
    message: string;
    hello(_user: UserI): SayHello;
}
