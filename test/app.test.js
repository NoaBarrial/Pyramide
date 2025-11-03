const Pyramide = require('../src/app').Pyramide;
const expect = require('chai').expect;

describe('Phase de test pour les fonction de la pyramide', function() {
    it('1. The side length of the Pyramide', function(done) {
        let p1 = new pyramide(2);
        expect(p1.getSideLength()).to.equal(2);
        done();
    });
    
    it('2. The surface area of the Cube', function(done) {
        let c2 = new Cube(5);
        expect(c2.getSurfaceArea()).to.equal(150);
        done();
    });
    
    it('3. The volume of the Cube', function(done) {
        let c3 = new Cube(7);
        expect(c3.getVolume()).to.equal(343);
        done();
    });
    
});