angular.module('RouteControllers', [])
	.controller('HomeController', function($scope){
		$scope.title = "Welcome to the Trailer Park Boys Fan Page";
	})


	.controller('MailController', function($scope){
		// list of options to choose from of addressees //
		$scope.names = ['Ricky', 'Julian', 'Bubbles', 'Corey', 'Trevor', 'Jacob', 'Jim Lahey', 'Randy', 'Sarah', 'Trinity', 'Lucy'];

		// checks to see if fields are empty on form before sending modal //
		$scope.launchModal = function(){
			if($("#nameInput").val() !="" && $("#emailInput").val() !="" && $("#messageInput").val() !="") {
				$("#tpbModal").modal('show');
			}
		}	
	})

	.controller('TriviaController', function($scope){
		$scope.launchTrivia = function(){
			document.getElementById("triviaOpening").style.display = "none";
			document.getElementById("triviaContent").style.display = "block";
		}

		$scope.count = 0;

		var updateCount = function(){
			$scope.count++;
		}


		$scope.nextQuestion = function(){
			if (document.getElementById("T1").style.display = "block"){
				if(document.getElementById("A1").checked){
					updateCount();
				}
				document.getElementById("T2").style.display = "block";
				document.getElementById("T1").style.display = "none";
			}

		}

		$scope.QnA = [

				"What is a tradition that every season tries to follow?",
				"Which character is the real daughter of Jim Lahey?"
		]

		$scope.Answers = [

			{answer: "Ricky will wear the same shirt through the whole season",
			 wrong1: "Bubbles glasses get a little bit thicker every season",
			 wrong2: "Ricky will use a new swear word each season",
			 wrong3: "Randy's gut gets a little bit bigger every season"},

			{answer: "Sara",
			 wrong1: "Trinity",
			 wrong2: "Susan",
			 wrong3: "Lucy"}
		]

	});