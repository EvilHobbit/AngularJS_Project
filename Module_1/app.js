(function () {
  'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope']

  function LunchCheckController ($scope){

    $scope.items = "";
    $scope.messageContent = "";


    $scope.displayMessage = function () {
      if($scope.items){
        $scope.color = "color:green";
        $scope.borderColor = "border-color:green";
        var separator = ",";
        var arrayOfStrings = $scope.items.split(separator);
        var count = 0;
        for (var i=0; i<arrayOfStrings.length; i++){
          if(!(arrayOfStrings[i].length == 0 || !arrayOfStrings[i].trim())){
            count += 1;
          }
        }
        if(count > 3 ){
          $scope.messageContent = "Too much!";
        }else{
          $scope.messageContent = "Enjoy!";
        }
      }
      else {
        $scope.color = "color:red";
        $scope.borderColor = "border-color:red";
        $scope.messageContent = "Please enter data first";
      }
    };

  };

})();
