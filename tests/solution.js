const Beer = require('../modules/Beer');
const Container = require('../modules/Container');
const Truck = require('../modules/Truck');

var expect = require("chai").expect

//Scenario: 1 truck with 2 containers 

const beers = [
    Beer.create('Pilsner'),
    Beer.create('IPA'),
    Beer.create('Lager'), 
    Beer.create('Stout'), 
    Beer.create('Wheat Beer'), 
    Beer.create('Pale Ale')
];

expect(beers).to.be.an.instanceof(Array);
expect(beers).to.have.lengthOf(6);

//creating container1
const container1 = new Container(3);

//add beers in container1
const iterator = beers.values();
for (let value of iterator) {
    expect(value).to.have.property('name');
    container1.addBeer(value);
}

expect(container1).to.have.property('beers').with.lengthOf(6);
expect(container1.checkTemperature(1,4)).to.equal('temperature ok');
expect(container1.checkTemperature(1,2)).to.equal('high temperature');
expect(container1.checkTemperature(2,5)).to.equal('temperature ok');
expect(container1.checkTemperature(0,0)).to.equal('high temperature');
expect(container1.checkTemperature(4,5)).to.equal('low temperature');
expect(container1.checkTemperature(3,3)).to.equal('temperature ok');

//creating container2
const container2 = new Container(5);
expect(container2.thermometer).to.equal(5);

//add beers in container2
const iterator2 = beers.values();
for (let value of iterator2) {
    container2.addBeer(value);
}
expect(container2.beers).to.exist;

//creating truck
const truck1 = new Truck(2);

//add containers in truck
truck1.addContainer(container1);
truck1.addContainer(container2);

expect(truck1).to.not.be.empty;
expect(truck1.qntContainer).to.equal(2);
expect(truck1).to.have.property('containers').with.lengthOf(2);

console.log('OK');
