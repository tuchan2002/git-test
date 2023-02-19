import { Cat } from "./Cat";
import { Dog } from "./Dog";
import { Mouse } from "./Mouse";
import { Tiger } from "./Tiger";
import { Fish } from "./Fish";

const tom = new Cat("Tom", 1, true, false);
tom.print();
tom.eat();
tom.run();
tom.swim();

const doggy = new Dog("Doggy", 2, true, true, true);
doggy.print();

const jerry = new Mouse("Jerry", 1, true, true, true, true);
jerry.print();
jerry.swim();
jerry.punch();

const tippy = new Tiger("Tippy", 2, true, true, true, []);
tippy.eat();
tippy.eat();
tippy.eat();
tippy.print();

const koi = new Fish("Koi", 0.5, []);
koi.eat();
koi.eat();
koi.print();

console.log("Commit A");
