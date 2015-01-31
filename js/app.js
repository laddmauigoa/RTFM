var app = angular.module('rtfm', ['ngRoute', 'firebase'])

app.config(function($routeProvider) {
	$routeProvider
	.when('/login', {
		templateUrl: '/app/templates/login/login-view.html',
		controller: 'loginCtrl'
	})

	.when('/threads', {
		templateUrl: 'app/templates/threads/threads-views.html',
		controller: 'threadsCtrl',
		resolve: {
			threadThing: function(ThreadService) {
				return ThreadService.getThreads();
			}
		}
	})

	.when('/thread/:threadId', {
		templateUrl: 'app/templates/single-thread/single-thread-view.html',
		controller: 'singleThreadCtrl',
		resolve: {
			threadRef: function (ThreadService, $route) {
      return ThreadService.getThread($route.current.params.threadId);
    },
    		commentsRef: function (ThreadService, $route) {
      return ThreadService.getComments($route.current.params.threadId);
    }
		}
	})

	.otherwise({
		redirectTo:'/login'
	})
})
.run(function($rootScope, $location, enviromentService) {
	$rootScope.$on('$routeChangeStart', function(event, next, current) {
		if(enviromentService.getUserName()) {
			$rootScope.user = enviromentService.getUserName();
		} else {
			$location.path('/login');
		}
	})
})