const basicIMPLayout = `
    <div id="IMPLayoutContainer">
      <div id="IMPLayoutFront">
        <div id="IMPMusicLogo">
          <img width="50px" id="IMPMusicLogoIcon" src="./assets/images/icons/defaultMusicIcon.jpg">
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
