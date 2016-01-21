
function pingpong(userInput) {
  for(var i = 1; i <= userInput; i++){
    if (i % 15 === 0) {
      $("ul").append("<li>" + "ping pong" + "</li>");
    } 
    else if (i % 5 === 0) {
      $("ul").append("<li>" + "pong" + "</li>");
    } 
    else if (i % 3 === 0) {
      $("ul").append("<li>" + "ping" + "</li>");
    } 
    else { 
      $("ul").append("<li>" + i + "</li>");
    }
  }
}

$(document).ready(function() {
  $("button#ping-pong").click(function() {
    $("ul").empty();
    pingpong($("#userInput").val());
    event.preventDefault();
  });
});