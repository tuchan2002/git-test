export class Tiger {
    private name: string;
    private age: number;
    private mouth: boolean;
    private arm: boolean;
    constructor(name: string, age: number, mouth: boolean, arm: boolean) {
        this.name = name;
        this.age = age;
        this.mouth = mouth;
        this.arm = arm;
    }
    print() {
        console.log(
            `Name: ${this.name}, Age: ${this.age}, Mouth: ${this.mouth}, Arm: ${this.arm}`
        );
    }
    eat() {
        console.log(`${this.name} is eating...`);
    }
    swim() {
        console.log(`${this.name} is swimming...`);
    }
}
