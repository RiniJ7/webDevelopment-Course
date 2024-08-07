// document.querySelector("button").addEventListener("click",handleClick)

// function handleClick(){
//     alert("I got clicked!")
// }

//using anonymus function

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    //   here a new variable is declared to which a new audio object is assigned
    //then we use the method called .play() to play the audio

    this.style.color = "white";
    //to modify the innerHTML
    var buttonInnerHTML = this.innerHTML;
    switch (buttonInnerHTML) {
      case "w":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
      case "a":
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
      case "s":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
      case "d":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
      case "j":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;
      case "k":
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
      case "l":
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
        break;
      default: console.log(buttonInnerHTML);
      break;
    }
  });
}

document.addEventListener("keypress", function(event) {
console.log(event);
});

//this you can tap the identity of the button that triggered the event

// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();

//while adding the event listeners, the function is called without the paranthesis.
//If the function is called with the paranthesis, it becomes a method, and get called when the event listener is added and not when the button is clicked (ie the event)

// The document.querySelector method selects the first element in the document that matches the specified CSS selector. In your case, the selector "button" targets all <button> elements. However, querySelector will only return the first match it finds in the DOM.
