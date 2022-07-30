export class Cat {
    private name: string;
    private age: number;
    private foot: boolean;
    private mouth: boolean;
    constructor(name: string, age: number, foot: boolean, mouth: boolean) {
        this.name = name;
        this.age = age;
        this.foot = foot;
        this.mouth = mouth;
    }
    print() {
        console.log(
            `Name: ${this.name}, Age: ${this.age}, Foot: ${this.foot}, Mouth: ${this.mouth}`
        );
    }
    eat() {
        console.log(`${this.name} is eating...`);
    }
    run() {
        console.log(`${this.name} is running...`);
    }
    swim() {
        console.log(`${this.name} is swimming...`);
    }
}
