let firstName: string = 'Edvardas';
let age: number = 18;
let isMale: boolean = true;
let hobbies: any = 'string';

const names: string[] = ['Petras', 'Jonas', 'Ona'];
const numbers: number[] = [1, 2, 4, 8, 16];

// Tuples
let person: [string, number, boolean] = ['String', 16, false];

// Union
let id: string | number = 1;
id = '1A';

function add(x: number, y: number): number {
    return x + y;
}

add(7, 2);

function addNumber(x: number, y: number): void {
    console.log(x + y);
}

const user: User = {
    id: 1,
    firstName: 'Jonas',
    lastName: 'Jonaitis'
}
// Interface by default yra objektas
interface User {
    id: number,
    firstName: string,
    readonly lastName: string, // Unable to change value
    age?: number // This value is not required
}
