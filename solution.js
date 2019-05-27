const Beer = require('./modules/Beer');
const Container = require('./modules/Container');
const Truck = require('./modules/Truck');

//Scenario: 1 truck with 2 containers 

const beers = [
    Beer.create('Pilsner'),
    Beer.create('IPA'),
    Beer.create('Lager'), 
    Beer.create('Stout'), 
    Beer.create('Wheat Beer'), 
    Beer.create('Pale Ale')
];

//creating container1
const container1 = new Container(3);

//add beers in container1
const iterator = beers.values();
for (let value of iterator) {
    container1.addBeer(value);
}

console.log(container1);
container1.checkTemperature();

//creating container2
const container2 = new Container(5);

//add beers in container2
const iterator2 = beers.values();
for (let value of iterator2) {
    container2.addBeer(value);
}

//creating truck
const truck1 = new Truck(2);

//add containers in truck
truck1.addContainer(container1);
truck1.addContainer(container2);

console.log(container2);
container2.checkTemperature();

console.log(truck1);
