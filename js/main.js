const basicIMPLayout = `
    <div id="IMPLayoutContainer">
      <div id="IMPLayoutFront">
        <div id="IMPMusicLogo">
          <span class="gradient-border">
            <img width="30%" id="IMPMusicLogoIcon" src="./assets/images/icons/defaultMusicIcon.jpg">
          </span>
        </div>
      </div>
      <div id="IMPLayoutBottom">
        <div id="IMPbtns">  
            <i id="playPauseBtn" onclick="play(this)" class="fa fa-play-circle" aria-hidden="true"></i>
        </div>
        <div id="IMPbtns_2">
          <i title="Load New Play-List" onclick="refreshSongs(this)" class="white fa fa-refresh" aria-hidden="true"></i>
          <i title="More Info" onclick="moreInfo()" class="white fa fa-info-circle" aria-hidden="true"></i>
        </div>
      </div>
      <span></span>
    </div>
`;
let IMPLayout = document.getElementById("IMPLayout");
let playerbg;


function initIMPLayout(){
    IMPLayout.innerHTML=basicIMPLayout;
    playerbg = document.getElementById("IMPLayoutBottom");
}

function random_bg_color() {
  let red = Math.floor(Math.random() * 256) + 64;
  let green = Math.floor(Math.random() * 256) + 64;
  let blue = Math.floor(Math.random() * 256) + 64;
  let bgColor = "rgb(" + red + ", " + green + ", " + blue + ",0.4)";
  playerbg.style.background = bgColor;
}

function moreInfo(){
  window.open("https://github.com/aksh-git/IMP#imp---js");
}

window.onload = () =>{
  initIMPLayout();
  random_bg_color();
  loadNewSet();
  loadTrack(0);
}