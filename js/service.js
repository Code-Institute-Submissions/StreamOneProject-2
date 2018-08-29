// angular service used to randomize the order of an array
// learned from searching online how to randomize array contents with javascript

angular.module('RandomService', [])
	.service('randomizer', function(){

		this.randomArray = function(array){
			
			// executes for every item in array
			for (let i = array.length - 1; i > 0; i--) {

				// gets and sets a random index placement
				let j = Math.floor(Math.random() * (i + 1));

				// sets temporary variable to the array value of current index
				let temp = array[i];

				// changes index of array to new randomized index
				array[i] = array[j];

				// changes the randomized index back to the old index as to not duplicate
				array[j] = temp;
			}

			// returns the new array
			return array;	
		}
	});