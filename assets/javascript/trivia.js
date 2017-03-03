// function that waits for document to load before executing javascript within
$(document).ready( function(){
// time variable
var count = 5;
var incorrect = [];
var correct = [];
var unanswered = [];

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
// function used to countdown the time remaining
// var countDown = setInterval(function () {
// 	count--;
// 	console.log(count)
// 	if(count <= 0){
// 		console.log("Time is up!!");
// 		clearInterval(countDown);
// 	}
// }, 1000);

var questionDiv = $("#questions");

$("#questions").append("<button>" + "start" + "</button>");

$("button").css({"width":"300px","height":"50px","font-size":"30px"});
//on click button will disappear and questions and answers will appear
$("button").click(function(){
	$("#questions").empty();

// adds questions to page

// for (var i = 0; i = questions.length;i++){
// 	unanswered = questions.pop();

// 	var newDiv = $("<h3>");
// 	$(newDiv).append(unanswered.question);
// 	$("#questions").append(newDiv);

// 	var answerBtn = $("<input>");
// 	$(answerBtn).attr({"type":"radio", "value":"location"});
// 	$(answerBtn).append(unanswered.answer[i]);
// 	$("#quetions").append(answerBtn);
// 	console.log(unanswered.answer[i]);
// }



 questions.map(function(e,index){
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
	for(var i = 0; i < questionAnswer.length;i++){
	var answerBtn = $("<input>");
	

	$(answerBtn).attr({"type":"radio","value":questionAnswer[i],"name":e.value});
	$(answerBtn).addClass("values");

	$(answerBtn).text(questionAnswer[i]);
	
	$(newForm).append(answerBtn);
	
	}
	
	
	
});

});

});
