var EmsApp = angular.module('EMSApp',['ui.router','ui.bootstrap','user']);

EmsApp.run(function($rootScope,$state,$stateParams) {
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
});



//路由配置
EmsApp.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/login');
	$stateProvider
		.state('login',{
			url: '/login',
			templateUrl: 'tpls/login.html'
		})
		.state('user_index',{
			url:'/user/index',
			templateUrl: 'tpls/user/user_index.html'
		})
});



