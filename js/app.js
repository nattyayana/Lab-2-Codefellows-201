'use strict';
//check if userAnswer is in the correct format
function getUserResponse(question) {
  var userResponse= prompt(question);
  return userResponse; 

}
function validate(answerType, answer, array = null ) {
  var correctFormat = false;


  
  if (answerType === 'yes/no'){
    answer = answer.toLowerCase().charAt(0);
    if (answer === 'y' || answer === 'n'){
      correctFormat = true;
    }
  }
  else if (answerType === 'number'){
    answer = parseInt(answer);
    if (isNaN(answer)){
      correctFormat = false;
    }
    else {
      correctFormat = true;
    }
  }
  else if (answerType === 'array'){
    for (let n = 0; n < array.length; n++){
      if (answer === array[n]){
        correctFormat = true;
        break;
      }
    }
  }
  console.log(correctFormat);
  return correctFormat;
}
function answer(userAnswer, wrongResponse, correctResponse, answer,answerType, counter = 0)  {
  if (userAnswer === answer){
   
    alert(correctResponse);
    return true;
  }
  else {
    alert(wrongResponse);
    if (answerType === 'number' && counter > 0){
      alert('You have ' + counter + ' guesses left.');
      return false;
    }
    else if (answerType === 'array' && counter > 0){
      alert('You have ' + counter + ' guesses left.');
      return false;
    }
    else {
      return false;
    
    }

  }
}
function questionLoop(){
  var correctQuestions = 0;


  //this is a set of arrays that are related to the questions asked of the user

  var questionArray = ['Is my name Alex?', 'Was I born in Washington state?', 'Have I travelled internationally?', 'Is D&D my favorite roleplaying system?', 'Does my immediate family have any cats?', 'How many dogs does my immediate family have?', 'Which one of the following countries have I never visited: Argentina, Australia, Canada, Italy, Sweden, Peru, United Kingdom'];


  var answerArray = ['y', 'n', 'y', 'n', 'n', 0, 'Sweden'];


  var answerTypeArray = ['yes/no', 'yes/no', 'yes/no', 'yes/no', 'yes/no', 'number', 'array'];
  var correctResponse = ['Yes it is!', 'Correct! I was born in California.', 'Yes, many times.', 'It is actually one of my least favorite.', 'Yes we own five.', 'Correct, we\'ve never owned dogs while I\'ve been alive', 'Correct, but I would like to go there someday.'];
  var wrongResponse = ['Actually it is Alex(Legally it\'s Alexander', 'No, I was born in California', 'Acutally I\'ve been out of the country quite often', 'No, I actually greatly dislike it.', 'We actually own five cats', 'No, not that many dogs.', 'Wrong, I have been there before.'];

  var countryArray = ['Argentina', 'Australia', 'Canada', 'Italy', 'Sweden', 'Peru', 'United Kingdom'];

  //this is a set of counters for the loops
  var i = 0;
  var numberCounter = 4;
  var countryCounter = 6;


  while (i < questionArray.length){
    var userResponse = getUserResponse(questionArray[i]);
    if (answerTypeArray[i] ==='array'){
      var isValid = validate(answerTypeArray[i], userResponse, countryArray);
    }
    else {
      var isValid = validate(answerTypeArray[i], userResponse);

    }
    if (isValid) {
      if (answerTypeArray[i]==='number') {
        var correct= answer(userResponse, wrongResponse, correctResponse, answerArray[i], correctQuestions, answerTypeArray[i],numberCounter);
        if (correct) {  correctQuestions++;i++; }

        else if (numberCounter < 0 && !correct) { i++;}
      }
      else {
        numberCounter--;
      }
    }
    else if (answerTypeArray[i]==='array') {
      var correct= answer(userResponse, wrongResponse, correctResponse, answerArray[i], correctQuestions, answerTypeArray[i], countryCounter);
      if (correct) {
        correctQuestions++;
        i++;
        
      }
      else if (countryCounter < 0 && !correct) {
        i++;
      }
      else {
        countryCounter--;
      }

    }
    else {
      var correct= answer(userResponse, wrongResponse, correctResponse, answerArray[i], correctQuestions, answerTypeArray[i]); 
      if (correct) { 
        correctQuestions++;
        i++;  
      }
      else {i++;}
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
}
questionLoop();