var app = angular.module('rtfm')

app.controller('threadsCtrl', function($scope, $rootScope, threadThing) {
$scope.test = 'testing threads';

// $scope.threads = ThreadService.getThreads();
// console.log($scope.threads.$asArray());
$scope.threads = threadThing.$asArray();

$scope.threads.$loaded().then(function(threads) {
	console.log(threads)
})

$scope.createThread = function(title) {
	$scope.threads.$add({
		username: $rootScope.user,
		title: title
	})
}

})