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
  });
}

//this you can tap the identity of the button that triggered the event

// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();

//while adding the event listeners, the function is called without the paranthesis.
//If the function is called with the paranthesis, it becomes a method, and get called when the event listener is added and not when the button is clicked (ie the event)

// The document.querySelector method selects the first element in the document that matches the specified CSS selector. In your case, the selector "button" targets all <button> elements. However, querySelector will only return the first match it finds in the DOM.
