var app = angular.module('modal-table.controllers', []);

app.controller('Table', ['$scope', function($scope){
$scope.names = [];

$scope.addName = function(){
	$scope.names.push({name: $scope.user.name, email: $scope.user.email, date: new Date()})
	$scope.user.name = "";
	$scope.user.email = "";
	$scope.userForm.$setPristine();
	$('#Modal').modal('hide')
}
}]);
