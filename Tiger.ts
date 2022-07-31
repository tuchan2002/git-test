export class Tiger {
    private name: string;
    private age: number;
    private mouth: boolean;
    constructor(name: string, age: number, mouth: boolean) {
        this.name = name;
        this.age = age;
        this.mouth = mouth;
    }
    print() {
        console.log(
            `Name: ${this.name}, Age: ${this.age}, Mouth: ${this.mouth}`
        );
    }
    eat() {
        console.log(`${this.name} is eating...`);
    }
}
