dateApp.controller('dateCtrl', function ($scope) {

    //Создается новая дата
    $scope.today = function () {
        $scope.dt = new Date();
    };
    
    $scope.today();

    //Удаляется дата
    $scope.clear = function () {
        $scope.dt = null;
    };

    //Свойства календаря
    $scope.inlineOptions = {
        customClass: getDayClass,
        minDate: new Date(),
        showWeeks: true
    };

    $scope.dateOptions = {
        dateDisabled: disabled,
        formatYear: 'yy',
        maxDate: new Date(2020, 5, 22),
        minDate: new Date(),
        startingDay: 1
    };

    //Отключается возможность выбора выходных
    function disabled(data) {
        var date = data.date,
            mode = data.mode;
        //return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6); Если раскомментировать, то выбирать выходные дни в календаре будет нельзя
    }

    //Переключение минимальной даты. Без этого все дни до сегодняшнего будут недоступны для выбора
    $scope.toggleMin = function () {
        $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
        $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
    };

    $scope.toggleMin();

    //Выводится окно с календарем
    $scope.open = function () {
        $scope.popup.opened = true;
    };

    //Установка даты
    $scope.setDate = function (year, month, day) {
        $scope.dt = new Date(year, month, day);
    };

    //Изначально окно с календарем скрыто
    $scope.popup = {
        opened: false
    };

    //
    function getDayClass(data) {
        var date = data.date,
            mode = data.mode;
        if (mode === 'day') {
//            var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

            for (var i = 0; i < $scope.events.length; i++) {
                var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                //Если текущий день...
//                if (dayToCheck === currentDay) { 
//                    return $scope.events[i].status;
//                }
            }
        }

        return '';
    }
});