var ball1 = document.querySelector("#ball1");
var ball2 = document.querySelector("#ball2");
var ball3 = document.querySelector("#ball3");
var ball4 = document.querySelector("#ball4");
var tl = new TimelineLite();

tl
  .to(ball1, 1, { scale: 2,  ease: Elastic.easeOut.config(1, 0.3) })
  .to(ball2, 1, { scale: 3,  ease: Elastic.easeOut.config(1, 0.3) },"-=.75")
  .to(ball3, 1, { scale: 4,  ease: Elastic.easeOut.config(1, 0.3) },"-=.75")
  .to(ball4, 1, { scale: 5,  ease: Elastic.easeOut.config(1, 0.3) },"-=.75");

// click anywhere to restart
document.addEventListener("click",function(){
  tl.restart();
},false);