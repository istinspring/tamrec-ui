ngTamrec = angular.module('ngTamrec');

ngTamrec.controller('IndexCtrl', function ($scope, $mdSidenav, $log) {
    $scope.message = "Hello!";
    $scope.toggleMenu = function() {
        $mdSidenav('menu').toggle()
        .then(function(){
            $log.debug("toggle RIGHT is done");
        });
    };
});
