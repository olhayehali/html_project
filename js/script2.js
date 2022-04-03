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
$('.chart').easyPieChart({
    size: 160,
    barColor: "#36e617",
    scaleLength: 0,
    lineWidth: 1,
    trackColor: "#525151",
    lineCap: "circle",
    animate: 2000,
  });
