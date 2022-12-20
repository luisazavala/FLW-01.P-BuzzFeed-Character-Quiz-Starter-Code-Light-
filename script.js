document.addEventListener('DOMContentLoaded', buzzfeedQuiz, false);

function buzzfeedQuiz() {

  // task 4: declare variables for the html elements you'll use as selectors later. You need the submit button, display div, and all three inputs for your questions.
  
  let button = document.querySelector(".submit");
  let displayResult = document.querySelector(".displayResult");
  let q1 = document.querySelector(".q1");
  let q2 = document.querySelector(".q2");
  let q3 = document.querySelector(".q3");
  let q4 = document.querySelector(".q4");



  // task 5: declare variables for values we'll set later. You'll need one for an image source, a result and a score for each question.

  let imgSrc;
  let result;
  let scoreq1;
  let scoreq2;
  let scoreq3;
  let scoreq4;
  
  
  


  button.onclick = function() {

    // task 6: Declare user input variables for each of your questions. If you have three questions, you should have three variables. These variables should equal the value of the user input for each question.

    let answer1 = q1.value.toLowerCase();
    let answer2 = q2.value.toLowerCase();
    let answer3 = q3.value.toLowerCase();  
    let answer4 = q4.value.toLowerCase();



    // task 7: create a conditional statement for the responses to Question 1 based on the user input.

    if(answer1 === "BTS"){
      scoreq1 = 2
    } else if ( answer1 === "The Smiths"){  
      scoreq1 = 4
    } else if (answer1 === "Nirvana"){
      scoreq1 = 3
    } else if (answer1 === "The Weeknd"){
      scoreq1 = 1
    };




    // task 8: create a conditional statement for the responses to Question 2 based on the user input.
    
  if(answer2 === "Studying for a quiz"){
      scoreq2 = 2
    } else if ( answer2 === "Watching a sad movie"){  
      scoreq2 = 3
    } else if (answer2 === "Partying"){
      scoreq2 = 1
    } else if (answer2 === "Playing music while eating your favorite snack"){
      scoreq2 = 4
    };





    // task 9: create a conditional statement for the responses to Question 3 based on the user input.

    
    if(answer3 === "Legally Blonde"){
      scoreq3 = 1
    } else if ( answer3 === "Top Gun"){  
      scoreq3 = 2
    } else if (answer3 === "Little Miss Sunshine"){
      scoreq3 = 3
    } else if (answer3 === "Perks of Being a Wallflower"){
      scoreq3 = 4
    };



    if(answer4 === "Books"){
      scoreq4 = 4
    } else if ( answer4 === "Makeup"){  
      scoreq4 = 1
    } else if (answer4 === "Pens"){
      scoreq4 = 2
    } else if (answer4 === "New Pens"){
      scoreq4 = 3
    };


    // task 10: declare a variable for the total score of the quiz and set it equal to the sum of each question score.


    let totalScore = scoreq1 + scoreq2 + scoreq3 + scoreq4;
    


    

    // task 11: create a conditional statement for the result to the quiz based on the total score. Using string interpolation, display these to the page: the result, an image that corresponds and a message to go with it.

    if(totalScore >= 12){
    } else if( totalScore < 11 && totalScore>= 9){
      displayResult.insertAdjacentHTML("beforeend", `Congratulations! You are depressed! Sorry! `)
    } else if( totalScore <=8 && totalScore >= 7 ){
      displayResult.insertAdjacentHTML("beforeend", `Yayy, you are mildly depressed!`)
    } else if( totalScore <=6 && totalScore >= 5){
      displayResult.insertAdjacentHTML("beforeend", `Ew! You are way too happy! Good for you!`)
    } else if( totalScore <=4){
      displayResult.insertAdjacentHTML("beforeend", `Boo! You’re sane! Hope you get bitten by a snake!`)
    };






  };
}