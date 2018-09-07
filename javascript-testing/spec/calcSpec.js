describe("Randomizer", function() {
	describe("randomizes an array of any length", function(){
	    it('should randomize the index of the items in the array', function() {
	    	var test1Array = [0, 1, 2, 3, 4, 5, 6];
	    	var test2Array = test1Array;
	    	var newArray = randomArray(test1Array);
	    	expect(newArray).not.toBe(test2Array);
	    });
	});
});
