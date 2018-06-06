$(document).ready(function(){

  // Cars stored as variables

  var fastCar1 = `<img class='fastCar'src='images/fastCar.png'>`;
  var fastCar2 = `<img class='fastCar'src='images/fastCar.png'>`;
  var fastestCar = `<img class='fastestCar'src='images/fastestCar.png'>`;
  var slowCar1 = `<img class='slowCar'src='images/slowCar.png'>`;
  var slowCar2 = `<img class='slowCar'src='images/slowCar.png'>`;
  var slowCar3 = `<img class='slowCar' src='images/slowCar.png'>`;


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
  //
  // $('.laneOne').append(slowCar3);
  // var num = 0;
  //
  // setInterval(function(){
  //   $('#car').css({
  //     'left': `${num}px`
  //   })
  //   num++;
  //   collide();
  //   }
  // ,10)

  // var chick = {
  //   top: $(".player").position().top,
  //   left: $(".player").position().left
  // }
  // setInterval(function(){
  //   chick.top = $(".player").position().top;
  //   chick.left = $(".player").position().left;
  //   console.log(chick.top);
  //   // console.log($(".slowCar").position());
  // },1000)



  // Functions to move cars across the board once
  // function moveFastCar1(){
  //   $(fastCar1)
  //   .appendTo(".laneTwo")
  //   .animate({left: "-=1500px"}, 5000)
  //   .delay(20)
  //   .queue(function(){
  //     $(this).remove();
  //   });
  // }
  //
  // function moveFastCar2(){
  //   $(fastCar2)
  //   .appendTo(".laneFive")
  //   .animate({left: "-=1500px"}, 5000)
  //   .delay(20)
  //   .queue(function(){
  //     $(this).remove();
  //   });
  // }
  //
  // function moveSlowCar1(){
  //   $(slowCar1)
  //   .appendTo(".laneOne")
  //   .animate({left: "+=1500px"}, 6000) // How fast and far you want the cars to go
  //   .delay(40)
  //   .queue(function(){
  //     $(this).remove();
  //   });
  // }
  //
  // function moveSlowCar2(){
  //   $(slowCar2)
  //   .appendTo(".laneThree")
  //   .animate({left: "+=1500px"}, 6000) // How fast and far you want the cars to go
  //   .delay(40)
  //   .queue(function(){
  //     $(this).remove();
  //   });
  // }
  //
  // function moveSlowCar3(){
  //   $(slowCar3)
  //   .appendTo(".laneSix")
  //   .animate({left: "+=1500px"}, 6000) // How fast and far you want the cars to go
  //   .delay(40)
  //   .queue(function(){
  //     $(this).remove();
  //   });
  // }
  //
  // function moveFastestCar(){
  //   $(fastestCar)
  //   .appendTo(".laneFour")
  //   .animate({left: "+=1500px"}, 4000) // How fast and far you want the cars to go
  //   .delay(20)
  //   .queue(function(){
  //     $(this).remove();
  //
  //   });
  // }

  // Collision between chicken and Cars

  // Positions of the chicken Object



  // Checking when Car object and Chicken Object intersect
  var chicken = {};
  var carObj = {};

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

    collision(chicken, carObj);

  }

  function collision(chicken, carObj) {

    if (chicken.left <= carObj.right && carObj.left <= chicken.right && chicken.top <= carObj.bottom && carObj.top <= chicken.bottom) {
      console.log("hit");
    }

  }




  // Interval to move cars continuously
  $(".startbtn").click(function(){
    // setInterval(moveFastCar1,2000); // how often you want the cars to appear
    // setInterval(moveFastCar2,2000); // how often you want the cars to appear
    // setInterval(moveSlowCar1,3000);
    // setInterval(moveSlowCar2,3000);
    // setInterval(moveSlowCar3,3000);
    // setInterval(moveFastestCar,1500);
  });

  setInterval(getCoords,1000);





}); // end of $(document).ready()
