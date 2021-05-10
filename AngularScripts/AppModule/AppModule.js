//var app = angular.module("myApp", ["ngRoute", "ui.router","oc.lazyLoad"]);
//var app = angular.module("myApp", ["ngRoute"]);
var app = angular.module("myApp", ["ui.router"]);

app.config(function ($stateProvider) {
    var pages = [
        {
            "name": "Home",
            "url": "Home",
            "templateUrl": "AngularScripts/AppModule/home.html",
        },
        {
            "name": "route1",
            "url": "route1/:navigationFrom",
            "templateUrl": "AngularScripts/AppModule/txtRoute1.html",
            //"controller": "txtRoute1Controller",
            "FilesToDownLoad": ['AngularScripts/AppModule/txtRoute1Controller.js', '', '']
        },
        {
            "name": "route2",
            "url": "route2",
            "templateUrl": "AngularScripts/AppModule/txtRoute2.html",
        }
    ];

    angular.forEach(pages, function (value) {
        var state = {
            name: value.name,
            url: value.url,
            views: {
                pageView: {
                    templateUrl: value.templateUrl
                }
            },
            params: {
                navigationFrom: value.navigationFrom,
            }
        };

        $stateProvider.state(state);

    });
});

//app.config(function ($routeProvider) {
//    $routeProvider
//        .when("/", {
//            templateUrl: "AngularScripts/AppModule/home.html"
//        })
//        .when("/route1/:navigationFrom", {
//            templateUrl: "AngularScripts/AppModule/txtRoute1.html",
//            controller:"txtRoute1Controller"
//        })
//        .when("/route2", {
//            templateUrl: "AngularScripts/AppModule/txtRoute2.html"
//        })
//        .otherwise({
//            redirectTo: '/',
//        });
//});

