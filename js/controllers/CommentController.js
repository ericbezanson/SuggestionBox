app.controller('CommentController', ['$scope','$routeParams','suggestions', function($scope, $routeParams, suggestions) {
    $scope.post = suggestions.posts[$routeParams.id];

    $scope.addComment = function(){
        var comment = $scope.comments;
        if (!$scope.body || $scope.body === '') {
                return;
            }

        $scope.post.comments.push({
        body: $scope.body,
        upvotes: 0
    });
    }
    $scope.upVote = function(comments) {
  	comments.upvotes += 1;
  };        
}])

