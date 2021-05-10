angular.module("myApp").controller("txtRoute1Controller",function ($scope, $stateParams) {
    $scope.txt = $stateParams.navigationFrom;
});





















//angular.module("myApp").controller("txtRoute1Controller", function ($scope, $routeParams, $stateParams) {
//    $scope.navigationFrom = $routeParams.navigationFrom || $stateParams.navigationFrom;
//});