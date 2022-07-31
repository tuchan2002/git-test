export class Tiger {
    private name: string;
    private age: number;
    private mouth: boolean;
    private arm: boolean;
    private foot: boolean;
    private stomach: string[];
    constructor(
        name: string,
        age: number,
        mouth: boolean,
        arm: boolean,
        foot: boolean,
        stomach: string[]
    ) {
        this.name = name;
        this.age = age;
        this.mouth = mouth;
        this.arm = arm;
        this.foot = foot;
        this.stomach = stomach;
    }
    print() {
        console.log(
            `Name: ${this.name}, Age: ${this.age}, Mouth: ${this.mouth}, Arm: ${this.arm}, Foot: ${this.foot}, Stomach: ${this.stomach}`
        );
    }
    eat() {
        console.log(`${this.name} is eating...`);
        this.stomach.push("O");
    }
    swim() {
        console.log(`${this.name} is swimming...`);
    }
    jump() {
        console.log(`${this.name} is jumping...`);
    }
}
