var body = document.getElementsByTagName("body")[0];
var drop = document.getElementsByClassName("Dropdown")[0];
var hamburger = document.getElementsByClassName("Navigation-hamburger")[0];
var close = document.getElementsByClassName("Close-button")[0];
var dropContent = document.getElementsByClassName("Dropdown-content")[0];
var items = document.getElementsByClassName("Dropdown-content")[0];

hamburger.addEventListener("click", function open() {
    drop.classList.add("visible");
    dropContent.classList.add("visible2");
    body.classList.add("lockScroll");
})

items.addEventListener("click", function minimize() {
    drop.classList.remove("visible");
    body.classList.remove("lockScroll");
})

close.addEventListener("click", function close() {
    drop.classList.remove("visible");
    dropContent.classList.remove("visible2");
    body.classList.remove("lockScroll");
})

var rellax = new Rellax('.rellax');


var scroll = new SmoothScroll('a[href*="#"]');
