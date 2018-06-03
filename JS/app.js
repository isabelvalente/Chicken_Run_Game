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

  var slowCars = "<img class='slowCars' src='images/fastCar.png'>";
  $(".laneSix").append(slowCars);
  $(".laneFour").append(slowCars);
  $(".laneOne").append(slowCars);
  var fastCars = "<img class='fastCars' src='images/slowCar.png'>";
  $(".laneFive").append(fastCars);
  $(".laneTwo").append(fastCars);
  var fastestCars = "<img class='fastestCars' src='images/fasterCar.png'>";
  $(".laneThree").append(fastestCars);


  // Function to move the Cars


    $(".startbtn").click(function(){
    $('.slowCars').animate({left: "+=1100px"}, 3000);
    $('.fastCars').animate({left: "-=1100px"}, 1500);
    $('.fastestCars').animate({left: "+=1100px"}, 900);
  });







  // Collision
















});
