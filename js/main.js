const basicLMPLayout = `
    <div id="LMPLayoutContainer">
      <div id="LMPLayoutFront">
        <div id="LMPMusicLogo">
          <img width="50px" id="LMPMusicLogoIcon" src="./assets/images/icons/defaultMusicIcon.jpg">
        </div>
      </div>
      <div id="LMPLayoutBottom">
        <div id="LMPbtns">  
            <i id="playPauseBtn" onclick="play(this)" class="fa fa-play-circle-o" aria-hidden="true"></i>
        </div>
      </div>
    </div>
`;
let LMPLayout = document.getElementById("LMPLayout");

function initLMPLayout(){
    LMPLayout.innerHTML=basicLMPLayout;
}

window.onload = () =>{
    initLMPLayout();
}
