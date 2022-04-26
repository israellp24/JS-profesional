import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";

const video = document.querySelector("video");
const player = new MediaPlayer({ 
    el: video,
    plugins: [
        new AutoPlay(),
        new AutoPause()
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