module.exports = class Beer{
    constructor(name, minDegree, maxDegree){
        this.name = name;
        this.minDegree = minDegree;
        this.maxDegree = maxDegree;
    }

    getMinDegree(){
        return this.minDegree;
    }

    getMaxDegree(){
        return this.minDegree;
    }
}