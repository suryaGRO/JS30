
document.addEventListener("keypress",(e) => {

  var audio = new Audio(`sounds/${e.key}.mp3`);
  audio.play();

  var currbtn = document.querySelector(`.${e.key}`);
  currbtn.classList.add("pressed");
  setTimeout(function(){
    currbtn.classList.remove("pressed");
  }, 150);

})
