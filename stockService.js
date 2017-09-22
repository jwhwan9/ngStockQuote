//var myApp = angular.module("myApp", []);

myApp.factory("stockService", function($http){
    var _stocks = [];

    var _getStocks = function(){
        console.log("stockService._getStocks()");
        $http.get("portfolio.json")
            .then(function(results){
                //Success
                angular.copy(results.data, _stocks); //this is the preferred; instead of $scope.movies = result.data
            }, function(results){
                //Error
                alert(results);
            })
    }

    var _addNewStock = function(stock){
        console.log("stockService._addNewStock()");
        _stock.splice(0, 0, stock);
    }    

    return{
        
        stocks: _stocks,
        getStocks: _getStocks,
        addNewStock: _addNewStock
    };
});



