angular.module('ionRate', [])
  .directive('ionRate', [
    function() {
      'use strict';

      return {
        restrict: 'AEC',
        replace: false,
        template: '<div class="ion-rating">' +
        '<ul>' +
        '<li ng-repeat="i in getNumber(maximum) track by $index" ng-click="selectRate($index + 1)" class="{{color}}" disabled="disabled">' +
        '<i class="ion ion-ios-star" ng-if="$index + 1 < rate && rate > $index + 1"></i>' +
        '<i class="ion ion-ios-star-half" ng-if="$index + 1 > rate && rate < $index + 1 && rate-$index == 0.5"></i>' +
        '<i class="ion ion-ios-star-outline" ng-if="rate < $index + 1 && rate-$index != 0.5""></i>' +
        '</li>' +
        '</ul>' +
        '</div>',
        scope: {
          maximum: '=',
          rate: '=',
          color: '=',
          disabled: '=',
          selectStar: '&'
        },
        controller : function($scope) {
          $scope.color = $scope.color || 'calm';
          $scope.maximum = $scope.maximum || 5;

          $scope.rate = $scope.rate || 3;

          $scope.disabled = $scope.disabled || true;

          $scope.getNumber = function(num) {
            return new Array(num);
          };

          $scope.selectRate = function (index) {
            if ($scope.disabled != false) {
                $scope.rate = index;
              $scope.selectStar({rating: $scope.rate})
            }
          };

        }
      };

    }
  ]);