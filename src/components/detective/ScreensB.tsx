import { useEffect, useState } from "react";
import { BookOpen, Check, RotateCcw } from "lucide-react";
import {
  CLUES,
  CLUE_MAP,
  LOCATIONS,
  LOCATION_MAP,
  MOTIVES,
  TIMELINE,
  cluesAt,
  type ClueId,
} from "@/game/content";
import { rankFor } from "@/game/logic";
import type { SaveData } from "@/game/save";
import { Art, ClueIcon, TopBar, brassBtn, ghostBtn, cx } from "./ui";

const ENDING_ORDER: ClueId[] = [
  "camera",
  "shoelace",
  "ink",
  "lablog",
  "replica",
  "trophybag",
  "note",
  "receipt",
];

export function SceneScreen({
  save,
  onBack,
  onBook,
  onMute,
  onClue,
}: {
  save: SaveData;
  onBack: () => void;
  onBook: () => void;
  onMute: () => void;
  onClue: (id: ClueId) => void;
}) {
  const location = LOCATION_MAP[save.location];
  const items = cluesAt(save.location);
  const [open, setOpen] = useState<{ id: ClueId; fresh: boolean } | null>(null);
  const clue = open ? CLUE_MAP[open.id] : null;

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <TopBar
        title={location.name}
        score={save.score}
        found={save.found.length}
        muted={save.muted}
        onBack={onBack}
        onBook={onBook}
        onMute={onMute}
      />
      <main className="mx-auto w-full max-w-3xl px-4 py-5">
        <Art src={location.art} alt={location.name} className="aspect-video w-full rounded-3xl object-cover" />
        <p className="mt-4 text-pretty text-mist">{location.blurb}</p>
        <h2 className="mt-5 mb-3 font-serif text-xl">可調查的物品</h2>
        <div className="grid gap-3">
          {items.map((item) => {
            const found = save.found.includes(item.id);
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  const fresh = !save.found.includes(item.id);
                  onClue(item.id);
                  setOpen({ id: item.id, fresh });
                }}
                className="flex min-h-14 items-center gap-3 rounded-2xl border border-line bg-panel px-4 py-3 text-left hover:bg-panel-2"
              >
                <span className="grid size-11 place-items-center rounded-2xl bg-panel-2 text-brass">
                  <ClueIcon id={item.id} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-medium">{item.item}</span>
                  <span className="block text-sm text-mist">{found ? "已收入線索簿" : "點擊調查"}</span>
                </span>
                {found ? <Check className="size-5 text-brass" aria-hidden="true" /> : null}
              </button>
            );
          })}
        </div>
      </main>
      {clue && open ? (
        <div className="fixed inset-0 z-30 grid place-items-end bg-ink/80 p-4 sm:place-items-center" role="presentation">
          <article
            className="dossier rise w-full max-w-md rounded-3xl p-5"
            role="dialog"
            aria-modal="true"
            aria-labelledby="clue-title"
          >
            <p className="text-sm text-brass-deep">{open.fresh ? "新線索" : "線索"}</p>
            <h2 id="clue-title" className="mt-1 font-serif text-2xl">
              {clue.name}
            </h2>
            <p className="mt-3 text-pretty text-ink">{clue.detail}</p>
            <button type="button" className={`${brassBtn} mt-5`} autoFocus onClick={() => setOpen(null)}>
              {open.fresh ? "收入線索簿" : "關閉"}
            </button>
          </article>
        </div>
      ) : null}
    </>
  );
}

