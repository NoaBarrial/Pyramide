class Pyramide {

    constructor(length,hight){
        this.length = length;
        this.hight = hight;
    }

    getSideLength (){

        return this.length;
    }

    getSurfaceArea(){

        return (Math.sqrt(3)/4 * this.length**2 + (3/2) * this.length * this.hight)
    }



}

module.exports = {
    Pyramide:Pyramide
}