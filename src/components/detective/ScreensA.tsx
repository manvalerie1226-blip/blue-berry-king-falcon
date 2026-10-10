import { useState } from "react";
import { Check, Volume2, VolumeX } from "lucide-react";
import {
  LOCATIONS,
  MIN_CLUES,
  SUSPECTS,
  cluesAt,
  type LocationId,
  type SuspectId,
} from "@/game/content";
import type { SaveData } from "@/game/save";
import { Art, TopBar, brassBtn, ghostBtn, iconBtn, cx } from "./ui";

export function TitleScreen({
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
                <li>找到關鍵線索後，會解鎖更尖銳的追問。</li>
                <li>指控時須把 2～3 條證據釘到嫌疑人身上。</li>
                <li>選錯人扣 20 分，可以再查再送。</li>
                <li>選對人但動機不對，扣 10 分，仍算破案。</li>
                <li>真相從一開始就固定，不會因為你的選擇改變。</li>
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

export function BriefScreen({ onStart }: { onStart: () => void }) {
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

export function HubScreen({
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
