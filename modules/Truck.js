module.exports = class Truck{
    constructor(qntContainer){
        this.qntContainer = qntContainer;
        this.containers = [];
    }

    addContainer(container){
        this.containers.push(container);
    }

    getSummary(){
        let summary = "";
        let iterator = this.containers.values();
        for (let value of iterator) {
            summary += value.getSummary() + '\n';
        }
        return `\nTruck with ${this.qntContainer} containers \n${summary}`;
    }

}