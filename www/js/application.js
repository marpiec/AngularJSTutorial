var app = angular.module("application", []);



app.controller("HomePageController", function($scope) {

    $scope.userName = "Marcin";

    $scope.calculation = {a: 1, b: 2}

    $scope.calculation.c = $scope.calculation.a + $scope.calculation.b;

});
