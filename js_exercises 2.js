var myUniq = function(elements) {
  var results = [];
  for (var i=0; i<elements.length; i++){
    if(results.indexOf(elements[i]) == -1){
      results.push(elements[i]);
    };
  };
  return results;
};

var sumTwo = function(arr) {
  var results = [];
  for(var i=0; i<(arr.length-1); i++){
    for(var j=(i+1); j<arr.length; j++){
      if(arr[i]+arr[j] == 0){
        results.push([i,j]);
      }
    }
  };
  return results;
};

Array.prototype.myUniq = function() {
  var results = [];
  for (var i=0; i<this.length; i++){
    if(results.indexOf(this[i]) == -1){
      results.push(this[i]);
    };
  };
  return results;
};


Array.prototype.transpose = function() {
  var result = [];
  for (var i=0; i<this.length; i++){
    result.push([]);
  };

  for(var i=0; i<this.length; i++){
    for(var j=0; j<this[i].length; j++){
      result[j][i] = this[i][j];
    };
  };
  return result;
};



Array.prototype.each = function(action) {
  for(var i=0; i<this.length; i++){
    action(this[i]);
  }
}

Array.prototype.map = function(action) {
  result = [];
  for(var i=0; i<this.length; i++){
    result.push(action(this[i]));
  }
  return result;
}

Array.prototype.map2 = function(action) {
  var newAction = function(x){
    result.push(action(x));
  };

  var result = [];

  this.each(newAction);

  return result;
}

Array.prototype.inject = function(action, acc) {
  var newAction = function(x){
    acc += action(x);
  }

  this.each(newAction);
  return acc;
}


Array.prototype.bubbleSort = function(){
  var sorted = false;

  while (!sorted) {
    sorted = true;

    for (var i = 0; i < this.length-1; i++) {
      if (this[i] > this[i+1]) {
        temp = this[i+1];
        this[i+1] = this[i];
        this[i] = temp;
        sorted = false;
      }
    }
  }
  return this;
}


String.prototype.substrings = function(){
  subs = [];
  for(var i=0; i<this.length; i++) {
    for(var j=i+1; j<this.length+1; j++) {
      sub = this.slice(i,j);
      if(subs.indexOf(sub) == -1) {
        subs.push(sub);
      }
    }
  }
  return subs;
}

var range = function(start, end) {
  if(start == end){
    return [end];
  } else {
    var result = range(start, end - 1);
    return result.concat(end);
  }
}

var sumArray = function(arry) {
  if (arry.length == 1){
    return arry[0];
  }else{
    return arry[arry.length-1] + sumArray(arry.slice(0,arry.length-1));
  }
}


var exponent = function (b,p) {
  if (p == 0){
    return 1;
  }else {
    return b * exponent(b,p-1);
  }
}


var fibonacci = function (n) {
  if (n == 1){
    return [0];
  }else if (n == 2) {
    return [0 , 1];
  }else {
    var fibs = fibonacci(n-1);
    return fibs.concat(fibs[fibs.length-1] + fibs[fibs.length-2] );
  }
}

var bsearch = function(arr, target) {
  if (arr.length == 0) {
    return null;
  }
  var probe = Math.floor(arr.length/2)

  if (arr[probe] == target) {
    return probe;
  }else if (arr[probe] > target) {
    return bsearch(arr.slice(0,probe),target);
  }else {
    var sub = bsearch(arr.slice(probe+1, arr.length), target);
    return (sub == null) ? null : (probe + 1 + sub);
  }
}
// Not working yet
//
// var makeChange = function(amt, coins) {
//   var results = [];
//   for(i in coins) {
//     if(coins[i] == amt){
//       return [coins[i]];
//     }else if (coins[i] < amt){
//       results.concat(makeChange(amt-coins[i], coins).concat(coins[i]));
//     }
//   }
//   if(results.length == 0){
//     return null;
//   }else{
//     var minResult = results[0]
//     for(result in results){
//       if(result.length < minResult.length) {
//         minResult = result;
//       }
//     }
//     return minResult;
//   }
// }






