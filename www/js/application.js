var app = angular.module("application", []);



app.controller("HomePageController", function($scope, $http, booksService) {

    $scope.booksLoaded = false;
    $scope.books = [];

    $scope.loadBooks = function() {
        booksService.getBooks(function(books) {
            $scope.books = books;
            $scope.booksLoaded = true;
        }, function() {
            alert("Error communication with server!");
        });
        booksLoaded = true;
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
           scope.titleFormatted = scope.book.title.toUpperCase().replace(" ", "-");

       }
   }
});


app.factory("booksService", function($http) {
    return {
       getBooks: function(success, failure) {
           $http.get("https://gist.githubusercontent.com/marpiec/90c988b3a18a96d80215/raw/c67284bc5f72b48a3812f86b11415c01642d6f32/BestJavaBooks.json").success(function(data, status, headers) {
               success(data);
           }).error(function (data, status, headers, config) {
               failure();
           });
       }
   }
})
