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

const numQuestions = 6;
var correctQuestions = 0;

var correctAnswer = false;
while (!correctAnswer){
  var nameAnswer = prompt('Is my name Alex?').toLowerCase();
  let firstChar = nameAnswer.charAt(0);
  if (firstChar === ('y') || firstChar === ('n')){
    correctAnswer = true;
  }
  else {
    alert('That is not a possible answer');
    correctAnswer = false;
  }
}

if (nameAnswer === 'y'){
  alert('Correct! Legally my name is Alexander, but I\'ve literally never been called that... ever');
  correctQuestions++;
}
else if (nameAnswer === 'n'){
  alert('Wrong, my name is in fact Alex.');
}
else {
  console.log('How did you get here??? Invalid User Input got past the validation function.');
}

correctAnswer = false;
while (!correctAnswer) {
  var birthAnswer = prompt('Was I born in Washington state?').toLowerCase();
  let firstChar = birthAnswer.charAt(0);
  if (firstChar === ('y') || firstChar === ('n')){
    correctAnswer = true;
  }
  else {
    alert('That is not a possible answer');
    correctAnswer = false;
  }
}
if (birthAnswer === 'y') {
  alert('Wrong, I was born in California.');
}
else if (birthAnswer === 'n') {
  alert('Correct, I was born in California.');
  correctQuestions++;
}
else {
  console.log('How did you get here??? Invalid User Input got past the validation function.');
}

correctAnswer = false;
while(!correctAnswer){
  var travelAnswer = prompt('Have I travelled internationally?').toLowerCase();
  let firstChar = travelAnswer.charAt(0);
  if (firstChar === ('y') || firstChar === ('n')){
    correctAnswer = true;
  }
  else {
    alert('That is not a possible answer');
    correctAnswer = false;
  }}
if (travelAnswer === 'y') {
  alert('Correct! I have travelled internationally many times');
  correctQuestions++;
}
else if (nameAnswer === 'n') {
  alert('Wrong, I have been outside the United States many times');
}
else {
  console.log('How did you get here??? Invalid User Input got past the validation function.');
}

correctAnswer = false;
while(!correctAnswer){
  var roleplayingAnswer = prompt('Is D&D my favorite roleplaying system?').toLowerCase();
  let firstChar = roleplayingAnswer.charAt(0);
  if (firstChar === ('y') || firstChar === ('n')){
    correctAnswer = true;
  }
  else {
    alert('That is not a possible answer');
    correctAnswer = false;
  }
}
if (roleplayingAnswer === 'y') {
  alert('Wrong, D&D is one of my least favorite roleplaying systems I have actually played.');
}
else if (roleplayingAnswer === 'n') {
  alert('Correct, I dont really like D&D very much.');
  correctAnswer++;
}
else {
  console.log('How did you get here??? Invalid User Input got past the validation function.');
}

correctAnswer = false;
while(!correctAnswer){
  var numCatsAnswer = prompt('Does my family have only one cat?').toLowerCase();
  let firstChar = numCatsAnswer.charAt(0);
  if (firstChar === ('y') || firstChar === ('n')){
    correctAnswer = true;
  }
  else {
    alert('That is not a possible answer');
    correctAnswer = false;
  }
}
if (numCatsAnswer === 'y') {
  alert('Wrong, there are five total cats in my immediate family, three in Washington and two in California.');
}
else if (nameAnswer === 'n') {
  alert('Correct, there are five total cats in my immediate family, three in Washington and two in California.');
  correctQuestions++;
}
else {
  console.log('How did you get here??? Invalid User Input got past the validation function.');
}

correctAnswer = false;
while(!correctAnswer){
  var numDogsAnswer = parseInt(prompt('How many dogs does my immediate family have?'));
  if (isNaN(numDogsAnswer)){
    alert('That is not a possible answer.');
    correctAnswer = false;
  }
  else{
    correctAnswer = true;
    if (numDogsAnswer === 0){
      alert('Correct, my immediate family owns no dogs and hasn\'t owned any dogs for as longs as I have been alive');
      correctQuestions++;
    }
    else if (numDogsAnswer !== 0){
      alert('Wrong, my immediate family owns no dogs and has never owned a dog while I have been alive.');
    }
    else {
      console.log('Math has broken. Somehow there is something that is both not equal to a number and not not equal to a number.');
    }
  }
}

if (correctQuestions !== numQuestions){
  alert('You got ' + correctQuestions + ' questions out of ' + numQuestions + ' correct.');
}
else if (correctQuestions === numQuestions){
  alert('You got every question right.');
}
else {
  console.log('There has been a failure in mathematics. The user did not get a number of questions correct equal to the number of questions and also did not get a number of quesitons correct that was not equal to the number of questions.');
}