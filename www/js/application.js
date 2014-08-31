var app = angular.module("application", []);



app.controller("HomePageController", function($scope) {

    $scope.myName = "";

    $scope.sayName = function() {
        if($scope.myName == "Heisenberg") {
            $scope.response = "Correct!";
        } else {
            $scope.response = "No!";
        }
    }

});
