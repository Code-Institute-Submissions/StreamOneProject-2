angular.module('RouteControllers', [])

	//CONTROLLER FOR HOME PAGE //
	.controller('HomeController', function($scope){
		// not necessary, but used initally getting a handle on how to use controllers //
		$scope.title = "Welcome to the Trailer Park Boys Fan Page";
	})

	// CONTROLLER FOR MAIL PAGE //
	.controller('MailController', function($scope){
		// list of options to choose from of addressees in fan mail page //
		$scope.names = ['Ricky', 'Julian', 'Bubbles', 'Corey', 'Trevor', 'Jacob', 'Jim Lahey', 'Randy', 'Sarah', 'Trinity', 'Lucy'];

		// checks to see if fields are empty on form before sending modal //
		$scope.launchModal = function(){
			if($("#nameInput").val() !="" && $("#emailInput").val().includes('@' && '.') && $("#messageInput").val() !="") {
				$("#tpbModal").modal('show');
			}
		}
	})

	// CONTROLLER FOR TRIVIA PAGE //
	.controller('TriviaController', function($scope, randomizer){

		// checks game-state and shows accordingly
		$scope.isGameTrue = false;
		$scope.isTitleTrue = false;
		$scope.isScoreTrue = false;

		// changes based on which answer is chosen / stores correct/incorrect answer //
		$scope.isChecked = false;
		
		// counters used to determine which question should be displayed and how many answers the user gets correct //
		$scope.count = 0;
		$scope.answerCount = 0;

		// a template array that will get a random order of new array below it //
		$scope.answerArray = [];
		var newArray = [0, 1, 2, 3];

		// function executes when user clicks to start trivia game //
		$scope.launchTrivia = function(){

			// initiates trivia game html //
			$scope.isGameTrue = true;
			$scope.isTitleTrue = true;

			// initiates first random array so answers always display in a different order //
			newArray = randomizer.randomArray(newArray);
			$scope.answerArray = newArray;
		}

		// function executes every time a user clicks a radio button on trivia game //
		$scope.trackAnswers = function(){

			// changes the value to false or true depending on which answer is correct //
			$scope.isChecked = $('input:checked').val();
		}

		// function executes every time the submit button is clicked //
		$scope.nextQuestion = function(){
			
			// uses Jquery to check to see if a radio button option has been clicked //
			if ($('#ans1').prop('checked') || $('#ans2').prop('checked') 
				|| $('#ans3').prop('checked') || $('#ans4').prop('checked')) {			

				// increases count, initiating next question/answers //
				$scope.count++

				// checks to see if answer is correct //
				if ($scope.isChecked == 'true'){

					// adds +1 to score and initiates a new random array to mix up next set of answers //
					$scope.answerCount++;
					$scope.answerArray = randomizer.randomArray(newArray);
				}
				
				// checks to see if all questions have been answered //	
				else if ($scope.count > 9){

					// stops game and shows score screen html and resets back to first question//
					$scope.isGameTrue = false;
					$scope.isScoreTrue = true;
					$scope.count = 0;
				}

				// uses jquery to set all radio buttons to unchecked state //
				$('#ans1').prop('checked', false);
				$('#ans2').prop('checked', false);
				$('#ans3').prop('checked', false);
				$('#ans4').prop('checked', false);
			}		
		}

		// function executes when user chooses to restart the trivia game //
		$scope.restartGame = function(){

			// hides score screen html and shows title screen to re-initiate game, also resets answer counter //
			$scope.isTitleTrue = false;
			$scope.isScoreTrue = false;
			$scope.answerCount = 0;
		
		}


	    // Questions made using IMDB trivia page as reference //
	    $scope.QA = {
			questions: [
			//	1ST QUESTION //
				"What is a tradition that every season tries to follow?",
			//	2ND QUESTION //
				"Which character is the real daughter of Jim Lahey?",
			//	3RD QUESTION //
				"Who is Donny (the loudmouth trailer park resident) voiced by?",
			//	4TH QUESTION //
				"Which young actress got her start from a role in Trailer Park Boys?",
			//	5TH QUESTION //	
				"Which character has a known last name?",
			//	6TH QUESTION //	
				"How many total years in jail have the boys been in?",
			//	7TH QUESTION //
				"Who owns the car that Jim Lahey drives?",
			//	8TH QUESTION //	
				"What is Bubbles wrestling persona?",
			//	9TH QUESTION //	
				"What happened to Ricky's father?",
			//	10TH QUESTION //	
				"What is not a past profession of Bubbles?",
			],

			// each answer set stored as an array of 4 objects to also track which one is correct //
			answers:[
				//	1ST ANSWERS //
				[{ans: "Ricky will wear the same shirt through the whole season", isCorrect: true},
				{ans: "Bubbles glasses get a little bit thicker every season", isCorrect: false},
				{ans: "Ricky will use a new swear word each season", isCorrect: false},
				{ans: "Randy's gut gets a little bit bigger every season", isCorrect: false}],

				//	2ND ANSWERS //
				[{ans: "Sara", isCorrect: true},
				{ans: "Lucy", isCorrect: false},
				{ans: "Trinity", isCorrect: false},
				{ans: "Susan", isCorrect: false}],

				//	3RD ANSWERS //
				[{ans: "Mike Smith", isCorrect: true},
				{ans: "John Paul Tremblay", isCorrect: false},
				{ans: "Robb Wells", isCorrect: false},
				{ans: "John Dunsworth", isCorrect: false}],

				//	4TH ANSWERS //
				[{ans: "Ellen Page", isCorrect: true},
				{ans: "Megan Fox", isCorrect: false},
				{ans: "Emma Watson", isCorrect: false},
				{ans: "Mila Kunis", isCorrect: false}],

				//	5TH ANSWERS //	
				[{ans: "Ricky", isCorrect: true},
				{ans: "Bubbles", isCorrect: false},
				{ans: "Julian", isCorrect: false},
				{ans: "Randy", isCorrect: false}],

				//	6TH ANSWERS //	
				[{ans: "20-30", isCorrect: true},
				{ans: "5-10", isCorrect: false},
				{ans: "10-20", isCorrect: false},
				{ans: "30-40", isCorrect: false}],

				//	7TH ANSWERS //	
				[{ans: "Rob Wells", isCorrect: true},
				{ans: "John Paul Tremblay", isCorrect: false},
				{ans: "Mike Smith", isCorrect: false},
				{ans: "John Dunsworth", isCorrect: false}],

				//	8TH ANSWERS //	
				[{ans: "The Green Bastard", isCorrect: true},
				{ans: "The Green Hornet", isCorrect: false},
				{ans: "The Trailerpark Bastard", isCorrect: false},
				{ans: "The Bubblenator", isCorrect: false}],

				//	9TH ANSWERS //	
				[{ans: "Retired in a garbage dump in Florida", isCorrect: true},
				{ans: "Wound up in prison", isCorrect: false},
				{ans: "Passed away", isCorrect: false},
				{ans: "Still drinking at the bar", isCorrect: false}],

				//	10TH ANSWERS //	
				[{ans: "Hockey player", isCorrect: true},
				{ans: "Beer brewer", isCorrect: false},
				{ans: "Pasta sauce maker", isCorrect: false},
				{ans: "Mall strip owner", isCorrect: false}]
			]
		}

	});