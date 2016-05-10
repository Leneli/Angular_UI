myApp.controller('timepickerCtrl', function ($scope, $log) {
	$scope.mytime = new Date();

	$scope.hstep = 1;
	$scope.mstep = 1;


	$scope.ismeridian = false; //true - 12-часовой формат, ангулар - shortTime
	$scope.toggleMode = function () {
		$scope.ismeridian = !$scope.ismeridian;
	};


	$scope.clear = function () {
		$scope.mytime = null;
	};
});