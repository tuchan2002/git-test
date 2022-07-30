import { Cat } from "./Cat";
import { Dog } from "./Dog";
import { Mouse } from "./Mouse";

const tom = new Cat("Tom", 1, true, false);
tom.print();
tom.eat();
tom.run();
tom.swim();

const doggy = new Dog("Doggy", 2, true, true, true);
doggy.print();

const jerry = new Mouse("Jerry", 1);
jerry.print();
