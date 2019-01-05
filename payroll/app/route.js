app.config(function($routeProvider){
  	$routeProvider
	
	.when('/',{
		redirectTo : '/home',
	})
	.when('',{
		redirectTo : '/home',
	})
	.when('/home',{
		templateUrl :'app/view/_home.php',
		controller : 'bookingController'
	})
	.when('/blank',{
		templateUrl : 'app/views/default-box.html',
		// controller : 'bookingController'
	})
	.when('/home/:show_page',{
		templateUrl : 'app/view/_home.php',
		controller : 'bookingController'
		})
	.otherwise({
		redirectTo : '/'
	})
	
});