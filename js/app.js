'use strict';

//This function takes in a user Statement and checks to see if it is in the correct format(in this case some variant of yes or no). That statement will have already been converted to lower case.
// function isCorrectFormat(statement){
//   var firstChar = statement.charAt(0);
//   if (firstChar === ('y') || firstChar === ('n')){
//     return true;
//   }8
//   else {
//     alert('That is not a possible answer');
//     return false;
//   }
// }

var correctQuestions = 0;

var questionArray = ['Is my name Alex?', 'Was I born in Washington state?', 'Have I travelled internationally?', 'Is D&D my favorite roleplaying system?', 'Does my immediate family have any cats?', 'How many dogs does my immediate family have?', 'Which one of the following countries have I never visited: Argentina, Australia, Canada, Italy, Sweden, Peru, United Kingdom'];
var answerArray = ['y', 'n', 'y', 'n', 'n', 0, 'Sweden'];
var answerTypeArray = ['yes/no', 'yes/no', 'yes/no', 'yes/no', 'yes/no', 'number', 'country-array'];
var countryArray = ['Argentina', 'Australia', 'Canada', 'Italy', 'Sweden', 'Peru', 'United Kingdom'];

for (let i = 0; i < questionArray.length; i++){
  let correctFormat = false;
  var userAnswer = prompt(questionArray[i]);

  //check if userAnswer is in the correct format
  if (answerTypeArray[i] === 'yes/no'){
    userAnswer = userAnswer.toLowerCase();
    if (userAnswer === 'y' || userAnswer === 'n'){
      correctFormat = true;
    }
  }
  else if (answerTypeArray[i] === 'number'){
    userAnswer = parseInt(userAnswer);
    if (isNaN(userAnswer)){
      correctFormat = false;
    }
    else {
      correctFormat = true;
    }
  }
  else if (answerTypeArray[i] === 'country-array'){
    for (let n = 0; n < countryArray.length; n++){
      if (userAnswer === countryArray[n]){
        correctFormat = true;
        break;
      }
    }
  }

  //check userAnswer if correct format, otherwise reduce i by to compensate for the for loop auto increasing it
  if (correctFormat){
    if (userAnswer === answerArray[i]){
      correctQuestions++;
      alert('Correct! You seem pretty awesome');
    }
    else {
      alert('You are wrong. Maybe try at all next time?');
    }
  }
  else {
    alert('That is not a possible answer.');
    i--;
  }
}


if (correctQuestions !== questionArray.length){
  alert('You got ' + correctQuestions + ' questions out of ' + questionArray.length + ' correct.');
}
else if (correctQuestions === questionArray.length){
  alert('You got every question right.');
}
else {
  console.log('There has been a failure in mathematics. The user did not get a number of questions correct equal to the number of questions and also did not get a number of quesitons correct that was not equal to the number of questions.');
}