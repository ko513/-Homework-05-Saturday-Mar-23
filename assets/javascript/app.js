
var questions = [
  {
  question: "What African country served as the setting for Tatooine in <em>Star Wars?</em>",
  answer: ["Morocco", "Egypt", "Tunisia", "Ethiopia"],
  name: "tatooineCountry",
  correct: "Tunisia",
  divClass: ".tatooineCountry"
  },
  {
  question: "What British actor portrayed the suave, sinister villain Hans Gruber<br>in the first <em>Die Hard</em> movie?",
  answer: ["Hugh Jackman", "Alan Rickman", "Pierce Brosnan", "Gary Oldman"],
  name: "hansGruber",
  correct: "Alan Rickman",
  divClass: ".hansGruber"
  },
  {
  question: "What actor was the first choice to play 'Dirty Harry' Callahan,<br>the role eventually made iconic by Clint Eastwood?",
  answer: ["Steve McQueen", "Robert Shaw", "Marlon Brando", "Frank Sinatra"],
  name: "dirtyHarry",
  correct: "Frank Sinatra",
  divClass: ".dirtyHarry"
  },
  {
  question: "Which film tells the true story of the schizophrenic mathematician John Nash?",
  answer: ["On the Edge", "Confessions of a Dangerous Mind", "A Beautiful Mind", "The Butterfly Effect"],
  name: "johnNash",
  correct: "A Beautiful Mind",
  divClass: ".johnNash"
  },
  {
  question: "What is the largest country in the world?",
  answer: ["United States", "China", "Canada", "Russia"],
  name: "largestCountry",
  correct: "China",
  divClass: ".largestCountry"
  },
  {
  question: "In what country can you visit Machu Picchu?",
  answer: ["Chile", "Bolivia", "Peru", "Colombia"],
  name: "machuPicchu",
  correct: "Peru",
  divClass: ".machuPicchu"
  },
  {
  question: "What is the largest continent on earth?",
  answer: ["Europe", "Antarctica", "Africa", "Asia"],
  name: "largestContinent",
  correct: "Asia",
  divClass: ".largestContinent"
  },
  {
  question: "How many members are there in the US Congress?",
  answer: ["100", "538", "438", "535"],
  name: "membersOfCongress",
  correct: "538",
  divClass: ".membersOfCongress"
  },
  {
  question: "What is the subject of the 19th Amendment of the US Constitution?",
  answer: ["The abolition of slavery", "Women's suffrage", "Presidential Succession", "Prohibition"],
  name: "constitutionalAmendment19",
  correct: "Women's suffrage",
  divClass: ".constitutionalAmendment19"
  },
  {
  question: "Who was the 16th President of the United States?",
  answer: ["John Quincy Adams", "Thomas Jefferson", "Abraham Lincoln", "Theodore Roosevelt"],
  name: "abeLincoln",
  correct: "Abraham Lincoln",
  divClass: ".abeLincoln"
  }
]


var
  seconds = 30,
  correctAnswers, incorrectAnswers,
  labels = ["first", "second", "third", "forth"];

//  Click to start, then display questions
$("#startButton").on('click', function() {
  $('#splashScreen').hide();
  $('#game-board').show();
  displayQuestions();
  countdown();
});


// Display the questions
var displayQuestions = function() {
  $('#questions').children().not('#doneButton').remove();

  // Build list of 10 questions
  for (var i = 0; i < 10; i++) {
    $('#questions').prepend('<div class="' + questions[i].name + '"></div>');
    $(questions[i].divClass).append('<div class ="question-title">' + questions[i].question + '</div>');

    // Build lists of 4 radio buttons & answers for each question
    for (var j = 0; j <= 3; j++) {
      $(questions[i].divClass).append('<input type="radio"  name="' + questions[i].name + '" value="' + questions[i].answer[j] + '"><label for="' + labels[j] + '">' + questions[i].answer[j] + '</label>');
    }

    $('#questions').prepend('<hr>');
  }
}


var countdown = function() {

  var timer = setInterval(function() {
    seconds -= 1;
    $("#secondsRemaining").html(seconds);

    if (seconds == 5)
      { $("#secondsRemaining").css("color", "red"); }

    if (seconds <= 0) {
      checkAnswers();
      displayAnswers();
      clearInterval(timer);
      return;
    }
  }, 1000);

};  //  countdown


// Tewrminate timer loop when "Done" button is clicked
$('#doneButton').on('click', function() { seconds = 0; });


function checkAnswers() {
  correctAnswers = 0;
  incorrectAnswers = 0;

  // loop through questions array & match radio buttons with values of "checked" to correct answers
  for (var i = 0; i < 10; i++) {
    if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct)
      { correctAnswers++; }
    else
      { incorrectAnswers++; };
  }
}


function displayAnswers() {
  $('#correctAnswers').append(correctAnswers);
  $('#incorrectAnswers').append(incorrectAnswers);

  $('#game-board').hide();
  $('#results').show();
}


$("#playAgainButton").on('click', function() {
  seconds = 30;
  correctAnswers = 0;
  incorrectAnswers = 0;

  $("#secondsRemaining").text("30")

  $('#correctAnswers').text("Correct Answers: ")
  $('#incorrectAnswers').text("Incorrect Answers: " )

  $('#results').hide();
  $('#game-board').hide();
  $('#splashScreen').show();
});

