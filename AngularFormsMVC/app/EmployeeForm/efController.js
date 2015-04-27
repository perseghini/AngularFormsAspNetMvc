angularFormsApp.controller("efController",
    ["$scope", "$window", "$routeParams", "DataService",
    function efController($scope, $window, $routeParams, DataService) {
        if ($routeParams.id)
            $scope.employee = DataService.getEmployee($routeParams.id);
        else {
            $scope.employee = { id: 0 };
        }

        $scope.editableEmployee = angular.copy($scope.employee);

        $scope.departments = [
            "Engineering",
            "Marketing",
            "Finance",
            "Administration"
        ];

        $scope.languages = [
            "C",
            "C++",
            "Pascal",
            "Jave",
            "C#",
            "Python"
        ];

        $scope.submitForm = function () {
            if ($scope.employeeForm.$invalid) {
                return;
            }

            if ($scope.employee.id === 0) {
                DataService.insertEmployee($scope.editableEmployee);
            } else {
                DataService.updateEmployee($scope.editableEmployee);
            }

            $scope.employee = angular.copy($scope.editableEmployee);
            $window.history.back();
            // $modalInstance.close();
        };

        $scope.cancelForm = function () {
            $window.history.back();
            //$modalInstance.dismiss();
        };
    }]);