import MediaPlayer from "../MediaPlayer";

class AutoPlay {
    constructor() {
        // this.run = () => console.log("AutoPlay");
    }
    run(player: MediaPlayer) {
        if (!player.media.muted) {
            player.media.muted = true;
        }
        player.play();
    }
}


export default AutoPlay;