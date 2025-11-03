const Pyramide = require('../src/app').Pyramide;
const expect = require('chai').expect;

describe('Phase de test pour les fonction de la pyramide', function() {
    it('1. The side length of the Pyramide', function(done) {
        let p1 = new Pyramide(2,5);
        expect(p1.getSideLength()).to.equal(2);
        done();
    });
    
    it('2. The surface area of the Pyramide', function(done) {
        let p2 = new Pyramide(5,8);
        expect(p2.getSurfaceArea()).to.equal(71.8003);
        done();
    });
    
    it('3. The volume of the Pyramide', function(done) {
        let p3 = new Pyramide((5,8));
        expect(p3.getVolume()).to.equal(28.8674);
        done();
    });
    
});