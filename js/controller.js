angular.module('RouteControllers', [])
	.controller('HomeController', function($scope){
		// not necessary, but used initally getting a handle on how to use controllers //
		$scope.title = "Welcome to the Trailer Park Boys Fan Page";
	})


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

	.controller('TriviaController', function($scope, randomizer){

		//checks game-state and shows accordingly
		$scope.isGameTrue = false;
		$scope.isTitleTrue = false;
		$scope.isScoreTrue = false;

		$scope.isChecked = false;
		
		$scope.count = 0;
		$scope.answerCount = 0;

		$scope.answerArray = [];
		var newArray = [0, 1, 2, 3];

		$scope.launchTrivia = function(){

			$scope.isGameTrue = true;
			$scope.isTitleTrue = true;
			newArray = randomizer.randomArray(newArray);
			$scope.answerArray = newArray;
		}

		$scope.trackAnswers = function(){
			$scope.isChecked = $('input:checked').val();
			console.log($scope.isChecked);
		}

		$scope.nextQuestion = function(){
			
			if ($('#ans1').prop('checked') || $('#ans2').prop('checked') 
				|| $('#ans3').prop('checked') || $('#ans4').prop('checked')) {			

				$scope.count++
				console.log($scope.isChecked)
				if ($scope.isChecked == 'true'){
					$scope.answerCount++;
					$scope.answerArray = randomizer.randomArray(newArray);
					console.log('thishappened');
				}
					
				else if ($scope.count > 9){
					$scope.isGameTrue = false;
					$scope.isScoreTrue = true;
					$scope.count = 0;
				}

				$('#ans1').prop('checked', false);
				$('#ans2').prop('checked', false);
				$('#ans3').prop('checked', false);
				$('#ans4').prop('checked', false);

				console.log($scope.isChecked)
				console.log($scope.answerCount)

			}		
		}

		$scope.restartGame = function(){

			$scope.isTitleTrue = false;
			$scope.isScoreTrue = false;
			$scope.answerCount = 0;
		
		}


	    //Questions made using IMDB trivia page as reference
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