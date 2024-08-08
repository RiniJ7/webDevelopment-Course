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

