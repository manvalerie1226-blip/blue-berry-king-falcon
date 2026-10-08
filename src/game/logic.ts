import {
  CULPRIT,
  TRUE_MOTIVE,
  WEAK_PENALTY,
  WRONG_PENALTY,
  type ClueId,
  type MotiveId,
  type SuspectId,
} from "./content";

export interface Rank {
  title: string;
  blurb: string;
}

export type Verdict =
  | { ok: false; score: number }
  | { ok: true; score: number; weakMotive: boolean; rank: Rank };

export function rankFor(score: number): Rank {
  if (score >= 100) {
    return {
      title: "金牌校園偵探",
      blurb: "一次就對上人、動機和證據。這份結案報告可以貼上偵探社佈告欄。",
    };
  }
  if (score >= 90) {
    return {
      title: "準金牌偵探",
      blurb: "你抓到了藏獎盃的人。扣掉的分數，是因為動機還沒完全對上。",
    };
  }
  if (score >= 80) {
    return {
      title: "銀牌偵探",
      blurb: "中間有一次指控沒站穩，但你願意回頭把線索再排一次。",
    };
  }
  if (score >= 60) {
    return {
      title: "銅牌偵探",
      blurb: "案子破了。下次先把時間排成一條線，再按下指控。",
    };
  }
  if (score >= 40) {
    return {
      title: "見習偵探",
      blurb: "你還是把獎盃找回來了。線索簿值得多翻幾次。",
    };
  }
  return {
    title: "迷路的偵探",
    blurb: "分數所剩不多，可是你沒有放棄。把對不上的口供並排看，真相就會出現。",
  };
}

export function evaluate(input: {
  suspect: SuspectId;
  motive: MotiveId;
  score: number;
}): Verdict {
  if (input.suspect !== CULPRIT) {
    return { ok: false, score: Math.max(0, input.score - WRONG_PENALTY) };
  }
  const weakMotive = input.motive !== TRUE_MOTIVE;
  const score = weakMotive ? Math.max(0, input.score - WEAK_PENALTY) : input.score;
  return { ok: true, score, weakMotive, rank: rankFor(score) };
}

export function wrongHint(suspect: Exclude<SuspectId, "boyu">, found: readonly ClueId[]): string {
  if (suspect === "yixuan") {
    if (found.includes("note") || found.includes("trophybag")) {
      return "球袋和紙條已經指向署名 B 的人。苡萱的謊言解釋得了晚歸，解釋不了這張紙條。";
    }
    if (found.includes("camera")) {
      return "19:36 的影片裡櫃子已經空了，拍攝的人沒有同時提著球袋。她趕到時，獎盃多半已經被藏起來。";
    }
    return "她可能說了謊，但七點離校的規定給了她說謊的理由。先把「誰說謊」和「誰有鑰匙」分開。";
  }
  if (found.includes("lablog")) {
    return "實驗照片中間沒有足夠空檔讓他跑去體育館再回來。他聽見的那句「沒有獎盃，看你怎麼頒」，請拿去對另一個人。";
  }
  if (found.includes("replica")) {
    return "桌角的塑膠獎盃還在，真獎盃沒有被變走。再查查誰真的能打開玻璃櫃。";
  }
  return "先去實驗室看他整晚有沒有空檔。玩笑話要有道具對得上，才算證據。";
}
