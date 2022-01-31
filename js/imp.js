const basicIMPLayout = `
    <div id="IMPLayoutContainer">
      <div id="IMPLayoutFront">
        <div id="IMPMusicLogo">
          <span class="gradient-border">
            <img width="30%" id="IMPMusicLogoIcon" src="https://cdn.jsdelivr.net/gh/aksh-git/IMP@master/assets/images/icons/defaultMusicIcon.jpg">
          </span>
        </div>
      </div>
      <div id="IMPLayoutBottom">
      <span id="songIcon">&#9834;</span>
        <div id="IMPbtns">  
            <i title="Play/Pause" id="playPauseBtn" onclick="play(this)" class="fa fa-play-circle" aria-hidden="true"></i>
        </div>
        <div id="IMPbtns_2">
          <i title="Load New Play-List" onclick="refreshSongs(this)" class="white fa fa-refresh" aria-hidden="true"></i>
          <i title="More Info" onclick="moreInfo()" class="white fa fa-info-circle" aria-hidden="true"></i>
        </div>
      </div>
    </div>
`;
let IMPLayout = document.getElementById("IMPLayout");
let playerbg;
let songIcon;

function initIMPLayout(){
    IMPLayout.innerHTML=basicIMPLayout;
    playerbg = document.getElementById("IMPLayoutBottom");
    songIcon = document.getElementById("songIcon");
}

function random_bg_color() {
  let red = Math.floor(Math.random() * 256) + 64;
  let green = Math.floor(Math.random() * 256) + 64;
  let blue = Math.floor(Math.random() * 256) + 64;
  let bgColor = "rgb(" + red + ", " + green + ", " + blue + ",0.4)";
  playerbg.style.background = bgColor;
}

function moreInfo(){
  window.open("https://github.com/aksh-git/IMP#readme");
}

window.onload = () =>{
  initIMPLayout();
  random_bg_color();
  loadNewSet();
  loadTrack(0);
}