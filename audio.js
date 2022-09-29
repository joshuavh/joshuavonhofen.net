const playerKick = new Tone.Player("Roland TR-909/BTAAADA.WAV").toDestination();
const playerClap = new Tone.Player("Roland TR-909/HANDCLP1.WAV").toDestination();
const playerHiHat = new Tone.Player("Roland TR-909/HHOD0.WAV").toDestination();
let playing = false;
let started = false;

Tone.Transport.scheduleRepeat((time) => {
    // use the callback time to schedule events
    playerKick.start(time).stop(time + 0.5);
}, "4n");

Tone.Transport.scheduleRepeat((time) => {
    // use the callback time to schedule events
    playerClap.start(time).stop(time + 0.5);
}, "2n");

Tone.Transport.scheduleRepeat((time) => {
    // use the callback time to schedule events
    playerHiHat.start(time).stop(time + 0.5);
}, "8n");




const configPlayButton = () => {
    // grab the button from the DOM
    const button = document.getElementById("play-button");
    
    button.addEventListener("click", (e) => {
      if (!started) {
        // Only exectued the first time the button is clicked
        // initializing Tone, setting the volume, and setting up the loop
        
        Tone.start();
        Tone.getDestination().volume.rampTo(-10, 0.001)
        started = true;
      }
  
      // toggle Tone.Trasport and the flag variable.
      if (playing) {
        e.target.innerText = "Play";
        Tone.Transport.stop();
        playing = false;
      } else {
        e.target.innerText = "Stop";
        Tone.Transport.start();
        playing = true;
      }
    });
  };

  /* configPlayButton();
makeSequencer(); */
window.addEventListener("DOMContentLoaded", () => {
    configPlayButton();
  });