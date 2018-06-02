$(document).ready(function(){

  // Adding the chicken to the board
  console.log('working');

  $(function(){

    var chicken = "<img class='chicken' src='images/chicken.png'>";
    $(".player").append(chicken);

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











});
