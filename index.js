// This is so that if speech is still playing from previous session, it stops on page load
speechSynthesis.cancel();

var isSpeaking = false;

// Initialize the speech synthesis
var speech = new SpeechSynthesisUtterance();
speech.rate = 1;
speech.pitch = 1;
speech.volume = 1;
speech.voice = speechSynthesis.getVoices()[0];

function speakInputText() {
  isSpeaking = true;

  speech.text = document.getElementById("textInput").value;
  speechSynthesis.speak(speech);
}

function pauseSpeech() {
  if (isSpeaking) {
    isSpeaking = false;
    speechSynthesis.pause();
    document.getElementById(
      "pauseButton"
    ).innerHTML = `Resume<img class="icon-link-small"
    src="./assets/icons/resumeIcon.svg">`;
  } else {
    isSpeaking = true;
    speechSynthesis.resume();
    document.getElementById(
      "pauseButton"
    ).innerHTML = `Pause<img class="icon-link-small"
    src="./assets/icons/pauseIcon.svg">`;
  }
}

function stopSpeech() {
  isSpeaking = false;
  speechSynthesis.cancel();
}

function changeVoice(voice) {
  if (voice == "voice1") {
    // console.log((speech.voice = speechSynthesis.getVoices()[8]));
    speech.voice = speechSynthesis.getVoices()[8];
  } else if (voice == "voice2") {
    // console.log((speech.voice = speechSynthesis.getVoices()[0]));
    speech.voice = speechSynthesis.getVoices()[0];
  } else if (voice == "voice3") {
    // console.log((speech.voice = speechSynthesis.getVoices()[1]));
    speech.voice = speechSynthesis.getVoices()[1];
  } else if (voice == "voice4") {
    // console.log((speech.voice = speechSynthesis.getVoices()[11]));
    speech.voice = speechSynthesis.getVoices()[11];
  } else if (voice == "voice5") {
    // console.log((speech.voice = speechSynthesis.getVoices()[12]));
    speech.voice = speechSynthesis.getVoices()[12];
  } else if (voice == "voice6") {
    // console.log((speech.voice = speechSynthesis.getVoices()[18]));
    speech.voice = speechSynthesis.getVoices()[18];
  } else if (voice == "voice7") {
    // console.log((speech.voice = speechSynthesis.getVoices()[33]));
    speech.voice = speechSynthesis.getVoices()[33];
  } else if (voice == "voice8") {
    // console.log((speech.voice = speechSynthesis.getVoices()[37]));
    speech.voice = speechSynthesis.getVoices()[37];
  } else if (voice == "voice9") {
    // console.log((speech.voice = speechSynthesis.getVoices()[41]));
    speech.voice = speechSynthesis.getVoices()[41];
  }

  // for (let i = 0; i < 100; i++) {
  //   console.log((speech.voice = speechSynthesis.getVoices()[i]));
  // }
}

function changeVoiceSpeed(voiceSpeed) {
  // For some reason, speed below 0.5 doesn't work
  if (voiceSpeed == "speed2") {
    speech.rate = 2;
  } else if (voiceSpeed == "speed1.75") {
    speech.rate = 1.75;
  } else if (voiceSpeed == "speed1.5") {
    speech.rate = 1.5;
  } else if (voiceSpeed == "speed1.25") {
    speech.rate = 1.25;
  } else if (voiceSpeed == "speed1") {
    speech.rate = 1;
  } else if (voiceSpeed == "speed0.75") {
    speech.rate = 0.75;
  } else if (voiceSpeed == "speed0.5") {
    speech.rate = 0.5;
  }
}
function convertToSpeech() {
  const text = document.getElementById('textInput').value;
  const utterance = new SpeechSynthesisUtterance(text);

  // Define a promise for speech synthesis
  const speechPromise = new Promise((resolve, reject) => {
    utterance.onend = () => resolve();
    utterance.onerror = (event) => reject(event.error);
  });

  // Start speech synthesis
  window.speechSynthesis.speak(utterance);

  // After synthesis completes, create a download link
  speechPromise.then(() => {
    const blob = new Blob([new Uint8Array(0)]);
    const blobURL = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = blobURL;
    link.download = 'converted_audio.mp3'; // Change the file format if needed (wav, mp3, etc.)
    link.click();
  }).catch((error) => {
    console.error('Speech synthesis error:', error);
  });
}
