import {
  CLUE_IDS,
  LOCATION_IDS,
  MOTIVE_IDS,
  START_SCORE,
  SUSPECT_IDS,
  type ClueId,
  type LocationId,
  type MotiveId,
  type SuspectId,
} from "./content";

export type Screen = "brief" | "hub" | "scene" | "talk" | "book" | "deduce" | "ending";

export interface Hint {
  text: string;
  from: number;
  to: number;
}

export interface SolvedState {
  motive: MotiveId;
  evidence: ClueId[];
  weakMotive: boolean;
}

export interface SaveData {
  version: 1;
  score: number;
  found: ClueId[];
  visited: LocationId[];
  talked: SuspectId[];
  asked: string[];
  wrong: number;
  screen: Screen;
  location: LocationId;
  suspect: SuspectId;
  lastHint: Hint | null;
  solved: SolvedState | null;
  muted: boolean;
}

const KEY = "campus-detective-trophy-v1";

const CLUE_SET = new Set<string>(CLUE_IDS);
const LOC_SET = new Set<string>(LOCATION_IDS);
const SUSPECT_SET = new Set<string>(SUSPECT_IDS);
const MOTIVE_SET = new Set<string>(MOTIVE_IDS);
const SCREEN_SET = new Set<string>(["brief", "hub", "scene", "talk", "book", "deduce", "ending"]);

export function freshSave(muted = false): SaveData {
  return {
    version: 1,
    score: START_SCORE,
    found: [],
    visited: [],
    talked: [],
    asked: [],
    wrong: 0,
    screen: "brief",
    location: "hall",
    suspect: "boyu",
    lastHint: null,
    solved: null,
    muted,
  };
}

function isStringList(value: unknown, allowed: Set<string>): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string" && allowed.has(item));
}

function isScore(value: unknown): value is number {
  return typeof value === "number" && Number.isInteger(value) && value >= 0 && value <= START_SCORE;
}

export function loadSave(): SaveData | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return null;
    const data = JSON.parse(raw) as Partial<SaveData>;
    if (data.version !== 1) return null;
    if (!isScore(data.score) || typeof data.wrong !== "number" || data.wrong < 0) return null;
    if (!isStringList(data.found, CLUE_SET)) return null;
    if (!isStringList(data.visited, LOC_SET)) return null;
    if (!isStringList(data.talked, SUSPECT_SET)) return null;
    if (!Array.isArray(data.asked) || data.asked.some((item) => typeof item !== "string")) return null;
    if (typeof data.screen !== "string" || !SCREEN_SET.has(data.screen)) return null;
    if (typeof data.location !== "string" || !LOC_SET.has(data.location)) return null;
    if (typeof data.suspect !== "string" || !SUSPECT_SET.has(data.suspect)) return null;
    if (typeof data.muted !== "boolean") return null;

    let lastHint: Hint | null = null;
    if (data.lastHint !== null && data.lastHint !== undefined) {
      const hint = data.lastHint;
      if (typeof hint.text !== "string" || !isScore(hint.from) || !isScore(hint.to)) return null;
      lastHint = { text: hint.text, from: hint.from, to: hint.to };
    }

    let solved: SolvedState | null = null;
    if (data.solved !== null && data.solved !== undefined) {
      const item = data.solved;
      if (typeof item.motive !== "string" || !MOTIVE_SET.has(item.motive)) return null;
      if (typeof item.weakMotive !== "boolean") return null;
      if (!isStringList(item.evidence, CLUE_SET)) return null;
      solved = {
        motive: item.motive as MotiveId,
        evidence: item.evidence as ClueId[],
        weakMotive: item.weakMotive,
      };
    }

    const screen = data.screen as Screen;
    return {
      version: 1,
      score: data.score,
      found: data.found as ClueId[],
      visited: data.visited as LocationId[],
      talked: data.talked as SuspectId[],
      asked: data.asked.filter((item) => /^(boyu|yixuan|ziqian):[a-z]+$/.test(item)),
      wrong: data.wrong,
      screen: screen === "ending" && !solved ? "hub" : screen,
      location: data.location as LocationId,
      suspect: data.suspect as SuspectId,
      lastHint,
      solved,
      muted: data.muted,
    };
  } catch {
    return null;
  }
}

export function writeSave(save: SaveData) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(save));
}

export function clearSave() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(KEY);
}
