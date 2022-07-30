import { Cat } from "./Cat";
import { Dog } from "./Dog";

const tom = new Cat("Tom", 1, true, false);
tom.print();
tom.eat();
tom.run();
tom.swim();

const doggy = new Dog("Doggy", 2);
doggy.print();
