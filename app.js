/**
 * Created by 1534508766E on 3/16/2017.
 */
var app = angular.module('myapp', ["ngRoute"]);

app.controller('mainCtrl', function($scope) {

    $scope.user = 'Lanre';
    $scope.showMe1 = function() {
        setTimeout($scope.hideme1 = false, 1000)
    };
	$scope.checkDate = function() {
	console.log("************ $scope.startdate : ", $scope.startdate);
	console.log("************ $scope.enddate : ", $scope.enddate);
	var stDate = new Date($scope.startdate);
	var enDate = new Date($scope.enddate);
	console.log("************ $scope.startdate : ", stDate);
	console.log("************ $scope.enddate : ", enDate);
	if (enDate >= stDate) {
		alert("Correct Entry!");
	}
	else {
		alert("Incorrect Entry!");	
	}
	debugger;
	}

    //setTimeout(function() {
    //    newPromise.fulfill(v.toLowerCase());
    //}, 1000);
});
app.directive('displayTest', function() {
    return {
        restrict: 'EA',
        template:'<div>Just Testing This Directive</div>'

    }
});
app.directive('myNgClick', function() {
        return function(scope, element, attributes) {
            element.click(function() {
                scope.$eval(attributes.myNgClick);
                scope.$apply();
            });
        };
});
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "partials/home.html"
        })
        .when("/deals", {
            templateUrl : "partials/deals.html"
        })
        .when("/stores", {
            templateUrl : "partials/stores.html"
        })
        .when("/products", {
            templateUrl : "partials/products.html"
        })
        .when("/contact", {
            templateUrl : "partials/contact.htm"
        })
        .otherwise({ redirectTo: '/' });
});
