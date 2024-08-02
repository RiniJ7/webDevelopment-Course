// document.querySelector("button").addEventListener("click",handleClick)

// function handleClick(){
//     alert("I got clicked!")
// }

//using anonymus function

document.querySelector("button").addEventListener("click",function(){
    alert("I got clicked!")
    })




//while adding the event listeners, the function is called without the paranthesis.
//If the function is called with the paranthesis, it becomes a method, and get called when the event listener is added and not when the button is clicked (ie the event)

// The document.querySelector method selects the first element in the document that matches the specified CSS selector. In your case, the selector "button" targets all <button> elements. However, querySelector will only return the first match it finds in the DOM.