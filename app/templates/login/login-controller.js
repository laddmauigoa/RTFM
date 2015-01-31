var app = angular.module('rtfm')

app.controller('loginCtrl', function($scope, $location, enviromentService) {
$scope.login = function(username) {
	enviromentService.saveUserName(username);
	$location.path('/threads')
}
})