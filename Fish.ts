export class Fish {
    private name: string;
    private age: number;
    private stomach: string[];
    constructor(name: string, age: number, stomach: string[]) {
        this.name = name;
        this.age = age;
        this.stomach = stomach;
    }
    print() {
        console.log(
            `Name: ${this.name}, Age: ${this.age}, Stomach: ${this.stomach}`
        );
    }
    eat() {
        console.log(`${this.name} is eating...`);
        this.stomach.push("O");
    }
}
