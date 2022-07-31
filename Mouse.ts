export class Mouse {
    private name: string;
    private age: number;
    private foot: boolean;
    private tooth: boolean;
    private arm: boolean;
    constructor(
        name: string,
        age: number,
        foot: boolean,
        tooth: boolean,
        arm: boolean
    ) {
        this.name = name;
        this.age = age;
        this.foot = foot;
        this.tooth = tooth;
        this.arm = arm;
    }
    print() {
        console.log(
            `Name: ${this.name}, Age: ${this.age}, Tooth: ${this.tooth}, Foot: ${this.foot}, Arm: ${this.arm}`
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
