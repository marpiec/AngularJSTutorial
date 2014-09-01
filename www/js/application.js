var app = angular.module("application", []);



app.controller("HomePageController", function($scope) {

    $scope.books = [{title: "Effective Java"},
                    {title: "Java Concurrency in Practice"},
                    {title: "Java Performance the Definitive Guide"},
                    {title: "Clean Code"}];

});
