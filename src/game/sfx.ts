let ctx: AudioContext | null = null;

export function unlockAudio() {
  if (typeof window === "undefined") return;
  if (!ctx) ctx = new AudioContext();
  if (ctx.state === "suspended") void ctx.resume();
}

function beep(freq: number, when: number, dur: number, type: OscillatorType, gain: number) {
  if (!ctx) return;
  const osc = ctx.createOscillator();
  const amp = ctx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  amp.gain.setValueAtTime(gain, when);
  amp.gain.exponentialRampToValueAtTime(0.0001, when + dur);
  osc.connect(amp);
  amp.connect(ctx.destination);
  osc.start(when);
  osc.stop(when + dur);
}

export function playClue() {
  if (!ctx) return;
  const t = ctx.currentTime;
  beep(523, t, 0.12, "sine", 0.05);
  beep(784, t + 0.09, 0.18, "sine", 0.04);
}

export function playWrong() {
  if (!ctx) return;
  const t = ctx.currentTime;
  beep(196, t, 0.22, "triangle", 0.05);
  beep(146, t + 0.12, 0.28, "triangle", 0.04);
}

export function playSolve() {
  if (!ctx) return;
  const t = ctx.currentTime;
  [523, 659, 784, 1046].forEach((freq, index) => {
    beep(freq, t + index * 0.09, 0.2, "sine", 0.045);
  });
}
