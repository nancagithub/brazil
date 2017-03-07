var app = angular.module('myApp', ['ngRoute', 'ngAnimate']);

/* Configure the Routes */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    // Pages
    .when("/beaches", {templateUrl: "partials/beaches.html", controller: "PageCtrl"})
    .when("/packages", {templateUrl: "partials/packages.html", controller: "PageCtrl"})
    .when("/cities", {templateUrl: "partials/cities.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
    // Blog
    .when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
    .when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
    // else home
    .otherwise("/", {templateUrl: "partials/home.html", controller: "PageCtrl"});

   // $locationProvider.html5Mode(true);

}]);

/* Controls the Blog */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  console.log("Blog Controller reporting for duty.");
});

/* Controls all other Pages */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
    console.log("Page Controller reporting for duty.");

    //  $('.nav a').click(function(){
    //      $('.navbar-collapse').collapse('hide');
    // });

});