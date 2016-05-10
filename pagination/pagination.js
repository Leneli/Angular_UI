myApp.controller('paginationCtrl', function ($scope, $log) {
	//small
	$scope.totalItems = 64;
	$scope.currentPage = 4;

	//big
	$scope.maxSize = 5;
	$scope.bigTotalItems = 175;
	$scope.bigCurrentPage = 9;
});