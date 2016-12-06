var app = angular.module("suggestionbox", ["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            controller: 'MainController',
            templateUrl: 'views/main.html'
        })
        .when ('/:id',{
            controller: 'PostController',
            templateUrl: 'views/post.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});