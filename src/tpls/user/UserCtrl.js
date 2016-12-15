var user = angular.module('user',[]);

/* 
父作用域，标记在user_index.html的第一行
*/
user.controller('UserCtrl',function($scope){
	$scope.show = true;
	$scope.list = [
	{
		id: '123',
		name: 'Hellmkdm'
	},{
		id: '2222',
		name: 'dscc'
	},{
		id: '123',
		name: 'xsdd'
	}];
	

	$scope.list1 = [
	{
		id: '设备编号',
		name: '0909020838984994'
	},{
		id: '设备品牌',
		name: 'DELL'
	},{
		id: '设备型号',
		name: 'Inspiron 14R-5437'
	},{
		id: '机房编号',
		name: '3-344'
	},{
		id: '位置编号',
		name: '2排14座'
	},{
		id: '设备状态',
		name: '正在使用'
	},{
		id: '使用者编号',
		name: '1234'
	},{
		id: '使用者',
		name: '大燕燕'
	},{
		id: 'Ip地址',
		name: '192.01.01.123'
	}];

});
/*
指令
name: blockDirective
action: 可复用，有固定标题并且可缩小的模块
parameter: data, @, 绑定html中的data（内容是标题）
*/
user.directive('blockDirective',function(){
	return {
		restrict: 'E',
		replace: true,
		transclude: true,
		scope: {
			data: '@'
		},
		link: function($scope,element,attrs){
			$scope.show = true;
		},
		template: '<div class="gn ">\
		<div ><i class="icon iconfont">&#xe60c;</i><span>&nbsp&nbsp{{data}}</span><div><i class="icon iconfont" ng-click="show=!show" ng-show="show">&#xe613;</i> <i class="icon iconfont" ng-click="show=!show" ng-show="!show">&#xe618;</i></div></div>\
		<div ng-show="show"><span ng-transclude></span></div></div>'
	};
});
/*
指令
name: mytableDirective
action：自定义表格
parameter: data, =, 绑定html中的data（内容是表格数据）
需再进行修，将表格第二行用ng-model绑定，实现直接对表格的修改，并且能对应上json数据的格式（例如name：dayanyan）
*/
user.directive('mytableDirective',function(){
	return {
		restrict: 'E',
		replace: true,
		scope: {
			data: '='
		},
		link: function($scope,element,attrs){

		},
		template: '<table class="MyTable table-responsive"><tr ng-repeat="item in data"><td>{{ item.id }}</td><td>{{ item.name }}</td></table>'
	};
});

/*
指令
name: quicklinksDirective
action：快捷操作，有相应html文件
parameter: 
按后续需要可能需要直接划出一个controller 注意作用域
*/
user.directive('quicklinksDirective',function(){
	return {
		restrict: 'E',
		replace: true,
		scope: {
			
		},
		link: function($scope,element,attrs){
		
		},
		controller: function($scope, ngDialog){
			$scope.openModal=function() {
	      	ngDialog.open({
		        template: '<p>Text in Modal Dialog</p>',
		        plain: true,
		       // className: 'ngdialog-theme-default',
		        closeByEscape: false,
		        closeByDocument: false
     	});
	}

		},
		templateUrl: 'tpls/user/main/quicklinks.html'
				
	
	};
});



user.controller('user.qckl1.controller',function($scope, ngDialog){
	
})

