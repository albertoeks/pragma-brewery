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
            return 'low temperature';
        }else if(maxDegree < this.thermometer){
            return 'high temperature';
        } else{
            return 'temperature ok';
        }
    }

    getSummary(){
        let summary = "";
        let iterator = this.beers.values();
        for (let value of iterator) {
            summary += `${value.getSummary()} | Status: ${this.checkTemperature(value.minDegree, value.maxDegree)}\n`;
            //summary += value.getSummary() + '\n';
        }
        return `Container temperature: ${this.thermometer}°C \nBeers:\n${summary}`;
    }
}