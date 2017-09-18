app.controller('abt-controller',['$scope','$http',function ($scope,$http) {

            $scope.ShowAlert = function () {
                alert('this is aboutpage');
                $http({
                method : "GET",
                url : "/api/series"
              }).then(function mySuccess(response) {
                  console.log(response);
                }, function myError(response) {
                  console.log(response);
              });
            }
            

        }]);