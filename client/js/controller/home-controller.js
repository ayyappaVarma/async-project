app.controller('home-controller',['$scope','$http',function ($scope,$http) {

            $scope.homeAlert = function () {
                alert('this is homepage');
                $http({
                method : "GET",
                url : "/api/parallel"
              }).then(function mySuccess(response) {
                  console.log(response);
                }, function myError(response) {
                  console.log(response);
              });
            }
            

        }]);