export function BookScreen({ save, onBack, onMute }: { save: SaveData; onBack: () => void; onMute: () => void }) {
  return (
    <>
      <TopBar
        title="線索簿"
        score={save.score}
        found={save.found.length}
        muted={save.muted}
        onBack={onBack}
        onMute={onMute}
      />
      <main className="mx-auto w-full max-w-3xl px-4 py-5">
        {save.found.length === 0 ? (
          <p className="rounded-3xl border border-line bg-panel p-5 text-pretty text-mist">
            線索簿還是空的。先去三個現場，點開可以調查的物品。
          </p>
        ) : (
          <div className="grid gap-3">
            {CLUES.filter((clue) => save.found.includes(clue.id)).map((clue) => (
              <article key={clue.id} className="dossier rounded-3xl p-4">
                <p className="text-sm text-brass-deep">{LOCATION_MAP[clue.location].name}</p>
                <h2 className="mt-1 flex items-center gap-2 font-serif text-xl">
                  <ClueIcon id={clue.id} />
                  {clue.name}
                </h2>
                <p className="mt-2 text-pretty">{clue.detail}</p>
              </article>
            ))}
          </div>
        )}
        <ul className="mt-5 grid gap-2">
          {LOCATIONS.map((location) => {
            const items = cluesAt(location.id);
            const found = items.filter((item) => save.found.includes(item.id)).length;
            return (
              <li key={location.id} className="flex items-center justify-between rounded-2xl border border-line px-4 py-3 text-sm">
                <span>{location.name}</span>
                <span className="tabular-nums text-mist">
                  已找到 {found}/{items.length}
                </span>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}

export function EndingScreen({
  save,
  onBook,
  onRestart,
  onMute,
}: {
  save: SaveData;
  onBook: () => void;
  onRestart: () => void;
  onMute: () => void;
}) {
  const solved = save.solved;
  if (!solved) return null;
  const rank = rankFor(save.score);
  const motive = MOTIVES.find((item) => item.id === solved.motive);

  return (
    <>
      <TopBar
        title="結案"
        score={save.score}
        found={save.found.length}
        muted={save.muted}
        onMute={onMute}
      />
      <main className="mx-auto grid w-full max-w-3xl gap-5 px-4 py-5">
        <section className="rise rounded-3xl border border-brass bg-panel px-5 py-6 text-center">
          <Art
            src="/game/trophy.jpg"
            alt="找回的金桂冠軍獎盃"
            className="mx-auto size-28 rounded-2xl object-cover"
          />
          <p className="mt-4 text-sm text-brass">偵探評級</p>
          <h2 className="font-serif text-3xl text-balance">{rank.title}</h2>
          <p className="mt-2 text-pretty text-mist">{rank.blurb}</p>
          <p className="mt-3 font-serif text-4xl tabular-nums text-brass">{save.score}</p>
          <p className="text-sm text-mist">{save.wrong === 0 ? "沒有指控錯人" : `錯誤指控 ${save.wrong} 次`}</p>
        </section>
        <section className="dossier rounded-3xl p-5">
          <h2 className="font-serif text-2xl">你的推理</h2>
          <p className="mt-2">
            你指控<span className="font-medium">陳柏宇</span>，理由是「{motive?.label}」。
          </p>
          {solved.weakMotive ? (
            <p className="mt-2 text-seal">
              人找對了，動機還沒對上。他不是要賣掉獎盃，也不是變魔術；他想擋住明天改頒 MVP。
            </p>
          ) : (
            <p className="mt-2">動機正確。他把獎盃暫時藏起來，想交換「不要改頒 MVP」。</p>
          )}
          <ul className="mt-3 space-y-2 text-sm">
            {solved.evidence.map((id) => (
              <li key={id}>
                <span className="font-medium">{CLUE_MAP[id].name}</span>
                <span className="text-ink-soft">・{CLUE_MAP[id].pickNote}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="rounded-3xl border border-line bg-panel p-5">
          <h2 className="font-serif text-2xl">事件經過</h2>
          <p className="mt-2 text-pretty text-mist">
            獎盃沒有被帶出學校。陳柏宇做錯了事，但它還在他自己的球袋裡。
          </p>
          <ol className="mt-4 space-y-3">
            {TIMELINE.map((step) => (
              <li key={step.time} className="grid grid-cols-[4.5rem_1fr] gap-3">
                <span className="font-serif tabular-nums text-brass">{step.time}</span>
                <span className="text-pretty">{step.text}</span>
              </li>
            ))}
          </ol>
        </section>
        <section>
          <h2 className="mb-3 font-serif text-2xl">證據怎麼對上</h2>
          <div className="grid gap-3">
            {ENDING_ORDER.map((id) => {
              const clue = CLUE_MAP[id];
              const owned = save.found.includes(id);
              return (
                <article key={id} className="rounded-3xl border border-line bg-panel p-4">
                  <p className="text-sm text-brass">{owned ? "調查時找到" : "結案補上"}</p>
                  <h3 className="mt-1 font-serif text-xl">{clue.name}</h3>
                  <p className="mt-2 text-pretty text-mist">{clue.ending}</p>
                </article>
              );
            })}
          </div>
        </section>
        <div className="grid gap-3 sm:grid-cols-2">
          <button type="button" className={ghostBtn} onClick={onBook}>
            <BookOpen className="size-5" aria-hidden="true" />
            翻線索簿
          </button>
          <button type="button" className={brassBtn} onClick={onRestart}>
            <RotateCcw className="size-5" aria-hidden="true" />
            再辦一次
          </button>
        </div>
      </main>
    </>
  );
}
