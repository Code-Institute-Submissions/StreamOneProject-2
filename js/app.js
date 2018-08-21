angular.module('TPBfanpage', ['ngRoute', 'RouteControllers', 'TriviaDirective']);

angular.module('TPBfanpage').config(function($locationProvider, $routeProvider){
	$locationProvider.html5Mode(true);  //Enable href routing w/o hashes

	$routeProvider.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'HomeController'
	})
	.when('/trivia', {
		templateUrl: 'templates/trivia.html',
		controller: 'TriviaController'
	})
	.when('/tours', {
		templateUrl: 'templates/tours.html',
		controller: 'ToursController'
	})
	.when('/fanMail', {
		templateUrl: 'templates/fanMail.html',
		controller: 'MailController'
	});
});
