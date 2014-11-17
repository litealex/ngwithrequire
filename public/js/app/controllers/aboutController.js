define(function() {
    return ['$scope', 'user', function($scope, user) {
        $scope.name = user.name;
    }];
});
