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

var birthAnswer = prompt('Was I born in Washington state?').toLowerCase();

var travelAnswer = prompt('Have I travelled internationally?').toLowerCase();

var roleplayingAnswer = prompt('Is D&D my favorite roleplaying system?').toLowerCase();

var numCatsAnswer = prompt('Does my family have only one cat?').toLowerCase();