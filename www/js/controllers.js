angular.module('app.controllers', [])
  
.controller('startCtrl', function($scope) {

})
   
.controller('page1Ctrl', function($scope) {
	var currentYear = new Date().getFullYear()
	var years = [];
	var days = [];
	var months = []
	for (var i = currentYear - 100; i <= currentYear; i++) {
		years.push(i);
	}
	for (var i = 1; i <= 31; i++) {
		days.push(i);
	}
	for (var i = 1; i <= 12; i++) {
		months.push(i);
	}
	$scope.years = years;
	$scope.months = months;
	$scope.days = days;
})
   
.controller('page2Ctrl', function($scope) {

})
   
.controller('page3Ctrl', function($scope) {

})
   
.controller('page4Ctrl', function($scope) {

})
   
.controller('page5Ctrl', function($scope) {

})
   
.controller('finishCtrl', function($scope) {

})
 