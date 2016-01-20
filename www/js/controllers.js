angular.module('app.controllers', [])
  
.controller('startCtrl', function($scope) {

})
   
.controller('page1Ctrl', function($scope) {
	var currentYear = new Date().getFullYear()
	var years = [];
	for (var i = currentYear - 100; i <= currentYear; i++) {
		years.push(i);
	}
	$scope.years = years;
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
 