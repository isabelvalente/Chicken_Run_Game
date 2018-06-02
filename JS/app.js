$(document).ready(function(){

  // Adding the chicken to the board

  $(function(){

    var chicken = "<img class='chicken' src='images/chicken.png'>";
    $(".player").append(chicken);

    // Function to move chicken
    $(document).keydown(function(e){

      var position = $(".player").position();

      switch(e.keyCode)
      {
        case 37: //Left
          $(".player").css('left',position.left - 50 + 'px');
          break;
        case 38: //Up
          $(".player").css('top',position.top - 50 + 'px');
          break;
        case 39: //Right
          $(".player").css('left',position.left + 50 + 'px');
          break;
        case 40: //Down
          $(".player").css('top',position.top + 50 + 'px');
          break;


      }
    })

  });

  // Adding cars to the Board

  var slowCar = "<img class='leftCars' src='images/fastCar.png'>";
  $(".laneSix").append(slowCar);
  $(".laneFour").append(slowCar);
  $(".laneOne").append(slowCar);
  var fastCar = "<img class='rightCars' src='images/slowCar.png'>";
  $(".laneFive").append(fastCar);
  $(".laneTwo").append(fastCar);
  var fasterCar = "<img class='leftCars' src='images/fasterCar.png'>";
  $(".laneThree").append(fasterCar);








});
