var app = angular.module('rtfm')

app.service('ThreadService', function($firebase, enviromentService) {
	var firebaseUrl = enviromentService.getEnv().firebase;
	this.getThreads = function() {
		return $firebase(new Firebase(firebaseUrl + '/threads'))
	}

	this.getThread = function(id) {
		return $firebase(new Firebase(firebaseUrl + '/threads/' + id))
	}

	this.getComments = function (id) {
        return $firebase(new Firebase(firebaseUrl + '/threads/' + id + '/comments'));
      }

})




// var url = enviromentService.getEnv().firebase;
// 		var ref = new Firebase(url);
// 		var thing = $firbase(ref)
// 		var thingObject = thing.$asObject();
// 		var thingArray = thing.$asArray();
// firebase progression!!!!! to turn into firbase thingsss!
