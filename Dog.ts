export class Dog {
    private name: string;
    private age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    print() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
    eat() {
        console.log(`${this.name} is eating...`);
    }
}