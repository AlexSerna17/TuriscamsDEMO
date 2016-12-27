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
        // '<i class="ion ion-ios-star" ng-if="$index + 1 < rate && rate > $index + 1"></i>' +
        // '<i class="ion ion-ios-star-half" ng-if="$index + 1 > rate && rate < $index + 1 && rate-$index == 0.5"></i>' +
        // '<i class="ion ion-ios-star-outline" ng-if="rate < $index + 1 && rate-$index != 0.5""></i>' +
        '<i class="ion ion-ios-star" ng-if="$index + 1 <= rate"></i>' +
        '<i class="ion ion-ios-star-outline" ng-if="rate < $index + 1"></i>' +
        '</li>' +
        '</ul>' +
        '</div>'+
        '<style>'+
          '.ion-rating {'+
          'display: inline-block;'+
              'width: max-content;'+
            'width: -moz-max-content;'+
           ' width: -webkit-max-content;'+
        '}'+
        '.ion-rating ul li {'+
         ' display: inline-block;'+
          /*padding: 0 3px;*/
        '}'+
        '.ion-rating ul li i {'+
          'font-size: 23px;'+
          'color: #e26b19;'+
        '}'+

        '.button-icon .icon-turis:before, .button-icon.icon-turis:before { '+
            'font-size: 18px !Important;'+
            'color: #bcbcbc;'+
            'font-weight: bold;'+
        '}'+
        '</style>',
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

          $scope.rate = $scope.rate || 5;

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

