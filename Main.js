
var myApp = angular.module('myApp', ['ngResource']);

myApp.controller("AppCtrl",function ($scope, $resource) {
    console.log("myApp.AppCtrl");

    // http://finance.google.com/finance/info?client=ig&q=TPE:2498
    $scope.stockItem = "tpe: 2498";
    
    $scope.init = function (stockName) {
        if (stockName) {
            $scope.stockItem = stockName;    
            $scope.loadData();
        }
    };

    $scope.loadData = function() {
        $scope.googleFinance = $resource('https://finance.google.com/finance/info', {
            client: 'ig',
            callback: 'JSON_CALLBACK'
        }, {
            get: {
                method: 'JSONP',
                params: {
                    q: $scope.stockItem
                },
                isArray: true
            }
        });
        $scope.indexResult = $scope.googleFinance.get();
    };

    //initial load
    $scope.loadData();

    $scope.StockDisplayClass= function(priceChange){
         if(priceChange>0)
                return "ClassUp"
         else if(priceChange<0)
             return "ClassDown";
        else
             return "ClassNochange";
    }

});



myApp.controller("StockCtrl", function ($scope, stockService){
    console.log("myApp.StockCtrl");

    //Executes when the controller is created
    $scope.stocks = stockService.stocks;

    stockService.getStocks();

    $scope.addNewStock = function(portfolioName){
        var stock = {name: portfolioName};
        stockService.addNewStock(stock);
    }
});





