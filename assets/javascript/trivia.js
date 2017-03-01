// function that waits for document to load before executing javascript within
$(document).ready( function(){
// time variable
var count = 5;
// array of objects to output to the DOM
var questions = [{
	question: "where is your main house?",
	answer1:"AL",
	answer2:"NY",
	answer3:"WV",
	answer4:"GA",
	correct:"NY"
},
{
	question: "where is your car?",
	answer1:"AL",
	answer2:"NY",
	answer3:"WV",
	answer4:"GA",
	correct:"WV"
},
{
	question: "where is your duck?",
	answer1:"AL",
	answer2:"NY",
	answer3:"WV",
	answer4:"GA",
	correct:"AL"
},
{
	question: "where is your farm?",
	answer1:"AL",
	answer2:"NY",
	answer3:"WV",
	answer4:"GA",
	correct:"GA"
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


$("#questions").html(questions[1]);

});
