ngTamrec = angular.module('ngTamrec',
    [
        'ngMaterial', 'angular-loading-bar', 'ngAnimate',
        'ui.router'
    ]
);

ngTamrec.config(function($stateProvider, $urlRouterProvider) {
    // $urlRouterProvider.otherwise("/errorPage");
    $stateProvider
        .state('errorPage', {
            url: "/errorPage",
            templateUrl: "views/error.html"
        })
        .state('indexPage', {
            url: '',
            templateUrl: 'views/home.html'
        })
        .state('podcastsPage', {
            url: "/podcasts",
            templateUrl: "views/podcasts.html"
        })
        .state('newsPage', {
            url: "/news",
            templateUrl: "views/news.html"
        });
        // .state('sideNav', {
        //     url: "/podcasts",
        //     templateUrl: "views/podcasts.html",
        //     controller: function($scope, $mdSidenav) {
        //         $scope.toggleMenu = function() {
        //             $mdSidenav('menu').toggle()
        //             .then(function(){
        //                 $log.debug("toggle RIGHT is done");
        //             });
        //         };
        //     }
        // });
});

ngTamrec.config(function($mdThemingProvider) {
    $mdThemingProvider.definePalette('tamrecSteelGray', {
        '50': 'ffebee',
        '100': 'ffcdd2',
        '200': 'ef9a9a',
        '300': 'e57373',
        '400': '2a3c54',  // changed
        '500': '2a3c54',
        '600': 'e53935',
        '700': 'd32f2f',
        '800': 'c62828',
        '900': 'b71c1c',
        'A100': 'ff8a80',
        'A200': 'ff5252',
        'A400': 'ff1744',
        'A700': 'd50000',
        'contrastDefaultColor': 'light',
        'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
        '200', '300', '400', 'A100'],
        'contrastLightColors': undefined    // could also specify this if default was 'dark'
    });

    $mdThemingProvider.theme('default')
        .primaryPalette('blue-grey');
    $mdThemingProvider.theme('podcastsTheme')
        .primaryPalette('brown');
    $mdThemingProvider.theme('newsTheme')
        .primaryPalette('red');
});

ngTamrec.run(function($rootScope, $urlRouter, $mdSidenav) {
    $rootScope.$on('$locationChangeSuccess', function(evt) {
        evt.preventDefault();
        $mdSidenav('menu').close();
        $urlRouter.sync();
    });
});

ngTamrec.config(function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = true;
});
