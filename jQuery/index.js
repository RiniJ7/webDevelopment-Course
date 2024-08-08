alert("Working");


// $(document).ready(function(){
//     $("h1").css("color", "red");
// })


//the below is the example of setting the value
//$("h1").css("color", "red");
//the below is the example of getting the value
console.log($("h1").css("color"));
console.log($("h1").css("font-size"));
$("button").css("color", "purple");

//adding class to selected element
$("h1").addClass("big-title");


//remove class to selected element
$("h1").removeClass("big-title");

//adding multiple classes to jQuery

$("h1").addClass("big-title margin-50");

// checking if a particular element has a class

//this returns a true or false if the element has a particular class
$("h1").hasClass("margin-50");

//adding text using jQuery : two ways of doing this

$("h1").text("Good bye");
$("button").text("Don't click me");
$("button").html("<em>Hello</em>");

//manipulating attributes using jQuery
//getting the value of an attribute
console.log($("img").attr("src"));

//setting the value of the attribute

$("a").attr("href", "wwww.yahoo.com");

//getting a list of all parameters in the class

$("h1").attr("class");

//using event listeners using jQuery
$("h1").click(function(){
    $("h1").css("color","purple")
});

//adding click listener to all buttons without using the for loop in the element selector
$("button").click(function(){
    $("h1").css("color", "purple");
});

//adding the keypress event
$("input").keypress(function(event) {
    console.log(event.key);
})