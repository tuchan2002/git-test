export class Dog {
    private name: string;
    private age: number;
    private mouth: boolean;
    private hand: boolean;
    constructor(name: string, age: number, mouth: boolean, hand: boolean) {
        this.name = name;
        this.age = age;
        this.mouth = mouth;
        this.hand = hand;
    }
    print() {
        console.log(
            `Name: ${this.name}, Age: ${this.age}, Mouth: ${this.mouth}, Hand: ${this.hand}`
        );
    }
    eat() {
        console.log(`${this.name} is eating...`);
    }
    jump() {
        console.log(`${this.name} is jumping...`);
    }
    run() {
        console.log(`${this.name} is running...`);
    }
}
