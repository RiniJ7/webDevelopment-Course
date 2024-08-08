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

//adding the keypress event , returns the key pressed
$("input").keypress(function(event) {
    console.log(event.key);
//modifying the text based on key press
    $("h1").text(event.key);
})

//mouseover method

$("h1").on("mouseover", function() {
    $("h1").css("color", "purple");
});

//adding new elements with jQuery
//here i am creating a button element with text 'New'


$("h1").before("<button>New</button>");
$("h1").after("<button>New</button>");

//the buttons are created within the h1
//before the h1 text, but within the h1 tag
$("h1").prepend("<button>New</button>");
//after the h1 text, but within the h1 tag
$("h1").append("<button>New</button>");


//removing button elements
//$("button").remove();

//showing and hiding html elements

$("button").on("click", function(){
    $("h1").hide()
})

$("button").on("click", function(){
    $("h1").show()
})

//toggling between hide and show
$("button").on("click", function(){
    $("h1").toggle()
})

//progressive hiding
$("button").on("click", function(){
    $("h1").fadeout()
})


//progressive showing
$("button").on("click", function(){
    $("h1").fadein()
})

//more
$("button").on("click", function(){
    $("h1").slideToggle()
})

//custom animation

//progressive showing
$("button").on("click", function(){
    $("h1").animate({
        opacity: 0.5
    })
})

//combining methods
$("button").on("click", function(){
$("h1").slideUp().slideDown().animate({opacity:0.5})
});