

angular.module('CalculatorApp', [])
.controller('CalculatorController', function($scope) {
    $scope.showOperation = false;
    $scope.operator = '';
    $scope.ans = 0;
    $scope.decims = 2;

    $scope.plus = function() {
        $scope.ans = ($scope.a + $scope.b).toFixed($scope.decims);
        $scope.showOperation = true;
        $scope.operator = '+';
    }
    $scope.minus = function() {
        $scope.ans = ($scope.a - $scope.b).toFixed($scope.decims);
        $scope.showOperation = true;
        $scope.operator = '-';
    }
    $scope.multiply = function() {
        $scope.ans = ($scope.a * $scope.b).toFixed($scope.decims);
        $scope.showOperation = true;
        $scope.operator = '*';
    }
    $scope.divide = function() {
        $scope.ans = ($scope.a / $scope.b).toFixed($scope.decims);
        $scope.showOperation = true;
        $scope.operator = '/';
    }
    $scope.clear = function() {
        $scope.a = 0;
        $scope.b = 0;
        $scope.ans = 0;
        $scope.showOperation = false;
    }
    $scope.change = function() {
        let apu = $scope.ans;
        apu = apu.toFixed($scope.decims);
        $scope.ans = apu;
    }
});