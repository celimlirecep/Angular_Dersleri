app.controller("myController",function ($scope) {
    $scope.fullName=function () {
        return $scope.firstName+ " "+$scope.lastName
    }
})