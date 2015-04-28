angularFormsApp.factory("DataService",
    ["$http",
    function ($http) {
        var getEmployees = function () {
            return $http.get("Employee/GetEmployees");
        }

        var getEmployee = function (id) {
            if (id === "123") {
                return {
                    fullName: "Milton Waddams",
                    notes: "The ideal employee.",
                    department: "Administration",
                    dateHired: "7/11/2014",
                    perkCar: true,
                    perkStock: false,
                    perkSixWeeks: true,
                    payrollType: "none"
                };
            }

            return undefined;
        };

        var insertEmployee = function (newEmployee) {
            return $http.post("Employee/Create", newEmployee);
        }

        var updateEmployee = function (employee) {
            return true;
        }

        return {
            insertEmployee: insertEmployee,
            updateEmployee: updateEmployee,
            getEmployee: getEmployee,
            getEmployees: getEmployees
        }
    }]);