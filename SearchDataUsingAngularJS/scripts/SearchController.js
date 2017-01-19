var app = angular.module('myApp', []);

app.controller('customersCtrl', function ($scope, $http) {

    $http.get("MOCK_DATA.json").then(function (response) {

        $scope.myData = response.data;
        $scope.originalData = response.data;
        $scope.input = "";

        
        $scope.doSearch = function () {
            var results = [];
            var searchText = $scope.enteredValue;
            //search code here 
            angular.forEach($scope.originalData, function (value, key) {
                if (value.name && value.name.search(new RegExp(searchText, "i")) != -1) {
                    results.push(value);
                }
            });
            $scope.myData = results;

        };
    });
});