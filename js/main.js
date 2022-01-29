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
            <i id="playPauseBtn" onclick="play(this)" class="fa fa-play-circle-o" aria-hidden="true"></i>
        </div>
      </div>
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
  let bgColor = "rgb(" + red + ", " + green + ", " + blue + ",0.8)";
  playerbg.style.background = bgColor;
}

window.onload = () =>{
  initIMPLayout();
  fetch("../assets/songs.json").then(response => {
    return response.json();
  }).then(jsondata => console.log(jsondata));
  random_bg_color();
  //loadTrack(1);
}