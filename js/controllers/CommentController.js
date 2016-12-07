app.controller('CommentController', ['$scope','$routeParams','suggestions', function($scope, $routeParams, suggestions) {
    $scope.post = suggestions.posts[$routeParams.id];

    $scope.addComment = function(){
        $scope.posts.comments.push({
        body: '',
        upvotes: 0,
    });
    }
    $scope.upVote = function(comments) {
  	posts.upvotes += 1;
  };        
}])