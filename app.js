const Beer = require('./modules/Beer');
const Container = require('./modules/Container');
const Truck = require('./modules/Truck');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const beers = [
  Beer.create('Pilsner'),
  Beer.create('IPA'),
  Beer.create('Lager'), 
  Beer.create('Stout'), 
  Beer.create('Wheat Beer'), 
  Beer.create('Pale Ale')
];

console.log('Setup Truck');
var truck;

function readContainers(containerCount, curr = 0) {
    if (containerCount == curr) {
      readline.close();
      return;
    }

    readline.question("Set thermometer container " + (curr + 1) + ": ", function (answer2) {
      container = new Container(answer2);
      const iterator = beers.values();
      for (let value of iterator) {
        container.addBeer(value);
      }
      truck.addContainer(container);
      readContainers(containerCount, curr + 1);
    });
}

readline.question("How many containers? ", function (answer1) {
  truck = new Truck(answer1);
  readContainers(parseInt(answer1));
});

readline.on('close', function () {
  console.log(truck.getSummary());
});