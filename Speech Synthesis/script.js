const VOICE_API = new SpeechSynthesisUtterance();
const LANGUAGES_DROPDOWN = document.querySelector('[name="voice"]');
const OPTIONS = document.querySelectorAll('[type="range"], [name="text"]');
const SPEAK_BUTTON = document.querySelector("#speak");
const STOP_BUTTON = document.querySelector("#stop");

let voicesList = [];

VOICE_API.text = document.querySelector('[name="text"]').value;

function populateVoices() {
	voicesList = this.getVoices();
	LANGUAGES_DROPDOWN.innerHTML = voicesList
		.map((voice) => `<option value="${voice.name}">${voice.name}</option>`)
		.join("");
}

function setVoice() {
	VOICE_API.voice = voicesList.find((voice) => voice.name === this.value);
	toggle();
}

function toggle(startOver = true) {
	speechSynthesis.cancel();
	if (startOver) {
		speechSynthesis.speak(VOICE_API);
	}
}

function setOption() {
	VOICE_API[this.name] = this.value;
	toggle();
}

speechSynthesis.addEventListener("voiceschanged", populateVoices);
LANGUAGES_DROPDOWN.addEventListener("change", setVoice);
OPTIONS.forEach((option) => option.addEventListener("change", setOption));
SPEAK_BUTTON.addEventListener("click", toggle);
STOP_BUTTON.addEventListener("click", () => toggle(false));
