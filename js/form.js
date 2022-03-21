function divClick(){
  document.getElementById("demo").innerHTML = "clickedElement";
}

var x1 = 0;

$(".radio-btn").click(function(){
  $(this).toggleClass("div-selected");
});
