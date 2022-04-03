var button = document.getElementById("navbtn");
var button2 = document.getElementById("navbtn2");
var nav = document.getElementById("navigation");

//add enevent listener to button
button.addEventListener("click", function(){
    nav.classList.toggle("show");
    if (nav.classList.contains("show")){
        nav.classList.remove('hide');
    } else {
        nav.classList.add('hide');
    }
});

button2.addEventListener("click", function(){
    nav.classList.toggle("show");
    if (nav.classList.contains("show")){
        nav.classList.remove('hide');
    } else {
        nav.classList.add('hide');
    }
});
