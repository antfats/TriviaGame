$(document).ready(function () {
    //Questions here!
    var questions = [{
        question: "What does the <h1> tag do in html",
        choices: ["Capitalizes everything", "Formats the text", "Makes everything inside a header", "Nothing"],
        validAnswer: 2
    }, {
        question: "How do I call a function in javascript",
        choices: ["functionname();", "functionname.call();", "call $('functionname')", "functionname;"],
        validAnswer: 0
    }, {
        question: "How do we call an element with jquery?",
        choices: ["$(#elementName)", "Formats the text", "Makes everything inside a header", "Nothing"],
        validAnswer: 2
    }, {
        question: "What method converts a string into a value?",
        choices: [".stringToInt", ".int", ".append", ".parseInt"],
        validAnswer: 3
    }
    ]

    //timer
    var intervalId;
    var counter = 0;
    var timeLeft = 30;
    var timer = $("#time");
    // timer.html(timeLeft - counter);

    // timeIt(function () {

    function timeIt() {
        counter++;
        timer.html(timeLeft - counter);
    }
    function intervalFunction() {
        setInterval(timeIt, 1000);

    }






    //   if (count <= 0)
    //   {
    //      clearInterval(counter);
    //      return;
    //   }





    //.click function to start the game
    $("#button").click(function () {
        intervalFunction();
        $(".content").append(questions[1]);

    })


});
