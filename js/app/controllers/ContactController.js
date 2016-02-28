function ContactController(nyc, boston) {
	nyc.name = 'Bill Gates';

	boston(function () {
		nyc.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject=['$scope', '$timeout']

angular
	.module('app')
	.controller('ContactController', ContactController);
