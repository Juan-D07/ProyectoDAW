const btnPause = document.getElementById("boton-pause");
const btnPauseimg = document.getElementById("boton-pause-img");
const btnMute = document.getElementById("boton-mute");
const btnMuteimg = document.getElementById("boton-mute-img");
const txtTimeStart = document.getElementById("playbar-time-start");
const txtTimeEnd = document.getElementById("playbar-time-end");
const audioEle=document.getElementById("audioElement");
const btnPrev = document.getElementById("boton-prev");
const btnNext = document.getElementById("boton-next");
const songImg=document.getElementById("song-img");
const songName = document.getElementById("song-name-txt");
const songAuthor = document.getElementById("song-author-txt");
// currentSong = 2;
currentSong = parseInt(Math.random()*3);

const songImgList = ["webroot/images/Kevin_MacLeod-Monkeys_Spinning_Monkeys.png",
    "webroot/images/Kevin_MacLeod-Sneaky_Snitch.png",
    "webroot/images/Kevin_MacLeod-Local_Forecast.png"
];

const songNameList = ["Monkeys Spinning Monkeys","Sneaky Snitch","Local Forecast"];

const songAuthorList = ["Kevin MacLeod","Kevin MacLeod","Kevin MacLeod"];

const songAudioList = ["monkeys_spinning_mokeys_audio.mp3","sneaky_snitch_audio.mp3","local_forecast_audio.mp3"

];





document.addEventListener("DOMContentLoaded", () => {
  setSong();
  setPause();
});

audioEle.addEventListener("loadedmetadata", () =>{
  setDuration();
})

function setDuration(){
  if (audioEle.duration % 60 <10){
    txtTimeEnd.textContent = parseInt(audioEle.duration/60) +":0"+parseInt(audioEle.duration%60);
  }
  else{
    txtTimeEnd.textContent = parseInt(audioEle.duration/60) +":" +parseInt(audioEle.duration%60);
  }
}

function onStep(){
  if (audioEle.currentTime < 60){
    if (audioEle.currentTime % 60 <10){
      txtTimeStart.textContent = "0:0"+parseInt(audioEle.currentTime);
    }
    else{
      txtTimeStart.textContent = "0:"+parseInt(audioEle.currentTime);
    }
  }
  else {
    if (audioEle.currentTime % 60 <10){
    txtTimeStart.textContent = parseInt(audioEle.currentTime/60) +":0"+parseInt(audioEle.currentTime % 60);
    }
    else{
      txtTimeStart.textContent = parseInt(audioEle.currentTime/60) + ":" + parseInt(audioEle.currentTime%60);
    }
  }
  if(audioEle.currentTime==audioEle.duration){
    currentSong++;
    setSong();
    setPlay();
  }
  requestAnimationFrame(onStep);
}

requestAnimationFrame(onStep);


btnPause.addEventListener("click",()=>{
  if (btnPause.classList.contains("pausa")){
    setPause();
  }
  else if (btnPause.classList.contains("reanudar")){
    setPlay();
  }
})

btnMute.addEventListener("click",()=>{
  if (btnMute.classList.contains("unmute")){
    btnMuteimg.src="webroot/images/muted.png";
    btnMute.classList.toggle("unmute");
    btnMute.classList.toggle("mute");
    audioEle.volume=0.0;
  }
  else if (btnMute.classList.contains("mute")){
    btnMuteimg.src="webroot/images/unmuted.png";
    btnMute.classList.toggle("mute");
    btnMute.classList.toggle("unmute");
    audioEle.volume=1.0;
  }
})

btnPrev.addEventListener("click",()=>{
  if (audioEle.currentTime>3){
    audioEle.currentTime=0;
  }
  else{
    currentSong--;
    setSong();
    setPlay();
  }
})

btnNext.addEventListener("click",()=>{
  currentSong++;
  setSong();
  setPlay();
})

function setSong(){
  if (currentSong<0){
    currentSong=songImgList.length-1;
  }
  else if (currentSong==songImgList.length){
    currentSong=0;
  }
  songImg.src=songImgList[currentSong];
  songName.textContent=songNameList[currentSong];
  songAuthor.textContent=songAuthorList[currentSong];
  audioEle.src="../../webroot/audio/"+songAudioList[currentSong];
}



function setPause(){
  btnPauseimg.src="webroot/images/play.png";
  btnPause.classList.remove("pausa");
  btnPause.classList.add("reanudar");
  audioEle.pause();
}

function setPlay(){
  btnPauseimg.src="webroot/images/pause.png";
  btnPause.classList.remove("reanudar");
  btnPause.classList.add("pausa");
  audioEle.play();
}
