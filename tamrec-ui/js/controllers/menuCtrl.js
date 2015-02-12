ngTamrec = angular.module('ngTamrec');


ngTamrec.controller('MenuCtrl', function ($scope, $mdSidenav, $log) {

    $scope.menuItems = [
        {title: 'RELEASES', state: ''},
        {title: 'PODCASTS', state: 'podcastsPage', ico: 'menuPodcasts'},
        {title: 'NEWS', state: 'newsPage', ico: 'menuPodcasts'},
        {title: 'EVENTS', state: ''},
        {title: 'MERCH', state: ''},
        {title: 'MATERIALS', state: ''},
        {title: 'ARTISTS', state: ''},
        {title: 'MEDIA', state: ''},
    ];

    $scope.close = function() {
        $mdSidenav('menu').close()
        .then(function() {
            $log.debug("close RIGHT is done");
        });
    };

});
