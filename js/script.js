
    var playerPlaysFirst = true;
    var emptySquares = 9;
    var grid = ["", "", "", "", "", "", "", "", ""];
        
    document.getElementById("0").onclick =function () {placeX("0")};
    document.getElementById("1").onclick =function () {placeX("1")};
    document.getElementById("2").onclick =function () {placeX("2")};
    document.getElementById("3").onclick =function () {placeX("3")};
    document.getElementById("4").onclick =function () {placeX("4")};
    document.getElementById("5").onclick =function () {placeX("5")};
    document.getElementById("6").onclick =function () {placeX("6")};
    document.getElementById("7").onclick =function () {placeX("7")};
    document.getElementById("8").onclick =function () {placeX("8")};
    
    function winCheck(XorO){
      if (grid[0] == XorO){
        if (grid[3] == XorO) {
          if (grid[6] == XorO){
            return true;
          }
        }
        if (grid[1] == XorO){
          if (grid[2] == XorO){
            return true;
          }
        }
        if (grid[4] == XorO){
          if (grid[8] == XorO){
            return true;
          }
        }
      }
      if (grid[1] == XorO){
        if (grid[4] == XorO){
          if (grid[7] == XorO) {
            return true;
          }
        }
      } 
      if (grid[2] == XorO){
        if (grid[5] == XorO){
          if (grid[8] == XorO){
            return true;
          }
        }
        if(grid[4]== XorO){
          if (grid[6] == XorO){
            return true;
          }
        }
      }
      if (grid[3] == XorO) {
        if (grid[4] == XorO) {
          if (grid[5] == XorO){
            return true;
          }
        }
      }
      if (grid[6] == XorO) {
        if (grid[7] == XorO) {
          if (grid[8] == XorO){
            return true;
          }
        }
      }
      return false;
      
    }
    
    function checkSquaresLeft(){
      if (emptySquares == 0){
        alert("It's a Tie! Game will reset!");
        resetGame();
        return true;
      }
      return false;
    }
    function resetGame(){
      //TODO change opacity to 1 again when hovered 
      
      // var photos = document.getElementsByClassName("photo");
      // var photos = document.getElementById("grid-container").querySelectorAll("photo");
      //var photos = document.querySelectorAll("#grid-container .photo");
      //photos[0].src = "img/blank.jpg";
      // var photos = document.getElementsByClassName("grid-container");
      // for (var i = 0; i < photos.length; i++) {
      //   var temp = photos[i];
      //   temp.src = "img/blank.jpg";
        // photos[i].src = "img/blank.jpg";
        
      // }
      for (var i=0; i<9; i++){
        document.getElementById(i.toString()).src ="img/blank.jpg";
       // document.getElementById(i.toString()).style.opacity = initial ;
        
      }
     //document.getElementById("0").src = "img/blank.jpg";
      //document.getElementById("1").src = "img/blank.jpg";
    //  document.getElementById("2").src = "img/blank.jpg";
    //  document.getElementById("3").src = "img/blank.jpg";
    //  document.getElementById("4").src = "img/blank.jpg";
    //  document.getElementById("5").src = "img/blank.jpg";
     // document.getElementById("6").src = "img/blank.jpg";
    //  document.getElementById("7").src = "img/blank.jpg";
    //  document.getElementById("8").src = "img/blank.jpg";
      grid = ["", "", "", "", "", "", "", "", ""];
      emptySquares = 9;
    }
    
    function placeO(){
      if (document.getElementById("4").getAttribute("src") == "img/blank.jpg"){
        document.getElementById("4").src = "img/O.jpg";
        document.getElementById("4").style.opacity = 1;
        grid[4] = "O";
        emptySquares--;
        return;
      }
      for (var i = 0; i < 9; i++){
        if (grid[i] == ""){
          grid[i] = "O";
          if (winCheck("O")) {
            document.getElementById(i.toString()).src = "img/O.jpg";
            document.getElementById(i.toString()).style.opacity = 1;
            alert("Player has lost... Game will reset!");
            resetGame();
            return;       
          }
          else{
            grid[i] = "";
          }
        }
      }
      for (var i = 0; i < 9; i++){
        if (grid[i] == ""){
          grid[i] = "X";
          if (winCheck("X")){
            grid[i] = "O" ;
            var temp = i.toString();
            document.getElementById(i.toString()).src = "img/O.jpg";
            document.getElementById(i.toString()).style.opacity = 1;
            emptySquares--;
            return;
          }
          else{
          grid[i] = "";
          }
        }
      }
    
      
      if (emptySquares == 6){
        if (document.getElementById("0").getAttribute("src") == "img/X.jpg" && document.getElementById("8").getAttribute("src") == "img/X.jpg"){
          document.getElementById("1").src = "img/O.jpg";
          document.getElementById("1").style.opacity = 1;
          grid[1] = "O";
          emptySquares--;
          return;
        }
        if (document.getElementById("2").getAttribute("src") == "img/X.jpg" && document.getElementById("6").getAttribute("src") == "img/X.jpg"){
          document.getElementById("3").src = "img/O.jpg";
          document.getElementById("3").style.opacity = 1;
          grid[3] = "O";
          emptySquares--;
          return;
        }
      }
      if (document.getElementById("0").getAttribute("src") == "img/blank.jpg"){
        document.getElementById("0").src = "img/O.jpg";
        document.getElementById("0").style.opacity = 1;
        grid[0] = "O";
        emptySquares--;
        checkSquaresLeft()
        return;
      }
      if (document.getElementById("8").getAttribute("src") == "img/blank.jpg"){
        document.getElementById("8").src = "img/O.jpg";
        document.getElementById("8").style.opacity = 1;
        grid[8] = "O";
        emptySquares--;
        checkSquaresLeft()
        return;
      }
    
      if (document.getElementById("2").getAttribute("src") == "img/blank.jpg"){
        document.getElementById("2").src = "img/O.jpg";
        document.getElementById("2").style.opacity = 1;
        grid[2] = "O";
        emptySquares--;
        checkSquaresLeft()
        return;
      }
      if (document.getElementById("6").getAttribute("src") == "img/blank.jpg"){
        document.getElementById("6").src = "img/O.jpg";
        document.getElementById("6").style.opacity = 1;
        grid[6] = "O";
        emptySquares--;
        checkSquaresLeft()
        return;
      }
    }
    
    
    function placeX(txt) {
    
      if (document.getElementById(txt).getAttribute("src") == "img/blank.jpg") {
        document.getElementById(txt).src = "img/X.jpg";
        document.getElementById(txt).style.opacity = 1;
        var temp = parseInt(txt);
        grid[temp] = "X"; 
        emptySquares--;
        if (winCheck("X")){
          alert("Player has won! Game will reset!");
          resetGame();
          return;
        }
        if (checkSquaresLeft()){
          return;
        }
        
        setTimeout(function () {
          placeO();
        }, 1000);
      }
    
    }
    
    
