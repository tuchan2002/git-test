export class Tiger {
    private name: string;
    private age: number;
    private arm: boolean;
    constructor(name: string, age: number, arm: boolean) {
        this.name = name;
        this.age = age;
        this.arm = arm;
    }
    print() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Arm: ${this.arm}`);
    }
    swim() {
        console.log(`${this.name} is swimming...`);
    }
}
