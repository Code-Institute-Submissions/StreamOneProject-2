angular.module('TriviaDirective', [])
	.directive('triviaOne', function() {
		return{
			restrict: 'E',
			templateUrl: 'templates/directives/trivia1.html'
		}		
	})
	.directive('triviaTwo', function() {
		return{
			restrict: 'E',
			templateUrl: 'templates/directives/trivia2.html'
		}		
	});