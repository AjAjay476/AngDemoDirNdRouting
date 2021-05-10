app.directive("myFirstDir", function () {
    function preLinkFunction(scope, element, atttr) {
        scope.dirVar = "Dir Dummy Data";
    };
    function postLinkFunction(scope, element, atttr) {
        scope.$watch("dataFromCtrl", function () {
            scope.dirVar = scope.dataFromCtrl;
        });
    };
    return {
        restrict: 'AECM',
        replace: true,
        template: '<div>{{dirVar}}</div>',
        //link: preLinkFunction,
        link: {
            pre: preLinkFunction, 
            post: postLinkFunction 
        },
        scope: {

            prevebooked
                : '='

            //dirtxt2: '@'
            //dirtxt1: '@'

            // cntrlfucn: '&'
            //@ , - text assigning

            //= ,  - two binding

            //&    - Expression passing
        },
    };
});



//app.directive("onEnter", function () {
//    function linkFunction(scope, element, atttr) {
//        element.bind('keypress keydown keyup', function (event) {
//            if (event.keyCode == 13) {
//                scope.$apply(sign);
//                scope.$eval(sign)
//            }
//        })
//    }
//    return {
//        restrict: 'AECM',
//        replace: true,
//        link: linkFunction,
//    };
//});