## Objectives

* Practice using the fundamentals of jQuery that were explored in lecture.

## Setup

01. Create a new project folder and connect it to a GitHub repository. Initialize your project with a README.md that has a brief description of the purpose of this assignment, along with the title "jQuery Drills".
02. Create an index.html file and an app.js file and link the two together.
03. Create a script tag in the index.html and link to the jQuery CDN.

## Tasks

04. In app.js, make sure all the HTML has loaded before using jQuery.
* __Hint:__ 
  * https://api.jquery.com/ready/
05. Create an `<input>` with a `type="submit"`, `id="btnSubmit"`, and `value="Submit"` in the index.html. Open the `index.html` in a browser and verify that a button appears.
06. In app.js and use jQuery to select the `<input>` element you just created by the `id`.
07. Add a click event handler to the `<input>` button that will alert a message in the browser when the button is clicked. 
* __Hint:__
  * http://api.jquery.com/on/
08. In the index.html, create a `<form>` element with an `<input type="text">` field and the `<input type="submit">` you already created.
09. In app.js when the form is submitted, `alert` the value of the text input field.
* https://developer.mozilla.org/en-US/docs/Web/API/Window/alert 
* __Hint:__
  * https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors
* __Hint:__
  * http://api.jquery.com/val/
010. If the user has typed in the input field then the button should be enabled, otherwise the button should be disabled. 
* __Hint:__
  * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-disabled
011. Create a `div` element and append it to the body.
012. When the user types in the input field and clicks submit, append the text in an h2 element to the div.
013. When the user mouses over the h2 element, assign it a new background color and border radius. 
* __Hint:__
  * http://api.jquery.com/css/
014. Great job! Now, delete the code for creating the h2 and we are going to work on creating a list.
015. Use jQuery to create an unordered list and append it to the body.
016. When the user submits the form, append the text as list item to the unordered list.
017. When the user clicks on the li element, assign it a random color.
018. When the user double clicks on the list, remove the item that was clicked on. 
* __Hint:__
  * https://api.jquery.com/remove/

## Hints

* jQuery on method: 
  * http://api.jquery.com/on/
* jQuery click method: 
  * https://api.jquery.com/click/
* `Math.random()` an be used to generate a random number.
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    * RGB colors range from `rgb(0, 0, 0)` for black to `rgb(255, 255, 255)` for white.
    * You will want to generate 3 random numbers between 0 and 255 and set the RGB values using jQuery.