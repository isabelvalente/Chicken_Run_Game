$(document).ready(function(){


  $(function(){

    // Adding the chicken to the board
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

  // Cars stored as variables

  var fastCar = "<img class='fastCar'src='images/fastCar.png'>";
  var fastestCar = "<img class='fastestCar'src='images/fastestCar.png'>";
  var slowCar = "<img class='slowCar'src='images/slowCar.png'>";

  // Functions to move cars across the board once
  function moveFastCar(){
    $(fastCar)
    .appendTo(".fastLane")
    .animate({left: "-=1500px"}, 5000)
    .delay(20)
    .queue(function(){
      $(this).remove();
    });
  }

  function moveSlowCar(){
    $(slowCar)
    .appendTo(".slowLane")
    .animate({left: "+=1500px"}, 6000) // How fast and far you want the cars to go
    .delay(40)
    .queue(function(){
      $(this).remove();
    });
  }

  function moveFastestCar(){
    $(fastestCar)
    .appendTo(".fastestLane")
    .animate({left: "+=1500px"}, 4000) // How fast and far you want the cars to go
    .delay(20)
    .queue(function(){
      $(this).remove();
    });
  }

  // Interval to move cars continuously

  $(".startbtn").click(function(){
    setInterval(moveFastCar,2000); // how often you want the cars to appear
    setInterval(moveSlowCar,3000);
    setInterval(moveFastestCar,1500);
    var collision = function(chicken, slowCar) {
      var x1 = chicken.offset().left;
      var y1 = chicken.offset().top;
      var h1 = chicken.outerHeight(true);
      var w1 = chicken.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = slowCar.offset().left;
      var y2 = slowCar.offset().top;
      var h2 = slowCar.outerHeight(true);
      var w2 = slowCar.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
      return true;
    };

    var collided = collision($(".player"), $(slowCar));
  });

  // Collision between chicken and Cars


  console.log(slowCar);





});
