import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  Backpack,
  BookOpen,
  Camera,
  Check,
  FlaskConical,
  KeyRound,
  PenLine,
  Receipt,
  RotateCcw,
  ScrollText,
  Trophy,
  Volume2,
  VolumeX,
  type LucideIcon,
} from "lucide-react";
import {
  CLUES,
  CLUE_MAP,
  LOCATIONS,
  LOCATION_MAP,
  MIN_CLUES,
  MOTIVES,
  SUSPECTS,
  SUSPECT_MAP,
  TIMELINE,
  cluesAt,
  type ClueId,
  type LocationId,
  type MotiveId,
  type SuspectId,
} from "@/game/content";
import { evaluate, rankFor, wrongHint } from "@/game/logic";
import { freshSave, loadSave, writeSave, type SaveData, type Screen } from "@/game/save";
import { playClue, playSolve, playWrong, unlockAudio } from "@/game/sfx";

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

const ICONS: Record<ClueId, LucideIcon> = {
  shoelace: KeyRound,
  ink: PenLine,
  camera: Camera,
  trophybag: Backpack,
  note: ScrollText,
  receipt: Receipt,
  lablog: FlaskConical,
  replica: Trophy,
};

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

const brassBtn =
  "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-brass px-4 py-3 text-base font-medium text-ink hover:brightness-110 disabled:opacity-50";
const ghostBtn =
  "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl border border-line bg-panel px-4 py-3 text-base font-medium text-paper hover:bg-panel-2 disabled:opacity-50";
const iconBtn =
  "grid size-11 shrink-0 place-items-center rounded-2xl border border-line bg-panel text-paper hover:bg-panel-2";

function Art({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return <img src={src} alt={alt} className={className} draggable={false} />;
}

function ClueIcon({ id }: { id: ClueId }) {
  const Icon = ICONS[id];
  return <Icon className="size-5 shrink-0" aria-hidden="true" />;
}

function TopBar({
  title,
  score,
  found,
  muted,
  onBack,
  onBook,
  onMute,
}: {
  title: string;
  score: number;
  found: number;
  muted: boolean;
  onBack?: () => void;
  onBook?: () => void;
  onMute: () => void;
}) {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-ink px-4 py-3">
      <div className="flex items-center gap-3">
        {onBack ? (
          <button type="button" className={iconBtn} onClick={onBack} aria-label="返回">
            <ArrowLeft className="size-5" aria-hidden="true" />
          </button>
        ) : (
          <span className="size-11 shrink-0" aria-hidden="true" />
        )}
        <div className="min-w-0 flex-1">
          <p className="text-sm text-mist">
            線索 <span className="tabular-nums">{found}</span>/{CLUES.length}
          </p>
          <h1 className="truncate font-serif text-lg text-balance">{title}</h1>
        </div>
        {onBook ? (
          <button type="button" className={iconBtn} onClick={onBook} aria-label="打開線索簿">
            <BookOpen className="size-5" aria-hidden="true" />
          </button>
        ) : null}
        <button
          type="button"
          className={iconBtn}
          onClick={onMute}
          aria-label={muted ? "開啟音效" : "關閉音效"}
          aria-pressed={muted}
        >
          {muted ? (
            <VolumeX className="size-5" aria-hidden="true" />
          ) : (
            <Volume2 className="size-5" aria-hidden="true" />
          )}
        </button>
        <p className="text-right">
          <span className="block text-sm text-mist">偵探分</span>
          <span className="block font-serif text-xl tabular-nums text-brass">{score}</span>
        </p>
      </div>
    </header>
  );
}

