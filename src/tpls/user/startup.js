/*
angular.module('user',[])
.config(function($stateProvider,$urlRouterProvider){
	// var moduleName = "ywlx";
 //    var rootPath = $purpleConfigProvider.appSetting.rootUrl;
 //    var modulePath = rootPath + "/modules/tst/" + moduleName;
    //default
    //$urlRouterProvider.when('/home', '/home/user');
	$stateProvider
		.state('user/index',{
			url: '',
			views: {
				
				}
			}
		)
});


*/

angular.module('user', ['userCtrl', 'userServices'])
.config(function ($stateProvider, $urlRouterProvider) {
    var moduleName = "user";
    // var rootPath = $purpleConfigProvider.appSetting.rootUrl;
    // var modulePath = rootPath + "/modules/tst/" + moduleName;
    //default
    $urlRouterProvider.when("/home", "/bz/home");
    $stateProvider
        .state('user.main', {
            url: '/index',
            templateUrl:' /user_index.html',
            controller: 'UserCtrl'
        })
    	.state('qck.1', {
    		url: '/qck1',
    		templateUrl:' /qcl.html',
    		controller: 'user.qckl1.controller'
    	})

        // .state('tst.bz', {
        //     url: '/bz',
        //     templateUrl: rootPath + '/share/templates/v5/sidebar-view.html'
        // })

        // .state('tst.bz.list', {
        //     url: '/list',
        //     templateUrl: modulePath + '/templates/list.html',
        //     controller: 'tst.bz.list.controller'
        // })

        // .state('tst.bz.editor', {
        //     url: '/editor/:id',
        //     templateUrl: modulePath + '/templates/editor.html',
        //     controller: 'tst.bz.editor.controller'
        // })

        // .state('tst.bz.detail', {
        //     url: '/detail/?Code&Name&CountryCode',
        //     templateUrl: modulePath + '/templates/detail/info.html',
        //     templateUrl: rootPath + '/share/templates/v5/ui-view.html'
        // })
        // .state('tst.bz.detail.info', {
        //     url: '/info',
        //     templateUrl: modulePath + '/templates/detail.html',
        //     controller: 'tst.bz.detail.controller'
        // })
        // .state('tst.bz.detail.hlbj', {
        //     url: '/hlbj',
        //     templateUrl: modulePath + '/templates/detail/hlbj.html',
        //     controller: 'tst.bz.detail.hlbj.controller'
        // })
})








