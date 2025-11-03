class Pyramide {

    constructor(length,height){
        this.length = length;
        this.hight = height;
    }

    getSideLength (){

        return this.length;
    }

    getSurfaceArea(){

        return (Math.sqrt(3)/4 * this.length**2 + (3/2) * this.length * Math.sqrt(this.height**2+(this.length * Math.sqrt(3)) / 6)**2);
    }

    getVolume(){

        return (Math.sqrt(3) / 12) * this.length**2 * this.height;

    }



}

module.exports = {
    Pyramide:Pyramide
}