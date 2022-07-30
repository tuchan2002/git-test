export class Mouse {
    private name: string;
    private age: number;
    private tooth: boolean;
    constructor(name: string, age: number, tooth: boolean) {
        this.name = name;
        this.age = age;
        this.tooth = tooth;
    }
    print() {
        console.log(
            `Name: ${this.name}, Age: ${this.age}, Tooth: ${this.tooth}`
        );
    }
    eat() {
        console.log(`${this.name} is eating...`);
    }
}
