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
		
	});