$(document)ready.function() {
  $("button#ping-pong").click(function() {
    var userInput = $("#userInput").val();
    var i;
    function pingpong(userInput) {
    for(i = 1; i <= userInput; i++){
      if (i % 15 == 0) {
        $("ul").append("<li>" + "ping pong" + "</li>");
      } 
      else if (i % 5 == 0) {
        $("ul").append("<li>" + "pong" + "</li>");
      } 
      else if (i % 3 ==0) {
        $("ul").append("<li>" + "ping" + "</li>");
      } 
      else { 
        $("ul").append("<li>" + i + "</li>");
      }
    }
  }
}