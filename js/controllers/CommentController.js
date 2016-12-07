app.controller('CommentController', ['$scope','$routeParams','suggestions', function($scope, $routeParams, suggestions) {
    $scope.post = suggestions.posts[$routeParams.id];

    $scope.addComment = function(){
        var comment = $scope.comment;

        $scope.post.comments.push({
        body: '',
        upvotes: 0,
    });
    }
    $scope.upVote = function(comments) {
  	comments.upvotes += 1;
  };        
}])