ngTamrec = angular.module('ngTamrec');

ngTamrec.controller('NavCtrl', function ($scope, $mdSidenav, $log) {
    $scope.toggleMenu = function() {
        $mdSidenav('menu').toggle()
        .then(function(){
            $log.debug("toggle RIGHT is done");
        });
    };
});
