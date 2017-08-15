(function () {
  //the app variable makes the angular connection to the html doc to dynamically change the div elements within the page.
  var app = angular.module('myCalculator', []);
  app.controller('CalculatorController', ['$scope', function ($scope) {
    //defines the birghtness options for the lightbulb calculator
    $scope.lumen_options = [375, 600, 900, 1125, 1600];
    //defines brightness default value 
    $scope.current_lumens = 600;
    //defines default cost per kilowatt hr
    $scope.current_cost = 12;
    //defines default hours of usage
    $scope.current_hours = 3;
    //establishes days in year for yearly cost calculation  
    $scope.total_days = 365;
    //lightbulb type conversion ratios to calculate wattage based on lumen selection  
    $scope.inc_conversion = .0625;
    $scope.hal_conversion = .0450;
    $scope.cfl_conversion = .0146;
    $scope.led_conversion = .0125;

    $scope.calculate = function () {
    //lumen conversion calculation. This function converts lumens to wattate for each bulb type  
      $scope.inc_wattage = ($scope.current_lumens * $scope.inc_conversion).toFixed(1);
      $scope.hal_wattage = ($scope.current_lumens * $scope.hal_conversion).toFixed(1);
      $scope.cfl_wattage = ($scope.current_lumens * $scope.cfl_conversion).toFixed(1);
      $scope.led_wattage = ($scope.current_lumens * $scope.led_conversion).toFixed(1);
    //if statement to control user input for hour selection. User can only enter a value from 0-24.  
      if ($scope.current_hours > 24) {
        $scope.current_hours = 24;
      }
    //total_hours variable will calculate total usage hours for the year  
      var total_hours = $scope.total_days * $scope.current_hours;
    //cost variable/ This variable formats the cost to a cents value rather than a dollar value. This variable moves the decimal over 2 places.   
      var cost = $scope.current_cost / 100;
    //cost calculation. This will calculate annual cost of each type of bulb  
      $scope.inc_cost = ((($scope.inc_wattage * total_hours) / 1000) * cost).toFixed(2);
      $scope.hal_cost = ((($scope.hal_wattage * total_hours) / 1000) * cost).toFixed(2);
      $scope.cfl_cost = ((($scope.cfl_wattage * total_hours) / 1000) * cost).toFixed(2);
      $scope.led_cost = ((($scope.led_wattage * total_hours) / 1000) * cost).toFixed(2);

    }


    $scope.calculate();




  }]);


})();