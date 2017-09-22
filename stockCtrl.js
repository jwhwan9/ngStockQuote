

myApp.controller("StockCtrl", function ($scope, stockService){
	console.log("myApp.controller");

    //Executes when the controller is created
    $scope.stocks = stockService.stocks;

    stockService.getStocks();

    $scope.addNewStock = function(portfolioName){
        var stock = {name: portfolioName};
        stockService.addNewStock(stock);
    }
});



