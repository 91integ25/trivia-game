// function that waits for document to load before executing javascript within
$(document).ready( function(){
// time variable
var count = 30;
var incorrect = 0;
var correct = 0;
var unanswered = 0;

// array of objects to output to the DOM
var questions = [{
	question: "where is your main house?",
	answer:["AL","NY","WV","GA"],
	correct:"NY",
	value:"location"

},
{
	question: "what is your car?",
	answer:["BMW","Toyota","VW","FORD"],
	correct:"VW",
	value:"car"
},
{
	question: "what is your duck?",
	answer:["mallard","green","goose","swan"],
	correct:"swan",
	value:"duck"
},
{
	question: "which is your farm?",
	answer:["tyson","pepperidge","jojo","old"],
	correct:"pepperidge",
	value:"farm"
}
];
// appending start button to start page
var questionDiv = $("#questions");
$("#questions").append("<button>" + "start" + "</button>");
$("button").css({"width":"300px","height":"50px","font-size":"30px"});

//on click button will disappear questions,answers and timer will appear
$("button").click(function(){
	$("#questions").empty();
// creates timer display
	var timerDiv = $("<div>");
	$(timerDiv).text("Time remaining: " + count);
	$("#questions").append(timerDiv);
	
	

 questions.map(function(e, index) { 
 //creates buttons dynamically
  var questionAnswer = e.answer;
  var newForm = $("<form>");

  $("#questions").append(newForm);

  //creates questions dynamically
  var questionHeader = $("<h3>");

  $(questionHeader).append(e.question);
  $(newForm).append(questionHeader);
  $("#answers").append(answerBtn);

  // adding buttons dynamically
  for (var i = 0; i < questionAnswer.length; i++) {
    var answerBtn = $("<input>");
    var answerLabel = $("<label>").text(questionAnswer[i]);

    $(answerBtn).attr({
      "type": "radio",
      "name": e.value,
      "value": questionAnswer[i]


    });

    $(answerBtn).addClass("values");

    $(answerLabel).append(answerBtn);
    $(newForm).append(answerLabel);
   console.log(answerBtn[i]);
  }// end of for loop to display buttons and values

});// end of map function

 var countDown = setInterval(function () {
	count--;
	$(timerDiv).text("Time remaining: " + count);

	if(count <= 0){
			$("#questions").empty();
			
			$("#questions").append("<p>" + "correct: " + correct + "</p>");
			$("#questions").append("<p>" + "incorrect: " + incorrect + "</p>");
			$("#questions").append("<p>" + "unanswered: " + unanswered + "</p>");
		
		clearInterval(countDown);
	}
}, 1000);
 console.log(correct);
 console.log(incorrect);
 console.log(unanswered);


});

});
