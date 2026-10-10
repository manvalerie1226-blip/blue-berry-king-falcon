import {
  ArrowLeft,
  BookOpen,
  Camera,
  Backpack,
  FlaskConical,
  KeyRound,
  PenLine,
  Receipt,
  ScrollText,
  Trophy,
  Volume2,
  VolumeX,
  type LucideIcon,
} from "lucide-react";
import { CLUES, type ClueId } from "@/game/content";

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

export function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export const brassBtn =
  "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-brass px-4 py-3 text-base font-medium text-ink hover:brightness-110 disabled:opacity-50";
export const ghostBtn =
  "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl border border-line bg-panel px-4 py-3 text-base font-medium text-paper hover:bg-panel-2 disabled:opacity-50";
export const iconBtn =
  "grid size-11 shrink-0 place-items-center rounded-2xl border border-line bg-panel text-paper hover:bg-panel-2";

export function Art({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return <img src={src} alt={alt} className={className} draggable={false} />;
}

export function ClueIcon({ id }: { id: ClueId }) {
  const Icon = ICONS[id];
  return <Icon className="size-5 shrink-0" aria-hidden="true" />;
}

export function TopBar({
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
