import MediaPlayer from "@israellp24/platzimediaplayer";
import AutoPlay from "@israellp24/platzimediaplayer/src/plugins/AutoPlay";
import AutoPause from "@israellp24/platzimediaplayer/src/plugins/AutoPause";
import Ads from "@israellp24/platzimediaplayer/src/plugins/Ads";

const video = document.querySelector("video");
const player = new MediaPlayer({ 
    el: video,
    plugins: [
        new AutoPlay(),
        new AutoPause(),
        new Ads()
    ] 
});

const playbutton:HTMLAnchorElement = document.querySelector("#playButton");
playbutton.onclick = () => player.togglePlay();

const muteButton:HTMLAnchorElement = document.querySelector("#muteButton");
muteButton.onclick = () => {
    if (player.media.muted) {
        player.unmute();
    } else {
        player.mute();
    }
}

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    })
}