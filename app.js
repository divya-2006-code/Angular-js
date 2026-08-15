var app=angular.module("app1" , ['ngRoute']);
app.config(function ($routeProvider)
{
	$routeProvider
	.when("/home" , {
		templateUrl : "home.html",
	controller : "c1"})
	.when("/about" , {
		templateUrl : "about.html",
	controller : "c2"})
	.when("/user1" , {
		templateUrl : "user1.html",
	controller : "c3"})
    .otherwise ({
        redirectTo : "/home"
	});		
});

app.controller("c1" , function ($scope)
{ 
        $scope.display = "Welcome to home page";		
});
app.controller("c2" , function ($scope)
{ 
        $scope.display = "Welcome to about page";		
});
app.controller("c3" , function ($scope)
{ 
        $scope.display = "Welcome to user page";		
});

