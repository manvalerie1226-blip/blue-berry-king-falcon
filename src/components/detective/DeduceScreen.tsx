import { useState } from "react";
import { Check } from "lucide-react";
import {
  CLUES,
  CLUE_MAP,
  MAX_PIN,
  MIN_CLUES,
  MIN_PIN,
  MOTIVES,
  SUSPECTS,
  SUSPECT_MAP,
  type ClueId,
  type MotiveId,
  type SuspectId,
} from "@/game/content";
import type { SaveData } from "@/game/save";
import { Art, ClueIcon, TopBar, brassBtn, ghostBtn, cx } from "./ui";

export function DeduceScreen({
  save,
  onBack,
  onBook,
  onMute,
  onAccuse,
}: {
  save: SaveData;
  onBack: () => void;
  onBook: () => void;
  onMute: () => void;
  onAccuse: (suspect: SuspectId, motive: MotiveId, evidence: ClueId[]) => void;
}) {
  const [suspect, setSuspect] = useState<SuspectId | null>(null);
  const [motive, setMotive] = useState<MotiveId | null>(null);
  const [picked, setPicked] = useState<ClueId[]>([]);
  const [confirm, setConfirm] = useState(false);
  const found = CLUES.filter((clue) => save.found.includes(clue.id));
  const pinOk = picked.length >= MIN_PIN && picked.length <= MAX_PIN;
  const ready =
    suspect !== null && motive !== null && pinOk && save.found.length >= MIN_CLUES;
  const suspectName = suspect ? SUSPECT_MAP[suspect].name : "";

  function toggle(id: ClueId) {
    setConfirm(false);
    setPicked((current) => {
      if (current.includes(id)) return current.filter((item) => item !== id);
      if (current.length >= MAX_PIN) return current;
      return [...current, id];
    });
  }

  return (
    <>
      <TopBar
        title="提出推理"
        score={save.score}
        found={save.found.length}
        muted={save.muted}
        onBack={onBack}
        onBook={onBook}
        onMute={onMute}
      />
      <main className="mx-auto grid w-full max-w-3xl gap-6 px-4 py-5">
        <p className="text-pretty text-mist">
          選出藏起獎盃的人，說明原因，並把 2～3 條證據釘到他身上。選錯人扣 20 分。人對了但動機不對，扣 10 分，仍算破案。
        </p>
        <section>
          <h2 className="mb-3 font-serif text-xl">1. 你要指控誰？</h2>
          <div className="grid gap-3">
            {SUSPECTS.map((person) => {
              const selected = suspect === person.id;
              return (
                <button
                  key={person.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => {
                    setConfirm(false);
                    setSuspect(person.id);
                  }}
                  className={cx(
                    "flex items-center gap-3 rounded-3xl border p-3 text-left",
                    selected ? "border-brass bg-panel-2" : "border-line bg-panel hover:bg-panel-2",
                  )}
                >
                  <Art src={person.art} alt="" className="h-20 w-16 rounded-2xl object-cover" />
                  <span className="min-w-0 flex-1">
                    <span className="block font-serif text-lg">{person.name}</span>
                    <span className="block text-sm text-mist">{person.role}</span>
                    {selected && picked.length > 0 ? (
                      <span className="mt-2 flex flex-wrap gap-1">
                        {picked.map((id) => (
                          <span
                            key={id}
                            className="inline-flex items-center gap-1 rounded-full border border-brass/50 bg-ink/40 px-2 py-0.5 text-[11px] text-brass"
                          >
                            <ClueIcon id={id} />
                            {CLUE_MAP[id].name}
                          </span>
                        ))}
                      </span>
                    ) : selected ? (
                      <span className="mt-2 block text-xs text-mist">在下方釘選 2～3 條證據到此人</span>
                    ) : null}
                  </span>
                </button>
              );
            })}
          </div>
        </section>
        <section>
          <h2 className="mb-3 font-serif text-xl">2. 原因是什麼？</h2>
          <div className="grid gap-2">
            {MOTIVES.map((item) => {
              const selected = motive === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => {
                    setConfirm(false);
                    setMotive(item.id);
                  }}
                  className={cx(
                    "min-h-12 rounded-2xl border px-4 py-3 text-left",
                    selected ? "border-brass bg-panel-2" : "border-line bg-panel hover:bg-panel-2",
                  )}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </section>
        <section>
          <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
            <h2 className="font-serif text-xl">3. 釘選證據到此人</h2>
            <p className={cx("text-sm tabular-nums", pinOk ? "text-brass" : "text-mist")}>
              已釘選 {picked.length}/{MIN_PIN}～{MAX_PIN}
            </p>
          </div>
          {!suspect ? (
            <p className="rounded-2xl border border-line bg-panel px-4 py-3 text-sm text-mist">
              請先在上方選擇要指控的人，再把證據釘到他身上。
            </p>
          ) : null}
          <div className="grid gap-2">
            {found.map((clue) => {
              const selected = picked.includes(clue.id);
              const atCap = !selected && picked.length >= MAX_PIN;
              return (
                <button
                  key={clue.id}
                  type="button"
                  aria-pressed={selected}
                  disabled={!suspect || atCap}
                  onClick={() => toggle(clue.id)}
                  className={cx(
                    "flex min-h-12 items-center gap-3 rounded-2xl border px-4 py-3 text-left",
                    !suspect || atCap
                      ? "cursor-not-allowed border-line/60 bg-panel/50 opacity-70"
                      : selected
                        ? "border-brass bg-panel-2"
                        : "border-line bg-panel hover:bg-panel-2",
                  )}
                >
                  <ClueIcon id={clue.id} />
                  <span className="flex-1">{clue.name}</span>
                  {selected ? (
                    <span className="text-xs text-brass">已釘選</span>
                  ) : atCap ? (
                    <span className="text-xs text-mist">已滿 3 條</span>
                  ) : null}
                  {selected ? <Check className="size-5 text-brass" aria-hidden="true" /> : null}
                </button>
              );
            })}
          </div>
        </section>
        {confirm && suspect && motive ? (
          <div className="rounded-3xl border border-brass bg-panel p-4">
            <p className="text-pretty">
              確定指控{suspectName}，並以 {picked.length} 條證據結案？若選錯人，偵探分會少 20。
            </p>
            <ul className="mt-2 list-inside list-disc text-sm text-mist">
              {picked.map((id) => (
                <li key={id}>{CLUE_MAP[id].name}</li>
              ))}
            </ul>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <button type="button" className={ghostBtn} onClick={() => setConfirm(false)}>
                返回修改
              </button>
              <button type="button" className={brassBtn} onClick={() => onAccuse(suspect, motive, picked)}>
                確定送出
              </button>
            </div>
          </div>
        ) : (
          <button type="button" className={brassBtn} disabled={!ready} onClick={() => setConfirm(true)}>
            {save.found.length < MIN_CLUES
              ? `至少需要 ${MIN_CLUES} 條線索`
              : !pinOk
                ? `請釘選 ${MIN_PIN}～${MAX_PIN} 條證據`
                : "送出推理"}
          </button>
        )}
      </main>
    </>
  );
}
