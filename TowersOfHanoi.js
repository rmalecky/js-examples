var game = function (towers) {
  while(!gameWon(towers)){
    console.log(towers);
    do{
      console.log("Enter A move");
      var from = prompt("from: ");
      var to = prompt("to: ");
    }while(invalidMove(from,to,towers));
    towers[to].push(towers[from].pop());
  }
  alert("You Win")
}

var invalidMove = function (from, to, towers){
  if( 3<from || from<-1 || 3<to || to<-1 ){
    alert("selection out of bounds");
    return true;
  }

  fromLength = towers[from].length;
  toLength = towers[to].length;

  if (fromLength == 0){
    alert("Can't move from an empty tower.");
    return true;
  }else if (towers[to][toLength-1] > towers[from][fromLength-1]){
    alert("Can't move onto a smaller disc.");
    return true;
  }else{
    return false;
  }
}

var gameWon = function (towers){
  return towers[2].length == 3 || towers[1].length == 3;
}

var towers = [[0,1,2],[],[]];
game(towers);
