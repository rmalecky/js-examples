var stockPicker = function(prices) {
  var bestProfit = prices[1] - prices[0];
  var bestDays = [1, 0];

  for(var i=0; i<prices.length-1; i++) {
    for(var j=(i+1); j<prices.length; j++){
      if (bestProfit < prices[j] - prices[i]){
        bestProfit = prices[j] - prices[i];
        bestDays = [i, j];
      }
    }
  }
  return bestDays;
}
