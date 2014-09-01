var app = angular.module("application", []);



app.controller("HomePageController", function($scope, $http) {

    $scope.booksLoaded = false;
    $scope.books = [];

    $scope.loadBooks = function() {
        $http.get("https://gist.githubusercontent.com/marpiec/90c988b3a18a96d80215/raw/c67284bc5f72b48a3812f86b11415c01642d6f32/BestJavaBooks.json").success(function(data, status, headers) {
            $scope.books = data;
            $scope.booksLoaded = true;
        }).error(function (data, status, headers, config) {
            alert("Error communication with server!")
        });
    }

});



app.directive("mpNiceBookTitle", function() {
    return {
       scope: {
           book : "="
       },
       restrict: "E",
       template:"Title: {{ titleFormatted }} ",
       link: function(scope) {
            alert(scope.book.title);
           scope.titleFormatted = scope.book.title.toUpperCase().replace(" ", "-");

       }
   }
});
