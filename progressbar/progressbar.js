myApp.controller('progressCtrl', function ($scope) {

	$scope.static = 77; //значение статичной шкалы
	$scope.dynamic = 57; //значение динамичной шкалы

	var stack = [20, 15, 33, 7]; //значение для "составной" шкалы


	//функция для изменения типа шкалы по ходу прогресса
	$scope.progressTypes = function () {
		var type;
		var value = $scope.dynamic;

		if (value < 25) {
			type = 'success';
		} else if (value < 50) {
			type = 'info';
		} else if (value < 75) {
			type = 'warning';
		} else {
			type = 'danger';
		}

		$scope.showWarning = type === 'danger' || type === 'warning';

		$scope.type = type;
	};
	$scope.progressTypes();


	//"составная" шкала
	$scope.barStacked = function () {
		$scope.stacked = [];
		var types = ['success', 'info', 'warning', 'danger'],
			n = stack.length;

		console.log(n);

		for (var i = 0; i < stack.length; i++) {
			$scope.stacked.push({
				value: stack[i],
				type: types[i]
			});
		}
	};
	$scope.barStacked();
});