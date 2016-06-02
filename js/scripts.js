$(document).ready(function() {


  $("form").submit(function(event) {
    event.preventDefault();

    var deathValue = parseInt($("#death").val());
    var abortionValue = parseInt($("#abortion").val());
    var taxValue = parseInt($("#tax").val());
    var immigrationValue = parseInt($("#immigration").val());
    var score = deathValue + abortionValue + taxValue + immigrationValue;

    if (score <= 20){
      $("#farLeft").css("background", "red");
      $("#farLeft").siblings().css("background", "none");
    }

    else if (score > 20 && score <= 40){
      $("#modLeft").css("background", "green");
      $("#modLeft").siblings().css("background", "none");
    }

    else if (score > 40 && score <= 60){
      $("#centrist").css("background", "blue");
      $("#centrist").siblings().css("background", "none");
    }

    else if (score > 60 && score <= 80){
      $("#modRight").css("background", "pink");
      $("#modRight").siblings().css("background", "none");
    }

    else if (score > 80 && score <= 100){
      $("#farRight").css("background", "gray");
      $("#farRight").siblings().css("background", "none");
    }

    else {
      alert("You broke it, you anarchist!")
    }
  });
});
