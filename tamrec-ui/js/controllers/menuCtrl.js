ngTamrec = angular.module('ngTamrec');


ngTamrec.controller('MenuCtrl', function ($scope, $mdSidenav, $log) {

    $scope.menuItems = [
        'RELEASES',
        'PODCASTS',
        'NEWS',
        'MERCH',
        'MATERIALS',
        'ARTISTS',
        'EVENTS',
        'MEDIA'
    ];

    $scope.close = function() {
        $mdSidenav('menu').close()
        .then(function(){
            $log.debug("close RIGHT is done");
        });
    };
});
