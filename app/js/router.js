define('router',[
    'app',
    'ui-router',
    'loginCtrl',
    'registerCtrl',
    'myDesktopCtrl',
    'docDetailCtrl'
    ],function (app) {


    app.run(function($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    });

    app.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/login');
        $stateProvider

            .state('login',{
                    url:'/login',
                    views:{
                        '':{
                            templateUrl:'pages/index.html'
                        },
                        'topbannerView@login':{
                            templateUrl:'pages/topbanner.html'
                        },
                        'mainView@login':{
                            templateUrl:'pages/login.html'
                        },              
                    }
            })
            .state('register',{
                url:'/register',
                views:{
                    '':{
                        templateUrl:'pages/index.html'
                    },
                    'topbannerView@register':{
                        templateUrl:'pages/topbanner.html'
                    },
                    'mainView@register':{
                        templateUrl:'pages/register/register.html'
                    },
                }
            })
            .state('registerdone',{
                url:'/registerdone',
                views:{
                    '':{
                        templateUrl:'pages/index.html'
                    },
                    'topbannerView@registerdone':{
                        templateUrl:'pages/topbanner.html'
                    },
                    'mainView@registerdone':{
                        templateUrl:'pages/register/registerdone.html'
                    },
                }
            })
            .state('desktop',{
                url:'/desktop',
                views:{
                    '':{
                        templateUrl:'pages/index.html'
                    },
                    'topbannerView@desktop':{
                        templateUrl:'pages/topbanner.html'
                    },
                    'mainView@desktop':{
                        templateUrl:'pages/desktop/desktop.html'
                    },
                    'desktopMenu@desktop':{
                        templateUrl:'pages/desktop/deskmenu.html'
                    },
                    'desktopMain@desktop':{
                        templateUrl:'pages/desktop/mydesktop.html'
                    },
                }
            })
            .state('desktop.my',{
                url:'/my' ,
                views:{
                    'desktopMain@desktop':{
                        templateUrl:'pages/desktop/mydesktop.html'
                    }
                }
            })

            .state('desktop.achieves',{
                 url:'/achieves' ,
                 views:{
                    'desktopMain@desktop':{
                        templateUrl:'pages/desktop/achieves.html'
                    }
                }
            })
            .state('desktop.templet',{
                url:'/templet' ,
                views:{
                    'desktopMain@desktop':{
                        templateUrl:'pages/desktop/templet.html'
                    }
                }
            })
            .state('docdetail',{
                url:'/docdetail/{docid:.*}' ,//参数传递
                views:{
                    '':{
                        templateUrl:'pages/index.html'
                    },
                    'topbannerView@docdetail':{
                        templateUrl:'pages/topbanner.html'
                    },
                    'mainView@docdetail':{
                        templateUrl:'pages/process/docdetailinfo.html'
                    },
                }
            })
            .state('index.usermng.slowusers',{
                 url:'/slowusers' ,
                 views:{
                    'userMain@index.usermng':{
                        templateUrl:'pages/slowusers.html'
                    }
                }
            })
            .state('index.settings',{
                url:'/settings',
                views:{
                    'main@index':{
                        template:'这是系统设置'
                    }
                }
            });
    });

});