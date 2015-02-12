ngTamrec = angular.module('ngTamrec');

ngTamrec.controller('DummyCtrl', function ($scope, cfpLoadingBar) {
    $scope.start = function() {
        cfpLoadingBar.start();
    };
    $scope.complete = function () {
        cfpLoadingBar.complete();
    };
});
