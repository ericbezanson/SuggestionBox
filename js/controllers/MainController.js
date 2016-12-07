app.controller('MainController', ['$scope','suggestions', function($scope, suggestions) {
$scope.posts = suggestions.posts;

$scope.addSuggestion = function() {
 
//if input empty, don't submit
if(!$scope.title || $scope.title === "") {
    return;
    }
 
    //push suggestion posts in suggestions.js
    $scope.posts.push({
        id: $scope.posts.length,
        title: $scope.title,
        upvotes: 0,
        comments: []
    });
 
    //after submit, clear input
    $scope.title = '';
    };
//function to add an upvote to a post
$scope.upVote = function(posts) {
  	posts.upvotes += 1;
  };

}]);