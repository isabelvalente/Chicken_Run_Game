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


    $(".startbtn").click(function(){
      setInterval(moveFastCar,2000); // how often you want the cars to appear
      setInterval(moveSlowCar,3000); // how often you want the cars to appear
      setInterval(moveFastestCar,1500); // how often you want the cars to appear
    });

    function moveFastCar(){
      $("<img class='fastCar'src='images/fastCar.png'>")
      .appendTo(".fastLane")
      .animate({left: "-=1500px"}, 5000) // How fast and far you want the cars to go
      .delay(20)
      .queue(function(){
        $(this).remove();
      });
    }

    function moveSlowCar(){
      $("<img class='slowCar'src='images/slowCar.png'>")
      .appendTo(".slowLane")
      .animate({left: "+=1500px"}, 6000) // How fast and far you want the cars to go
      .delay(40)
      .queue(function(){
        $(this).remove();
      });
    }

    function moveFastestCar(){
      $("<img class='fastestCar'src='images/fastestCar.png'>")
      .appendTo(".fastestLane")
      .animate({left: "+=1500px"}, 4000) // How fast and far you want the cars to go
      .delay(20)
      .queue(function(){
        $(this).remove();
      });
    }


































});
