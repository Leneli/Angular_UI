myApp.controller('dateParserCtrl', function ($scope, uibDateParser) {
  $scope.format = 'dd-MM-yyyy';
  $scope.date = new Date();
});