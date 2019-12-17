/*Kyle Bigart, 10-6-19
Engine.js holds the majority of the javescript funcitons to run calculations
 and selecting a photo/image to enlarge it.
 Scripts had to be seprate in the other files is due to error conflicts with certain fuctnions/methods.
*/
//Allow the browser to be more strict on errors, including undeclared values.
"use strict";

//A shortcut to say document.getElementById(id) by $(NAMEOFID)
var $ = function (id) {
    return document.getElementById(id);
};
/*
Mouse Over and Mouse from JQuerry.
*/
//https://www.youtube.com/watch?v=Dc2WHsuiXos
//https://stackoverflow.com/questions/34867276/change-nan-to-error-in-javascript-calculator
//https://www.w3schools.com/js/js_errors.asp
//This declares photoReel element to show all the images listed.
var images = document.getElementById("photoReel").getElementsByTagName("img");
//When an image have the mouse cursor hovering over an image a red border is around it.
//Otherwise, the image have a grey border.
for (var i = 0; i < images.length; i++) {
    images[i].onmouseover = function () {
        this.style.cursor = 'hand';
        this.style.borderColor = 'red';
    }
    images[i].onmouseout = function () {
        this.style.cursor = 'pointer';
        this.style.borderColor = 'grey';
    }
}
//This method/function is declaring, when the user clicks on an image will result the main image,
// being replaced by what the user had just clicked.
function changeImage(event) {
    event = event || window.event;

    var targetElement = event.target || event.srcElement;
    if (targetElement.tagName == "IMG") {
        document.getElementById("mainImage").src = targetElement.getAttribute("src");
    }
}
/*
function boardGameQuiz(event){


}*/
//The Source Below is from https://www.youtube.com/watch?v=riDzcEQbX6k and https://github.com/WebDevSimplified/JavaScript-Quiz-App :
//https://surveyjs.io/Examples/Library/
//NPS Survey: