'use strict';

var correctQuestions = 0;

//this is a set of arrays that are related to the questions asked of the user
var questionArray = ['Is my name Alex?', 'Was I born in Washington state?', 'Have I travelled internationally?', 'Is D&D my favorite roleplaying system?', 'Does my immediate family have any cats?', 'How many dogs does my immediate family have?', 'Which one of the following countries have I never visited: Argentina, Australia, Canada, Italy, Sweden, Peru, United Kingdom'];
var answerArray = ['y', 'n', 'y', 'n', 'n', 0, 'Sweden'];
var answerTypeArray = ['yes/no', 'yes/no', 'yes/no', 'yes/no', 'yes/no', 'number', 'country-array'];
var correctResponse = ['Yes it is!', 'Correct! I was born in California.', 'Yes, many times.', 'It is actually one of my least favorite.', 'Yes we own five.', 'Correct, we\'ve never owned dogs while I\'ve been alive', 'Correct, but I would like to go there someday.'];
var wrongResponse = ['Actually it is Alex(Legally it\'s Alexander', 'No, I was born in California', 'Acutally I\'ve been out of the country quite often', 'No, I actually greatly dislike it.', 'We actually own five cats', 'What??? My family has never owned dogs while I\'ve been alive', 'Wrong, I have been there before.'];

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
      alert(correctResponse[i]);
    }
    else {
      alert(wrongResponse[i]);
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