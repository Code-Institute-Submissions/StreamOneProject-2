// Directive used to iterate questions using ng-repeat

angular.module('TriviaDirective', [])
	.directive('triviaAnswer', function() {
		return{
			restrict: 'E',
			templateUrl: 'templates/directives/answerChoices.html'
		}	
	});