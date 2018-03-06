'use strict';

//This function takes in a user Statement and checks to see if it is in the correct format(in this case some variant of yes or no). That statement will have already been converted to lower case.
function isCorrectFormat(statement){
  var firstChar = statement.charAt(0);
  if (firstChar === ('y' || 'n')){
    return true;
  }
  else {
    alert('That is not a possible answer');
    return false;
  }
}

var correctAnswer = false;
while (!correctAnswer){
  var nameAnswer = prompt('Is my name Alex?').toLowerCase();
  correctAnswer = isCorrectFormat(nameAnswer);
}

if (nameAnswer === 'y'){
  alert('Correct! Legally my name is Alexander, but I\'ve literally never been called that... ever');
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
  correctAnswer = isCorrectFormat(birthAnswer);
}
if (birthAnswer === 'y') {
  alert('Wrong, I was born in California.');
}
else if (birthAnswer === 'n') {
  alert('Correct, I was born in California.');
}
else {
  console.log('How did you get here??? Invalid User Input got past the validation function.');
}

correctAnswer = false;
while(!correctAnswer){
  var travelAnswer = prompt('Have I travelled internationally?').toLowerCase();
  correctAnswer = isCorrectFormat(travelAnswer);
}
if (travelAnswer === 'y') {
  alert('Correct! I have travelled internationally many times');
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
  correctAnswer = isCorrectFormat(roleplayingAnswer);
}
if (roleplayingAnswer === 'y') {
  alert('Wrong, D&D is one of my least favorite roleplaying systems I have actually played.');
}
else if (roleplayingAnswer === 'n') {
  alert('Correct, I dont really like D&D very much.');
}
else {
  console.log('How did you get here??? Invalid User Input got past the validation function.');
}

correctAnswer = false;
while(!correctAnswer){
  var numCatsAnswer = prompt('Does my family have only one cat?').toLowerCase();
  correctAnswer = isCorrectFormat(numCatsAnswer);
}
if (numCatsAnswer === 'y') {
  alert('Wrong, there are five total cats in my immediate family, three in Washington and two in California.');
}
else if (nameAnswer === 'n') {
  alert('Correct, there are five total cats in my immediate family, three in Washington and two in California.');
}
else {
  console.log('How did you get here??? Invalid User Input got past the validation function.');
}