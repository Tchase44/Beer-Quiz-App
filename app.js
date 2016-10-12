var questions = [{
	questionText : "How many 'types' of beer are there?",
	answerOptions : ['2','10','30','50+'],
	answerText : "all beers boil down to ales or lagers",
	correctAnswer: 0
} , {
	questionText : "What does IPA stand for?",
 	answerOptions : ['Imperial Pale Ale','India Pale Ale','Inclusive Pale Ale','Imported Pale Ale'],
	answerText : "Named from beer that shipped to India loaded with hops to keep from spoiling during the trip",
	correctAnswer:1
} , {
	questionText : "What is the earlist estimated year beer is thought to have been made?",
	answerOptions : ['9500 BC','7000 BC','4000 BC','2500 BC'],
 	answerText : "it is suspected humans first fermented grains around this time. 7,500-5,000 BC is the oldest confrimed fermented beverage",
	correctAnswer: 0
} , {
	questionText : "What is the scientific name for the study of beer?",
	answerOptions : ['Oenology','Rheology','Zythology','Zymology'],
	answerText : "Zythology is the study of beer! Rheology,Oenology,Zymology are the studies of Liquids, Wine, and Fermentation respectivly.",
	correctAnswer: 2
} , {
	questionText : "Which country consumes the most beer per person?",
	answerOptions : ['Ireland','Germany','Czech Republic','United States'],
	answerText : "The Czech Republic as a country drinks the most beer per person than anyother in the world",
	correctAnswer: 2
}];

var questionCount = 0;
var meterFiller = 0;

$(document).ready(function(){
	
	$('form#js-form').hide();
	$('button#sumbitButton').hide();
	$("button#nextButton").hide();

	$('button#startButton').click(function(event){
		event.preventDefault();
		// hide button show button
		$('button#startButton').remove();
		$('button#sumbitButton').show();
		$('form#js-form').show();
		// show 1st qestion
		display();
	});

	$('button#sumbitButton').click(function(event){
		event.preventDefault();
		checkAnswer();
		nextQ();
		fillTheMeter();
	});
	$('button#nextButton').click(function(event){
		event.preventDefault();
		removeCheck();
		display();
		$('button#nextButton').hide();
	});	
});
// check for right answer
function checkAnswer(){
	var a = $( "input:checked" ).val();
	if (a == questions[questionCount].correctAnswer) {
		$( "#answerText" ).text(questions[questionCount].answerText);
		meterFiller++;
		$('#sumbitButton').hide();
		$("button#nextButton").show();
	} else {
		$('#answerText').text("Wrong!");
		$('#sumbitButton').hide();
		$("button#nextButton").show();		
	};
};
// removed radio button check...
function removeCheck(){
	$("input:radio").removeAttr("checked");
};
// up question count to load next
function nextQ(){
	questionCount++;
};
// load question & check for end & reset
function display(){
	var noRight = meterFiller;
	if (questionCount>=5) {
		$("form#js-form").hide();
		$("p#answerText").text('Thats the last one!'+'You got '+noRight+' of 5 Correct!');
		
		$('p#answerText').append('<button>'+'Try Again'+'</button>').click(function(event){
			event.preventDefault();
			questionCount = 0;
			meterFiller = 0;
			$('form#js-form').show();
			display();
		});
	} else {
		// loads Next Question
	$("form#js-form p").text(questions[questionCount].questionText);
	$("span.option1").text(questions[questionCount].answerOptions[0]);
	$("span.option2").text(questions[questionCount].answerOptions[1]);
	$("span.option3").text(questions[questionCount].answerOptions[2]);
	$("span.option4").text(questions[questionCount].answerOptions[3]);
	$("#answerText").text(" ");
	$('button#sumbitButton').show();
	};
};

function fillTheMeter (){
	if (meterFiller === 0) {
	$('div#myBar').css({"width": "0%"});
	$('div#label span').text('0');
	} else if (meterFiller === 1) {
		$('div#myBar').css({"width": "20%"});
		$('div#label span').text('20');
	} else if (meterFiller === 2) {
		$('div#myBar').css({"width": "40%"});
		$('div#label span').text('40');
	} else if (meterFiller === 3) {
		$('div#myBar').css({"width": "60%"});
		$('div#label span').text('60');
	} else if (meterFiller === 4) {
		$('div#myBar').css({"width": "80%"});
		$('div#label span').text('80');
	} else if (meterFiller === 5) {
		$('div#myBar').css({"width": "100%"});
		$('div#label span').text('100');
	};
};


// function progressing(percent, $element){
// 	var progressBarWidth = percent * $element.width() /100;
// 	$element.find('div').animate({width:progressBarWidth},500).html(percent + "%")
// };