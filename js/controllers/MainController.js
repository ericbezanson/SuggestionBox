app.controller('MainController' ['$scope','suggestions', function($scope, suggestions) {
$scope.posts = suggestions.posts;


}]);