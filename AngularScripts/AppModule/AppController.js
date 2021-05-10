app.controller("myCntrl", function ($scope, $state) {

    $scope.ctrlVar = "Controller Text";

    $scope.updateCtrlData = function (txtToUpdate) {
        //$scope.ctrlVar = {};
    }

    $scope.signIn = function () {

        $state.transitionTo("route1");
    }
    
});
























//$scope.openRoute1 = function () {
    //    $state.transitionTo("route1", { navigationFrom:"is from route page 1"});
    //}