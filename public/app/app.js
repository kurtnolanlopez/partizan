var app = angular.module('app', ['ngResource','ngRoute']);

app.config(function($routeProvider){

    $routeProvider
        .when('/', { templateUrl : '/partials/main.html', controller: 'mainCtrl' ,controllerAs: "main" });
});


app.controller('mainCtrl', function(){
    var main = this;

    main.myVar = "Hello Angular";
});