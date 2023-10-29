function startTimer() {
  // Define your timer logic here
  var countdownTime = 60000;

  // Update the countdown every second
  var countdown = setInterval(function() {
    // Calculate the remaining time
    countdownTime -= 1000;

    // Calculate the minutes and seconds
    var minutes = Math.floor(countdownTime / 60000);
    var seconds = Math.floor((countdownTime % 60000) / 1000);

    // Display the countdown
    document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s";

    // If the countdown is finished, display a message
    if (countdownTime <= 0) {
      clearInterval(countdown);
      document.getElementById("timer").innerHTML = "Timer has ended.";
    }
  }, 1000);
}

function hideButton() {
  var button = document.querySelector('.button');
  button.style.display = 'none';
}

function startGame() {
    var score = 0;
}
