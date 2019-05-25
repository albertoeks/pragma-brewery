module.exports = class Container{
    constructor(thermometer){
        this.thermometer = thermometer;
        this.beers = [];
    }

    addBeer(beer){
        this.beers.push(beer);
    }

    checkTemperature(){
        let iterator = this.beers.values();
        for (let beer of iterator) {
            if(beer.minDegree > this.thermometer){
                console.log('temperature below');
            }else if(beer.maxDegree < this.thermometer){
                console.log('temperature above');
            } else{
                console.log('temperature ok');
            }
        }

    }
}