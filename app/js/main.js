/**
 * Created by jimmy on 2016/04/26.
 */

requirejs.config({
    baseUrl: 'js/',
    paths: {
        angular:'libs/angular.min',
        'ui-router':'libs/angular-ui-router',
        domReady: 'libs/domReady',

        app:'app',
        router:'router',


        errortip:'directives/errortip',
        footer:'directives/footer',
        datepicker:'directives/date-picker',


        loginCtrl:'controllers/loginctrl',
        registerCtrl:'controllers/registerctrl',
        myDesktopCtrl:'controllers/mydesktopctrl',
        docDetailCtrl:'controllers/docdetailctrl',

        loginService:'services/loginservice',
        registerService:'services/registerservice',

    },
    shim: {
        angular: {
            exports: 'angular'
        },
        'ui-router':{
            deps:['angular'],
            output:'ui-router'
        }
    },
    deps: ['js/bootstrap.js']
});
