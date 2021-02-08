import EVCar from './100-evcar.js';
import Car from './10-car.js';

const ec1 = new EVCar("Tesla", "Turbo", "Red", "250");
console.log(ec1);

const ec2 = ec1.cloneCar();
console.log(ec2);

console.log(ec2 instanceof EVCar);
console.log(ec2 instanceof Car);
