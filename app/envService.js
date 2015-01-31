var app = angular.module('rtfm')
app.service('enviromentService', function($window) {
	this.getEnv = function() {
		return $window.env;
	}

	this.saveUserName = function(username) {
		$window.localStorage.setItem('username', username);

	}

	this.getUserName = function(username) {
		return $window.localStorage.getItem('username')
	}
})