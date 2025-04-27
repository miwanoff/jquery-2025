$(function () {
  $("#b1").click(function () {
    // alert("Hello");
    $("#p1").css("color", 'blue')
  });
  
  $("#b2").click(function () {
    // alert("!!!!");
    $("#demodiv").css({"background":'gold', 'padding':"10px"})

  });

//   $("#p1").mouseenter(function(){
//     alert("You entered p1!");
//   });
//   $("#p1").mouseleave(function(){
//     alert("Bye! You now leave p1!");
//   });
// $("#p1").hover(function(){
//     alert("You entered p1!");
//   },
//   function(){
//     alert("Bye! You now leave p1!");
//   });

  $("#b3").click(function () {
    $('#demodiv').animate({color: 'red'})
  });



});
