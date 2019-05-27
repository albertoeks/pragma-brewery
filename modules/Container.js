module.exports = class Container{
    constructor(thermometer){
        this.thermometer = thermometer;
        this.beers = [];
    }

    addBeer(beer){
        this.beers.push(beer);
    }

    checkTemperature(minDegree, maxDegree){
        if(minDegree > this.thermometer){
            return 'temperature below';
        }else if(maxDegree < this.thermometer){
            return 'temperature above';
        } else{
            return 'temperature ok';
        }
    }
}