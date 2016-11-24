var myApp = angular.module('myApp', ['timer','ngMaterial']);

myApp.config(function ($interpolateProvider) {
  $interpolateProvider.startSymbol('{[{');
  $interpolateProvider.endSymbol('}]}');
});

myApp.controller('MyAppController', function ($scope, $interval) {
  var rp = 5000,
    permenit = 5000,
    inisial = 0;
  var jml_menit_tlp = rp / permenit;
  var jml_per_detik = jml_menit_tlp * 60;

  $scope.deposite = rp;

  $scope.startTimer = function () {
    $scope.$broadcast('timer-start');
  };

  $scope.stopTimer = function () {
    $scope.$broadcast('timer-stop');
    hangup();
  };

  $scope.$on('timer-stopped', function (event, data) {
    if (data.seconds > inisial)
      $scope.deposite = rp - ((data.minutes * permenit) + permenit);
    else
      $scope.deposite = rp - (data.minutes * permenit);
  });

  var a = 0;
  $interval(function () {
    if ((a += 1) == jml_per_detik)
    //   hangup();
    console.log("Time stop now");
  }, 1000, jml_per_detik);
});
