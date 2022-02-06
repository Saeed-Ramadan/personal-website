//scripting words
var i = 0;
var txt = "Front-end Web Developer"; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}