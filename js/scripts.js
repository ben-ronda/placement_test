
function pingpong(userInput) {
  var results = [];

  for(var i = 1; i <= userInput; i++){
    if (i % 15 === 0) {
      $("ul").append("<li>" + "ping pong" + "</li>");
      results.push("ping pong");
    } 
    else if (i % 5 === 0) {
      $("ul").append("<li>" + "pong" + "</li>");
      results.push("pong");
    } 
    else if (i % 3 === 0) {
      $("ul").append("<li>" + "ping" + "</li>");
      results.push("ping");
    } 
    else { 
      $("ul").append("<li>" + i + "</li>");
      results.push(i);
    }
  }
  return results;
}

$(document).ready(function() {
  $("button#ping-pong").click(function() {
    $("ul").empty();
    pingpong($("#userInput").val());
    event.preventDefault();
  });
});