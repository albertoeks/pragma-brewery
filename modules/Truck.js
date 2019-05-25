module.exports = class Truck{
    constructor(qntContainer){
        this.qntContainer = qntContainer;
        this.containers = [];
    }

    addContainer(container){
        this.containers.push(container);
    }

}