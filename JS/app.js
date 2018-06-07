$(document).ready(function(){

  var gameOver = false;
  var score = 0;

  // Function to move chicken
  $(document).keydown(function(e){

    var position = $(".player").position();
    switch(e.keyCode) {
      case 37: //Left
      $(".player").css('left',position.left - 50 + 'px');
      // console.log($(".player").position());
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

  // // Functions to move cars across the board once
  function moveFastCar1(){
    $(".car6")
    .css("left", "1100px")
    .animate({left: "-=1100px"}, 4000, 'linear', function(){
      moveFastCar1();
    })
  }

  // //
  function moveFastCar2(){
    $(".car4")
    .css("left", "1100px")
    .animate({left: "-=1100px"}, 4000, 'linear', function(){
      moveFastCar2();
    })
  }
  //
  function moveSlowCar1(){
    $(".car")
    .css("left", "0px")
    .animate({left: "+=1100px"}, 4000, 'linear', function(){
      moveSlowCar1();
    })
  }

  //
  // //
  function moveSlowCar2(){
    $(".car2")
    .css("left", "0px")
    .animate({left: "+=1100px"}, 4000, 'linear', function(){
      moveSlowCar2();
    })
  }

  //
  function moveSlowCar3(){
    $(".car5")
    .css("left", "0px")
    .animate({left: "+=1100px"}, 4000, 'linear', function(){
      moveSlowCar3();
    })
  }

  //
  function moveFastestCar(){
    $(".car3")
    .css("left", "0px")
    .animate({left: "+=1100px"}, 4000, 'linear', function(){
      moveFastestCar();
    })
  }


  // Interval to move cars continuously
  $(".startbtn").click(function(){
    timer();
    getCoords();
    $(".instructions").hide();
    $(".startbtn").hide();
    setInterval(moveFastCar1,2000);
    setInterval(moveFastCar2,2000);
    setInterval(moveSlowCar1,3000);
    setInterval(moveSlowCar2,3000);
    setInterval(moveSlowCar3,3000);
    setInterval(moveFastestCar,500);
  });

  setInterval(getCoords,50);


  // Checking when Car object and Chicken Object intersect
  var chicken = {};
  var carObj = {};
  var carObj2 = {};
  var carObj3 = {};
  var carObj4 = {};
  var carObj5 = {};
  var carObj6 = {};

  function getCoords(){

    var chick = $('.player');
    chicken.left = chick.offset().left;
    chicken.top = chick.offset().top;
    chicken.right = chicken.left + 80;
    chicken.bottom = chicken.top + 80;

    // Positions of the Car Object
    var car = $(".car");
    carObj.left = car.offset().left;
    carObj.top = car.offset().top;
    carObj.right = carObj.left + 80;
    carObj.bottom = carObj.top + 80;

    var car2 = $(".car2");
    carObj2.left = car2.offset().left;
    carObj2.top = car2.offset().top;
    carObj2.right = carObj2.left + 80;
    carObj2.bottom = carObj2.top + 80;

    var car3 = $(".car3");
    carObj3.left = car3.offset().left;
    carObj3.top = car3.offset().top;
    carObj3.right = carObj3.left + 80;
    carObj3.bottom = carObj3.top + 80;
    // console.log($(".car3"));

    var car4 = $(".car4");
    carObj4.left = car4.offset().left;
    carObj4.top = car4.offset().top;
    carObj4.right = carObj4.left + 80;
    carObj4.bottom = carObj4.top + 80;

    var car5 = $(".car5");
    carObj5.left = car5.offset().left;
    carObj5.top = car5.offset().top;
    carObj5.right = carObj5.left + 80;
    carObj5.bottom = carObj5.top + 80;


    var car6 = $(".car6");
    carObj6.left = car6.offset().left;
    carObj6.top = car6.offset().top;
    carObj6.right = carObj6.left + 80;
    carObj6.bottom = carObj6.top + 80;

    // Calling collisions functions to cause collisions after each car object and the chicken intersect
    collision(chicken, carObj);
    collision(chicken, carObj2);
    collision(chicken, carObj3);
    collision(chicken, carObj4);
    collision(chicken, carObj5);
    collision(chicken, carObj6);

    if (chicken.bottom < 129) {
      winner();
    }
  }

  function collision(chicken, carObj) {

    if (chicken.left <= carObj.right && carObj.left <= chicken.right && chicken.top <= carObj.bottom && carObj.top <= chicken.bottom) {
    stopGame();
    }

  }


  // Scoring
  function timer (){
    console.log("hey");
    counter = 0;
    score = setInterval(timer, 1000);
    function timer(){
      counter++;
      $(".score").text(counter);
    }
  }


  function stopGame(){
    gameOver = true;
    $(".chicken").hide();
    clearInterval(score);
    $(".lose").css("display", "block");
  }

  function winner(){
    gameOver = true;
    $(".chicken").hide();
    clearInterval(score);
    $(".win").css("display", "block");
  }




}); // end of $(document).ready()
