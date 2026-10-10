import { useEffect, useRef, useState } from "react";
import {
  type ClueId,
  type LocationId,
  type MotiveId,
  type SuspectId,
} from "@/game/content";
import { evaluate, wrongHint } from "@/game/logic";
import { freshSave, loadSave, writeSave, type SaveData, type Screen } from "@/game/save";
import { playClue, playSolve, playWrong, unlockAudio } from "@/game/sfx";
import { TalkScreen } from "./TalkScreen";
import { DeduceScreen } from "./DeduceScreen";
import {
  TitleScreen,
  BriefScreen,
  HubScreen,
  SceneScreen,
  BookScreen,
  EndingScreen,
} from "./Screens";

export function DetectiveApp() {
  const [save, setSave] = useState<SaveData>(() => freshSave());
  const [cover, setCover] = useState(true);
  const [hydrated, setHydrated] = useState(false);
  const [hasPrior, setHasPrior] = useState(false);
  const lock = useRef(false);

  useEffect(() => {
    const loaded = loadSave();
    if (loaded) {
      setSave(loaded);
      setHasPrior(true);
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated || cover) return;
    writeSave(save);
  }, [save, hydrated, cover]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [save.screen, cover]);

  function goto(screen: Screen, partial?: Partial<SaveData>) {
    setSave((current) => ({ ...current, ...partial, screen }));
  }

  function onClue(id: ClueId) {
    if (!save.found.includes(id) && !save.muted) {
      unlockAudio();
      playClue();
    }
    setSave((current) =>
      current.found.includes(id) ? current : { ...current, found: [...current.found, id] },
    );
  }

  function onAsk(suspect: SuspectId, questionId: string) {
    const key = `${suspect}:${questionId}`;
    setSave((current) => ({
      ...current,
      suspect,
      asked: current.asked.includes(key) ? current.asked : [...current.asked, key],
      talked: current.talked.includes(suspect) ? current.talked : [...current.talked, suspect],
    }));
  }

  function onAccuse(suspect: SuspectId, motive: MotiveId, evidence: ClueId[]) {
    if (lock.current) return;
    lock.current = true;
    const verdict = evaluate({ suspect, motive, score: save.score });
    if (!verdict.ok) {
      if (suspect === "boyu") {
        lock.current = false;
        return;
      }
      if (!save.muted) {
        unlockAudio();
        playWrong();
      }
      const hint = wrongHint(suspect, save.found);
      setSave((current) => ({
        ...current,
        score: verdict.score,
        wrong: current.wrong + 1,
        screen: "hub",
        lastHint: { text: hint, from: current.score, to: verdict.score },
      }));
      lock.current = false;
      return;
    }
    if (!save.muted) {
      unlockAudio();
      playSolve();
    }
    setSave((current) => ({
      ...current,
      score: verdict.score,
      screen: "ending",
      lastHint: null,
      solved: { motive, evidence, weakMotive: verdict.weakMotive },
    }));
  }

  function onRestart() {
    lock.current = false;
    setSave(freshSave(save.muted));
    setCover(false);
    setHasPrior(true);
  }

  function onMute() {
    setSave((current) => ({ ...current, muted: !current.muted }));
    unlockAudio();
  }

  if (cover) {
    return (
      <TitleScreen
        hydrated={hydrated}
        hasPrior={hasPrior}
        found={save.found.length}
        score={save.score}
        solved={save.solved !== null}
        muted={save.muted}
        onContinue={() => setCover(false)}
        onNew={onRestart}
        onMute={onMute}
      />
    );
  }

  const back = () => goto(save.solved ? "ending" : "hub");

  return (
    <div
      className="min-h-dvh bg-ink text-paper"
      onPointerDown={() => {
        if (!save.muted) unlockAudio();
      }}
    >
      {save.screen === "brief" ? <BriefScreen onStart={() => goto("hub")} /> : null}
      {save.screen === "hub" ? (
        <HubScreen
          save={save}
          onLocation={(id) =>
            setSave((current) => ({
              ...current,
              screen: "scene",
              location: id,
              visited: current.visited.includes(id) ? current.visited : [...current.visited, id],
            }))
          }
          onTalk={(id) => goto("talk", { suspect: id })}
          onBook={() => goto("book")}
          onDeduce={() => goto("deduce")}
          onCover={() => setCover(true)}
          onDismissHint={() => setSave((current) => ({ ...current, lastHint: null }))}
          onMute={onMute}
        />
      ) : null}
      {save.screen === "scene" ? (
        <SceneScreen save={save} onBack={back} onBook={() => goto("book")} onMute={onMute} onClue={onClue} />
      ) : null}
      {save.screen === "talk" ? (
        <TalkScreen
          key={save.suspect}
          save={save}
          onBack={back}
          onBook={() => goto("book")}
          onMute={onMute}
          onAsk={onAsk}
        />
      ) : null}
      {save.screen === "book" ? <BookScreen save={save} onBack={back} onMute={onMute} /> : null}
      {save.screen === "deduce" ? (
        <DeduceScreen
          save={save}
          onBack={back}
          onBook={() => goto("book")}
          onMute={onMute}
          onAccuse={onAccuse}
        />
      ) : null}
      {save.screen === "ending" ? (
        <EndingScreen save={save} onBook={() => goto("book")} onRestart={onRestart} onMute={onMute} />
      ) : null}
    </div>
  );
}
