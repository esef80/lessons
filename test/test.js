
/*describe("missingNumber", function() {

    it("возводит в n-ю степень", function() {
        assert.equal(pow(2, 3), 8);
    });

});*/
describe("Permutation check", function() {
    it("check is a current array permutation and corresponds to the condition as sequence containing each element from 1 to N once", function() {
        assert.equal(permutation([4, 1, 3]), 0);
        assert.equal(permutation([4, 1, 3, 4]), 0);
        assert.equal(permutation([4]), 0);
        assert.equal(permutation([1]), 1);
        assert.equal(permutation([1,4,2,3]), 1);
    });

});
describe("Permutation missing elem", function () {
    it("return element is missin at permutation array", function() {
        assert.equal(permMissingElem([1,4,2,3]), 5);
        assert.equal(permMissingElem([1,5,2,3]), 4);
        assert.equal(permMissingElem([1]), 2);
        assert.equal(permMissingElem([5,4,2,3]), 1);
        assert.equal(permMissingElem([]), 1);
    });
});
describe("TapeEquilibrium", function() {

    it(" returns the minimal difference that can be achieved.", function() {
        assert.equal(tapeEquilibrium([3,1,2,4,3]), 1);
        assert.equal(tapeEquilibrium([-1000,1000]), 2000);
        assert.equal(tapeEquilibrium([1,1]), 0);
    });

});
describe("Frog jump", function() {

    it("return minimal number of jump for move from point A to B. Function take three integer number (A,B,D), where 'D' is a distance a frog jump", function() {
        assert.equal(frogJump(10,85,30), 3);
        assert.equal(frogJump(10,10,30), 0);
        assert.equal(frogJump(10,10000000,30), 333333);
        assert.equal(frogJump(0,1000,1000), 1);
    });

});
describe("FrogRiverOne", function() {

    it("return min value when frog can to go over to another side of the river ", function() {
        assert.equal(frogRiverOne(5, [1,3,1,4,2,3,5,4]), 6);
        assert.equal(frogRiverOne(3, [1,3,1,4,2,3,5,4]), 4);
        assert.equal(frogRiverOne(1, [2,3,6,4,2,3,5,1]), 7);
        assert.equal(frogRiverOne(1, [1,3,6,4,2,3,5,1]), 0);
        assert.equal(frogRiverOne(5, [3]), -1);
    });
});
describe(" this code to do it that \"FrogRiverOne\" but another method", function() {

    it("frogRiverOne2", function() {
        assert.equal(frogRiverOne2(5, [1,3,1,4,2,3,5,4]), 6);
        assert.equal(frogRiverOne2(3, [1,3,1,4,2,3,5,4]), 4);
        assert.equal(frogRiverOne2(1, [2,3,6,4,2,3,5,1]), 7);
        assert.equal(frogRiverOne2(1, [1,3,6,4,2,3,5,1]), 0);
        assert.equal(frogRiverOne2(5, [3]), -1);
    });

});
