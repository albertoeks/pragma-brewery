module.exports = class BeerFactory{
    static create(type){
        if(type == 'Pilsner')
            return new Beer(type, 4, 6);
        if(type == 'IPA')
            return new Beer(type, 5, 6);
        if(type == 'Lager')
            return new Beer(type, 4, 7);
        if(type == 'Stout')
            return new Beer(type, 6, 8);
        if(type == 'Wheat Beer')
            return new Beer(type, 3, 5);
        if(type == 'Pale Ale')
            return new Beer(type, 4, 6);
    }
}

class Beer{
    constructor(name, minDegree, maxDegree){
        this.name = name;
        this.minDegree = minDegree;
        this.maxDegree = maxDegree;
    }

    getSummary(){
        return `Beer ${this.name} -> refrigeration between ${this.minDegree}°C - ${this.maxDegree}°C`;
    }
}