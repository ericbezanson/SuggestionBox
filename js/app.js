var app = angular.module("suggestionbox", ["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            controller: 'MainController',
            templateUrl: 'views/main.html'
        })
        .when ('/suggestion/:id',{
            controller: 'CommentController',
            templateUrl: 'views/suggestion.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});