function TitleScreen({
  hydrated,
  hasPrior,
  found,
  score,
  solved,
  muted,
  onContinue,
  onNew,
  onMute,
}: {
  hydrated: boolean;
  hasPrior: boolean;
  found: number;
  score: number;
  solved: boolean;
  muted: boolean;
  onContinue: () => void;
  onNew: () => void;
  onMute: () => void;
}) {
  const [confirmNew, setConfirmNew] = useState(false);

  return (
    <section className="relative min-h-dvh">
      <Art
        src="/game/hall.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="hero-shade absolute inset-0" />
      <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-xl flex-col justify-end px-5 py-8">
        <p className="text-sm text-brass">青葉中學・校園偵探社</p>
        <h1 className="mt-2 font-serif text-4xl text-balance text-paper">消失的冠軍獎盃</h1>
        <p className="mt-3 max-w-md text-pretty text-paper">
          頒獎典禮前一夜，金桂冠軍獎盃從走廊玻璃櫃消失。你要查現場、問三個人，再指出是誰藏起它、為什麼。
        </p>
        <div className="mt-6 grid gap-3">
          {hasPrior ? (
            <button type="button" className={brassBtn} disabled={!hydrated} onClick={onContinue}>
              {solved ? "查看結案" : `繼續調查・線索 ${found}・${score} 分`}
            </button>
          ) : (
            <button type="button" className={brassBtn} disabled={!hydrated} onClick={onNew}>
              開始調查
            </button>
          )}
          {hasPrior && !confirmNew ? (
            <button type="button" className={ghostBtn} onClick={() => setConfirmNew(true)}>
              重新開始
            </button>
          ) : null}
          {confirmNew ? (
            <div className="rounded-2xl border border-line bg-panel p-4">
              <p className="text-sm text-paper">重新開始會清掉目前的線索和分數。</p>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <button type="button" className={ghostBtn} onClick={() => setConfirmNew(false)}>
                  取消
                </button>
                <button type="button" className={brassBtn} onClick={onNew}>
                  確定重來
                </button>
              </div>
            </div>
          ) : null}
          <div className="flex items-center justify-between gap-3">
            <details className="flex-1 rounded-2xl border border-line bg-panel px-4 py-3">
              <summary className="min-h-11 font-medium">遊戲規則</summary>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-mist">
                <li>三位嫌疑人，八條線索。至少找到三條才能提出推理。</li>
                <li>選錯人扣 20 分，可以再查再送。</li>
                <li>選對人但動機不對，扣 10 分，仍算破案。</li>
                <li>真相從一開始就固定，不會因為你的選擇改變。</li>
                <li>分數從 100 起算。</li>
              </ul>
            </details>
            <button
              type="button"
              className={iconBtn}
              onClick={onMute}
              aria-label={muted ? "開啟音效" : "關閉音效"}
              aria-pressed={muted}
            >
              {muted ? <VolumeX className="size-5" /> : <Volume2 className="size-5" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function BriefScreen({ onStart }: { onStart: () => void }) {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-6">
      <article className="dossier rise rounded-3xl p-5 sm:p-8">
        <div className="flex items-start gap-4">
          <Art
            src="/game/trophy.jpg"
            alt="金桂冠軍獎盃"
            className="size-24 shrink-0 rounded-2xl object-cover sm:size-32"
          />
          <div>
            <p className="text-sm text-brass-deep">案號 青葉-041</p>
            <h1 className="font-serif text-3xl text-balance">消失的冠軍獎盃</h1>
            <p className="mt-1 text-sm text-ink-soft">調查範圍只有下面三個人。</p>
          </div>
        </div>
        <p className="mt-5 text-pretty">
          金桂冠軍獎盃在頒獎典禮前一夜，從體育館外的一樓玻璃櫃消失。櫃子沒有被砸開，絨布上只剩一個圓形壓痕。
        </p>
        <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
          {[
            ["失竊物", "金桂冠軍獎盃"],
            ["主鑰匙", "校工王叔 17:30 鎖櫃後帶走"],
            ["備用鑰匙", "原本掛在器材室"],
            ["離校規定", "社團須在 19:00 前結束"],
            ["實驗室", "綜合樓三樓，離體育館較遠"],
            ["現場", "體育館外的一樓走廊"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl bg-paper-dim px-3 py-2">
              <dt className="text-ink-soft">{label}</dt>
              <dd className="font-medium">{value}</dd>
            </div>
          ))}
        </dl>
        <ul className="mt-5 space-y-2 text-sm">
          {SUSPECTS.map((person) => (
            <li key={person.id} className="flex items-center gap-3">
              <Art src={person.art} alt="" className="size-12 rounded-xl object-cover" />
              <span>
                <span className="font-medium">{person.name}</span>
                <span className="text-ink-soft">・{person.role}</span>
              </span>
            </li>
          ))}
        </ul>
        <button type="button" className={`${brassBtn} mt-6`} onClick={onStart}>
          前往調查
        </button>
      </article>
    </main>
  );
}

function HubScreen({
  save,
  onLocation,
  onTalk,
  onBook,
  onDeduce,
  onCover,
  onDismissHint,
  onMute,
}: {
  save: SaveData;
  onLocation: (id: LocationId) => void;
  onTalk: (id: SuspectId) => void;
  onBook: () => void;
  onDeduce: () => void;
  onCover: () => void;
  onDismissHint: () => void;
  onMute: () => void;
}) {
  const ready = save.found.length >= MIN_CLUES;
  const steps = [
    { label: "閱讀案情", done: true },
    { label: "調查三個現場", done: save.visited.length >= LOCATIONS.length },
    { label: "詢問三位嫌疑人", done: save.talked.length >= SUSPECTS.length },
    { label: `收集至少 ${MIN_CLUES} 條線索`, done: ready },
  ];

  return (
    <>
      <TopBar
        title="調查總部"
        score={save.score}
        found={save.found.length}
        muted={save.muted}
        onBack={onCover}
        onBook={onBook}
        onMute={onMute}
      />
      <main className="mx-auto grid w-full max-w-3xl gap-6 px-4 py-5">
        {save.lastHint ? (
          <section className="rise rounded-3xl border border-seal bg-panel p-4" aria-live="polite">
            <p className="font-serif text-lg text-seal">這次指控不成立</p>
            <p className="mt-1 tabular-nums text-sm text-brass">
              {save.lastHint.from === save.lastHint.to
                ? "分數維持 0。"
                : `偵探分 ${save.lastHint.from} → ${save.lastHint.to}`}
            </p>
            <p className="mt-2 text-pretty text-paper">{save.lastHint.text}</p>
            <button type="button" className={`${ghostBtn} mt-3`} onClick={onDismissHint}>
              知道了，繼續查
            </button>
          </section>
        ) : (
          <p className="text-pretty text-mist">三個現場、三個人。點進去調查，找到的東西會進線索簿。</p>
        )}
        <ol className="grid gap-2 sm:grid-cols-2">
          {steps.map((step) => (
            <li key={step.label} className="flex items-center gap-3 rounded-2xl border border-line bg-panel px-3 py-2">
              <span
                className={cx(
                  "grid size-7 shrink-0 place-items-center rounded-full border",
                  step.done ? "border-brass bg-brass text-ink" : "border-line text-mist",
                )}
              >
                {step.done ? <Check className="size-4" aria-hidden="true" /> : null}
              </span>
              <span className={step.done ? "text-paper" : "text-mist"}>{step.label}</span>
            </li>
          ))}
        </ol>
        <section>
          <h2 className="mb-3 font-serif text-xl">現場</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {LOCATIONS.map((location) => {
              const items = cluesAt(location.id);
              const found = items.filter((item) => save.found.includes(item.id)).length;
              return (
                <button
                  key={location.id}
                  type="button"
                  onClick={() => onLocation(location.id)}
                  className="overflow-hidden rounded-3xl border border-line bg-panel text-left hover:bg-panel-2"
                >
                  <Art src={location.art} alt="" className="aspect-video w-full object-cover" />
                  <span className="block space-y-1 p-4">
                    <span className="flex items-center justify-between gap-2">
                      <span className="font-serif text-lg">{location.name}</span>
                      <span className="text-sm tabular-nums text-brass">
                        {found}/{items.length}
                      </span>
                    </span>
                    <span className="block text-sm text-mist">{location.blurb}</span>
                    {location.id === "hall" && !save.visited.includes("hall") ? (
                      <span className="inline-block text-sm text-brass">建議先查</span>
                    ) : null}
                  </span>
                </button>
              );
            })}
          </div>
        </section>
        <section>
          <h2 className="mb-3 font-serif text-xl">嫌疑人</h2>
          <div className="grid gap-3">
            {SUSPECTS.map((person) => {
              const talked = save.talked.includes(person.id);
              return (
                <button
                  key={person.id}
                  type="button"
                  onClick={() => onTalk(person.id)}
                  className="flex w-full items-center gap-3 rounded-3xl border border-line bg-panel p-3 text-left hover:bg-panel-2"
                >
                  <Art src={person.art} alt="" className="h-24 w-20 rounded-2xl object-cover" />
                  <span className="min-w-0 flex-1">
                    <span className="block font-serif text-lg">{person.name}</span>
                    <span className="block text-sm text-mist">{person.role}</span>
                    <span className="mt-1 block text-sm text-paper">{person.trait}</span>
                  </span>
                  <span className="shrink-0 text-sm text-brass">{talked ? "已詢問" : "查問"}</span>
                </button>
              );
            })}
          </div>
        </section>
      </main>
      <div className="sticky bottom-0 z-10 border-t border-line bg-ink px-4 py-3">
        <div className="mx-auto w-full max-w-3xl">
          <button type="button" className={brassBtn} disabled={!ready} onClick={onDeduce}>
            提出推理
          </button>
          <p className="mt-2 text-center text-sm text-mist">
            {ready
              ? save.talked.length < SUSPECTS.length
                ? "還沒問完三個人也可以送出，口供能幫你排除。"
                : "選錯人會扣 20 分。"
              : `再找到 ${MIN_CLUES - save.found.length} 條線索才能送出。`}
          </p>
        </div>
      </div>
    </>
  );
}

function SceneScreen({
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

function TalkScreen({
  save,
  onBack,
  onBook,
  onMute,
  onAsk,
}: {
  save: SaveData;
  onBack: () => void;
  onBook: () => void;
  onMute: () => void;
  onAsk: (suspect: SuspectId, questionId: string) => void;
}) {
  const person = SUSPECT_MAP[save.suspect];
  const [active, setActive] = useState<string | null>(null);
  const question = person.questions.find((item) => item.id === active) ?? null;
  const notes =
    question?.contradictions?.filter((item) => save.found.includes(item.when)) ?? [];

  return (
    <>
      <TopBar
        title={`查問・${person.name}`}
        score={save.score}
        found={save.found.length}
        muted={save.muted}
        onBack={onBack}
        onBook={onBook}
        onMute={onMute}
      />
      <main className="mx-auto grid w-full max-w-3xl gap-4 px-4 py-5 sm:grid-cols-[220px_1fr]">
        <article className="overflow-hidden rounded-3xl border border-line bg-panel">
          <Art src={person.art} alt={person.name} className="aspect-3/4 w-full object-cover" />
          <div className="p-4">
            <h2 className="font-serif text-2xl">{person.name}</h2>
            <p className="text-sm text-mist">{person.role}</p>
            <p className="mt-2 text-sm text-paper">{person.trait}</p>
          </div>
        </article>
        <div>
          <h2 className="mb-3 font-serif text-xl">選擇問題</h2>
          <div className="grid gap-2">
            {person.questions.map((item) => {
              const asked = save.asked.includes(`${person.id}:${item.id}`);
              const selected = active === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => {
                    setActive(item.id);
                    onAsk(person.id, item.id);
                  }}
                  className={cx(
                    "min-h-12 rounded-2xl border px-4 py-3 text-left",
                    selected ? "border-brass bg-panel-2" : "border-line bg-panel hover:bg-panel-2",
                  )}
                >
                  <span className="block font-medium">{item.prompt}</span>
                  <span className="block text-sm text-mist">{asked ? "已問過，可再看" : "尚未詢問"}</span>
                </button>
              );
            })}
          </div>
          {question ? (
            <article className="dossier rise mt-4 rounded-3xl p-4">
              <p className="text-sm text-brass-deep">{person.name}的回答</p>
              <p className="mt-2 text-pretty">{question.answer}</p>
              {notes.length > 0 ? (
                <div className="mt-4 space-y-2">
                  {notes.map((note) => (
                    <p key={note.when} className="border-l-4 border-seal pl-3 text-sm text-seal">
                      和線索對不上：{note.note}
                    </p>
                  ))}
                </div>
              ) : null}
            </article>
          ) : (
            <p className="mt-4 text-sm text-mist">點一個問題，看他怎麼說。找到的線索如果對不上，會標出來。</p>
          )}
        </div>
      </main>
    </>
  );
}

function BookScreen({ save, onBack, onMute }: { save: SaveData; onBack: () => void; onMute: () => void }) {
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

function DeduceScreen({
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
  const ready = suspect !== null && motive !== null && picked.length > 0 && save.found.length >= MIN_CLUES;
  const suspectName = suspect ? SUSPECT_MAP[suspect].name : "";

  function toggle(id: ClueId) {
    setConfirm(false);
    setPicked((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));
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
          選出藏起獎盃的人，並說明原因。選錯人扣 20 分。人對了但動機不對，扣 10 分，仍算破案。
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
                  <span>
                    <span className="block font-serif text-lg">{person.name}</span>
                    <span className="block text-sm text-mist">{person.role}</span>
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
          <h2 className="mb-3 font-serif text-xl">3. 拿出證據</h2>
          <div className="grid gap-2">
            {found.map((clue) => {
              const selected = picked.includes(clue.id);
              return (
                <button
                  key={clue.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => toggle(clue.id)}
                  className={cx(
                    "flex min-h-12 items-center gap-3 rounded-2xl border px-4 py-3 text-left",
                    selected ? "border-brass bg-panel-2" : "border-line bg-panel hover:bg-panel-2",
                  )}
                >
                  <ClueIcon id={clue.id} />
                  <span className="flex-1">{clue.name}</span>
                  {selected ? <Check className="size-5 text-brass" aria-hidden="true" /> : null}
                </button>
              );
            })}
          </div>
        </section>
        {confirm && suspect && motive ? (
          <div className="rounded-3xl border border-brass bg-panel p-4">
            <p className="text-pretty">
              確定指控{suspectName}？若選錯人，偵探分會少 20。
            </p>
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
            送出推理
          </button>
        )}
      </main>
    </>
  );
}

function EndingScreen({
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
