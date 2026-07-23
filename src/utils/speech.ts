// Web Speech Synthesis wrapper for AI voice narration
export function speakText(text: string, lang: string = "en-US") {
  if (!("speechSynthesis" in window)) return;

  window.speechSynthesis.cancel(); // Stop current speaking

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.95; // Slightly measured pace
  utterance.pitch = 1.0;

  // Try to find natural voice
  const voices = window.speechSynthesis.getVoices();
  const matchedVoice = voices.find((v) => v.lang.startsWith(lang.slice(0, 2))) || voices[0];
  if (matchedVoice) {
    utterance.voice = matchedVoice;
  }

  window.speechSynthesis.speak(utterance);
}

export function stopSpeaking() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}
