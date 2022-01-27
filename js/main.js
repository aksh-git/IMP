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

function initIMPLayout(){
    IMPLayout.innerHTML=basicIMPLayout;
}

window.onload = () =>{
    initIMPLayout();
}
