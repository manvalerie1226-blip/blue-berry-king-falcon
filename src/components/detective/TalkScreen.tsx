import { useState } from "react";
import { SUSPECT_MAP, type SuspectId } from "@/game/content";
import type { SaveData } from "@/game/save";
import { Art, TopBar, cx } from "./ui";

export function TalkScreen({
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
  const lockedCount = person.questions.filter(
    (item) => item.requires?.length && !item.requires.every((id) => save.found.includes(id)),
  ).length;

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
            {lockedCount > 0 ? (
              <p className="mt-3 rounded-2xl border border-line bg-panel-2 px-3 py-2 text-xs text-mist">
                還有 {lockedCount} 道追問未解鎖。多找線索就能繼續逼問。
              </p>
            ) : (
              <p className="mt-3 rounded-2xl border border-brass/40 bg-panel-2 px-3 py-2 text-xs text-brass">
                全部追問已解鎖。可以反覆核對口供。
              </p>
            )}
          </div>
        </article>
        <div>
          <h2 className="mb-3 font-serif text-xl">選擇問題</h2>
          <div className="grid gap-2">
            {person.questions.map((item) => {
              const asked = save.asked.includes(`${person.id}:${item.id}`);
              const selected = active === item.id;
              const locked = Boolean(
                item.requires?.length && !item.requires.every((id) => save.found.includes(id)),
              );
              const isFollowUp = Boolean(item.requires?.length);
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={selected}
                  disabled={locked}
                  onClick={() => {
                    if (locked) return;
                    setActive(item.id);
                    onAsk(person.id, item.id);
                  }}
                  className={cx(
                    "min-h-12 rounded-2xl border px-4 py-3 text-left",
                    locked
                      ? "cursor-not-allowed border-line/60 bg-panel/50 opacity-70"
                      : selected
                        ? "border-brass bg-panel-2"
                        : "border-line bg-panel hover:bg-panel-2",
                  )}
                >
                  <span className="flex items-center gap-2">
                    {isFollowUp ? (
                      <span className="rounded-full border border-brass/50 px-2 py-0.5 text-[10px] tracking-wide text-brass">
                        追問
                      </span>
                    ) : null}
                    <span className="block font-medium">{item.prompt}</span>
                  </span>
                  <span className="mt-1 block text-sm text-mist">
                    {locked
                      ? item.unlockHint ?? "先找到相關線索"
                      : asked
                        ? "已問過，可再看"
                        : isFollowUp
                          ? "已解鎖，可追問"
                          : "尚未詢問"}
                  </span>
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
            <p className="mt-4 text-sm text-mist">
              先問基本問題。找到關鍵線索後，會解鎖更尖銳的追問。
            </p>
          )}
        </div>
      </main>
    </>
  );
}
