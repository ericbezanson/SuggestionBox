var app = angular.module("suggestionbox", ["ngRoute"]);
app.config(function($routeprovider){
    $routeprovider
        .when('/', {
            controller: 'MainController',
            templateUrl: 'main.html'
        })
        .when ('/:id',{
            controller: 'PostController',
            templateUrl: 'post.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});