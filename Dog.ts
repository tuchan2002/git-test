export class Dog {
    private name: string;
    private age: number;
    private mouth: boolean;
    private hand: boolean;
    private foot: boolean;
    constructor(
        name: string,
        age: number,
        mouth: boolean,
        hand: boolean,
        foot: boolean
    ) {
        this.name = name;
        this.age = age;
        this.mouth = mouth;
        this.hand = hand;
        this.foot = foot;
    }
    print() {
        console.log(
            `Name: ${this.name}, Age: ${this.age}, Mouth: ${this.mouth}, Hand: ${this.hand}, Foot: ${this.foot}`
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
