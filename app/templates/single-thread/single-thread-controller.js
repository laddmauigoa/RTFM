var app = angular.module('rtfm')
app.controller('singleThreadCtrl', function($scope, threadRef, commentsRef) {
	var thread = threadRef.$asObject();
	thread.$bindTo($scope, 'thread');
	 $scope.comments = commentsRef.$asArray();


    $scope.createComment = function (username, text) {
      $scope.comments.$add({
        username: localStorage.username,
        text: text
      }); $scope.newCommentText = ''
    };
	$scope.test = 'testing single thread'
})