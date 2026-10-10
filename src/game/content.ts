export const CLUE_IDS = [
  "shoelace",
  "ink",
  "camera",
  "trophybag",
  "note",
  "receipt",
  "lablog",
  "replica",
] as const;
export type ClueId = (typeof CLUE_IDS)[number];

export const SUSPECT_IDS = ["boyu", "yixuan", "ziqian"] as const;
export type SuspectId = (typeof SUSPECT_IDS)[number];

export const LOCATION_IDS = ["hall", "gym", "lab"] as const;
export type LocationId = (typeof LOCATION_IDS)[number];

export const MOTIVE_IDS = ["delay-mvp", "curfew-lie", "magic-trick", "sell-off"] as const;
export type MotiveId = (typeof MOTIVE_IDS)[number];

export const CULPRIT: SuspectId = "boyu";
export const TRUE_MOTIVE: MotiveId = "delay-mvp";
export const START_SCORE = 100;
export const WRONG_PENALTY = 20;
export const WEAK_PENALTY = 10;
export const MIN_CLUES = 3;

export interface Clue {
  id: ClueId;
  location: LocationId;
  item: string;
  name: string;
  detail: string;
  ending: string;
  /** Shown under the player's picked evidence on the ending screen. */
  pickNote: string;
}

export interface Question {
  id: string;
  prompt: string;
  answer: string;
  /** If set, question stays locked until every listed clue is found. */
  requires?: ClueId[];
  /** Shown on the locked button before unlock. */
  unlockHint?: string;
  contradictions?: { when: ClueId; note: string }[];
}

/** How many evidence pins are required on the accusation screen. */
export const MIN_PIN = 2;
export const MAX_PIN = 3;

export interface Suspect {
  id: SuspectId;
  name: string;
  role: string;
  trait: string;
  art: string;
  questions: Question[];
}

export interface Location {
  id: LocationId;
  name: string;
  blurb: string;
  art: string;
}

export interface Motive {
  id: MotiveId;
  label: string;
}

export const LOCATIONS: Location[] = [
  {
    id: "hall",
    name: "走廊玻璃櫃",
    blurb: "門虛掩著。絨布空了，窗台留著一台相機。",
    art: "/game/hall.jpg",
  },
  {
    id: "gym",
    name: "體育館器材室",
    blurb: "球和角錐堆到頂。最上層有一隻沒拉緊的深藍球袋。",
    art: "/game/gym.jpg",
  },
  {
    id: "lab",
    name: "三樓科學實驗室",
    blurb: "桌燈還亮著。燒杯裡的結晶沒有被收走。",
    art: "/game/lab.jpg",
  },
];

export const CLUES: Clue[] = [
  {
    id: "shoelace",
    location: "hall",
    item: "玻璃櫃的鎖",
    name: "鎖上的螢光綠纖維",
    detail:
      "櫃鎖的縫裡勾著一截螢光綠鞋帶纖維，像是剛剛拉開鎖時刮下來的。全校籃球隊裡，把鞋帶換成這種顏色的只有陳柏宇。他手腕上還綁著備用的一條。",
    ending:
      "開鎖時鞋帶刮在鎖縫上。這種螢光綠鞋帶全隊只有陳柏宇在用，和他手腕上那條備用鞋帶一樣。",
    pickNote: "顏色對得上陳柏宇的鞋帶。",
  },
  {
    id: "ink",
    location: "hall",
    item: "櫃內絨布",
    name: "絨布壓痕與藍墨",
    detail:
      "深綠絨布中央有一個圓形壓痕，大小和獎盃底座一致，代表獎盃不久前還在。壓痕旁邊有一點還沒乾透的藍色白板筆墨。陳柏宇寫戰術板一向用藍筆，指尖常沾到。",
    ending: "獎盃是被拿起來的，不是被砸破櫃子。新鮮藍墨符合柏宇寫戰術板的習慣。",
    pickNote: "藍墨對得上柏宇的白板筆。",
  },
  {
    id: "camera",
    location: "hall",
    item: "窗台上的相機",
    name: "兩段宣傳影片",
    detail:
      "學生會相機裡有兩段影片。18:58：獎盃還在櫃子裡，畫面遠處林教練拖著行李箱走向校門。19:36：櫃子已經空了。鏡頭輕微晃動，拍攝的人騰不出手；右側有人提起一隻深藍色球袋。",
    ending:
      "獎盃在 18:58 還在，所以更早的爭吵和林教練離校都發生在失竊之前。19:36 拍攝的人沒有同時提球袋，袋子卻已經被拿走。",
    pickNote: "把失竊時間縮在 18:58 到 19:36。",
  },
  {
    id: "trophybag",
    location: "gym",
    item: "最上層的球袋",
    name: "七號球袋裡的獎盃",
    detail:
      "深藍球袋口繡著 7，和陳柏宇的背號一樣。拉開之後，失蹤的金桂冠軍獎盃就在袋子裡，沒有被帶出學校。袋底還壓著一張揉皺的紙條。",
    ending: "獎盃沒有離校。它被藏在陳柏宇自己的 7 號球袋裡，就在器材室最上層。",
    pickNote: "獎盃在柏宇的球袋裡。",
  },
  {
    id: "note",
    location: "gym",
    item: "球袋裡的紙條",
    name: "署名 B 的紙條",
    detail:
      "紙條寫著：「如果明天不宣布改選 MVP，我就把獎盃放回去。——B」。B 是陳柏宇在戰術板上的簽名。這不是要賣掉，而是想用獎盃換一個宣布。",
    ending: "動機寫在紙上：他想擋住明天改頒 MVP，並打算條件達成後把獎盃放回去。",
    pickNote: "紙條寫出了藏獎盃的理由。",
  },
  {
    id: "receipt",
    location: "gym",
    item: "柏宇的置物櫃",
    name: "鑰匙和 20:12 收據",
    detail:
      "置物櫃沒鎖。外套口袋裡有兩樣東西：本應掛在器材室的玻璃櫃備用鑰匙，以及便利商店收據，時間是 20:12。這和他「七點就離開」的說法對不上。",
    ending: "備用鑰匙在他口袋，表示櫃子是用這把鑰匙打開的。20:12 的收據推翻了七點離校的口供。",
    pickNote: "鑰匙和收據都在柏宇的口袋。",
  },
  {
    id: "lablog",
    location: "lab",
    item: "實驗紀錄本",
    name: "每八分鐘的照片",
    detail:
      "紀錄本夾著六張結晶照片：19:02、19:10、19:18、19:26、19:34、19:42。實驗室在綜合樓三樓，到體育館來回要十二分鐘以上，還不含開櫃和藏球袋。中間沒有任何一段空檔夠用。",
    ending: "高子謙整段失竊時間都被實驗照片接住，沒有往返體育館的空檔。",
    pickNote: "這條是在排除高子謙，不是直接指向柏宇。",
  },
  {
    id: "replica",
    location: "lab",
    item: "桌角的塑膠獎盃",
    name: "還在的魔術道具",
    detail:
      "桌角那尊金盃是塑膠的，底邊有魔術社的磨損，重量很輕。真獎盃是金屬底座。道具還在實驗室，代表「讓獎盃消失」的玩笑沒有用到真品。",
    ending: "兩週前的魔術玩笑用的是這尊塑膠盃。真獎盃從未進過實驗室。",
    pickNote: "這條是在排除魔術玩笑，不是直接指向柏宇。",
  },
];

export const SUSPECTS: Suspect[] = [
  {
    id: "boyu",
    name: "陳柏宇",
    role: "籃球隊隊長",
    trait: "背號 7・螢光綠鞋帶・戰術板簽名 B",
    art: "/game/boyu.jpg",
    questions: [
      {
        id: "where",
        prompt: "昨晚七點之後，你在哪裡？",
        answer:
          "我七點就離開體育館了。後來去便利商店買運動飲料，喝完就回家。獎盃的事，我是今天早上才聽說的。",
        contradictions: [
          {
            when: "receipt",
            note: "他口袋裡的收據是 20:12。若七點就離開，這張時間對不上。",
          },
        ],
      },
      {
        id: "fight",
        prompt: "有人說你跟林教練起了爭執。",
        answer:
          "只是討論上場時間，聲音大了一點。我再怎麼不高興，也不會去動那座獎盃。",
      },
      {
        id: "key",
        prompt: "玻璃櫃的備用鑰匙，你碰過嗎？",
        answer:
          "沒有。鑰匙一直掛在器材室。我的鞋帶很顯眼，不代表鎖上的東西就是我的。你不能只靠顏色定罪。",
        contradictions: [
          {
            when: "receipt",
            note: "備用鑰匙不在掛鉤上，而在他置物櫃的口袋裡。",
          },
          {
            when: "shoelace",
            note: "鎖縫上的纖維，和他手腕那條螢光綠鞋帶是同一種。",
          },
        ],
      },
      {
        id: "receiptpush",
        prompt: "你口袋裡的收據是 20:12。那還算「七點就離開」嗎？",
        answer:
          "……好吧，我晚上又出過一趟。可是去便利商店買飲料，不代表我動了獎盃。時間晚一點，不能直接說是我拿的。",
        requires: ["receipt"],
        unlockHint: "找到「鑰匙和 20:12 收據」後解鎖",
        contradictions: [
          {
            when: "receipt",
            note: "他承認晚出過一趟，卻仍不提備用鑰匙為什麼在口袋裡。",
          },
        ],
      },
      {
        id: "notepush",
        prompt: "球袋裡有一張署名 B 的紙條。B 是你嗎？",
        answer:
          "……那張紙是我寫的。我只是想讓教練先別改頒 MVP。獎盃我打算明天早上放回去，不是要帶走。",
        requires: ["note"],
        unlockHint: "找到「署名 B 的紙條」後解鎖",
        contradictions: [
          {
            when: "note",
            note: "他承認署名 B 的紙條是自己寫的，動機就是擋住改頒 MVP。",
          },
          {
            when: "trophybag",
            note: "獎盃就在他 7 號球袋裡，和他「打算放回去」的說法一致。",
          },
        ],
      },
    ],
  },
  {
    id: "yixuan",
    name: "蘇苡萱",
    role: "學生會宣傳股長",
    trait: "負責拍攝獎盃宣傳片・使用學生會相機",
    art: "/game/yixuan.jpg",
    questions: [
      {
        id: "leave",
        prompt: "你幾點離開學校？",
        answer: "七點前就回家了。宣傳片傍晚拍完，我沒有再回走廊。",
        contradictions: [
          {
            when: "camera",
            note: "相機裡的影片是 18:58 和 19:36。19:36 已經超過她說的離校時間，而且那時櫃子是空的。",
          },
        ],
      },
      {
        id: "camera",
        prompt: "窗台上那台相機是你的嗎？",
        answer:
          "是學生會的相機，我可能忘了收回來。我拍攝的時候獎盃還好好地在櫃子裡。之後發生什麼，我不知道。",
      },
      {
        id: "saw",
        prompt: "你有看見別人碰獎盃嗎？",
        answer:
          "六點多我收工時，走廊只有我。我沒有看見誰搬獎盃。深藍色球袋是隊上的東西，體育館到處都有，不能說明什麼。我也沒有櫃子鑰匙。",
      },
      {
        id: "camerapush",
        prompt: "相機裡有 19:36 的影片。你那時還在學校嗎？",
        answer:
          "……我有回去補拍。發現櫃子空了，手忙腳亂時誤觸錄影。因為超過離校時間，我才說自己七點前就走了。我沒拿獎盃，也沒有鑰匙。",
        requires: ["camera"],
        unlockHint: "找到「兩段宣傳影片」後解鎖",
        contradictions: [
          {
            when: "camera",
            note: "她承認 19:36 還在現場補拍，並謊稱早退；但影片裡她並沒有同時提著球袋。",
          },
        ],
      },
      {
        id: "bagpush",
        prompt: "19:36 的畫面右側有人提起深藍球袋。那是誰？",
        answer:
          "我只看到有人提起深藍球袋往體育館方向走。我騰不出手，沒看清臉。球袋很多，我不敢亂指。",
        requires: ["camera", "trophybag"],
        unlockHint: "找到影片與球袋後解鎖",
      },
    ],
  },
  {
    id: "ziqian",
    name: "高子謙",
    role: "科學社社長",
    trait: "兼魔術社員・實驗室在綜合樓三樓",
    art: "/game/ziqian.jpg",
    questions: [
      {
        id: "alibi",
        prompt: "獎盃不見的時候，你在哪？",
        answer:
          "我在三樓實驗室做結晶，中間不能離開太久。從 19:02 到 19:42，我每八分鐘拍一張照片，紀錄本攤在實驗桌。",
        contradictions: [
          {
            when: "lablog",
            note: "紀錄本上的六張照片時間，和他說的一致。來回體育館不夠用。",
          },
        ],
      },
      {
        id: "magic",
        prompt: "你說過能讓獎盃消失。",
        answer:
          "那是兩週前魔術社的玩笑。用的是塑膠仿製品，現在還放在實驗室桌角。真獎盃我碰都沒碰。",
        contradictions: [
          {
            when: "replica",
            note: "桌角的塑膠盃還在。玩笑用的不是真獎盃。",
          },
        ],
      },
      {
        id: "hear",
        prompt: "你有聽到什麼不尋常的話嗎？",
        answer:
          "18:40 我去器材室借電池，經過辦公室，聽見陳柏宇對林教練喊：「沒有獎盃，看你怎麼頒。」我沒進去，拿了電池就回實驗室了。",
      },
      {
        id: "labpush",
        prompt: "紀錄本上每八分鐘一張照片。中間你有離開過嗎？",
        answer:
          "沒有。結晶不能中斷，照片時間接得很緊。從三樓實驗室走到體育館再回來，十二分鐘都嫌緊，我做不到。",
        requires: ["lablog"],
        unlockHint: "找到「每八分鐘的照片」後解鎖",
        contradictions: [
          {
            when: "lablog",
            note: "照片時間把他整段空檔封死，他無法同時去開櫃子。",
          },
        ],
      },
      {
        id: "quotepush",
        prompt: "「沒有獎盃，看你怎麼頒」——你覺得他是認真的嗎？",
        answer:
          "當下我以為是氣話。後來聽說獎盃不見，才覺得那句話刺耳。我沒看到他動手，只是把聽見的話告訴你。",
        requires: ["note"],
        unlockHint: "找到「署名 B 的紙條」後解鎖",
      },
    ],
  },
];

export const MOTIVES: Motive[] = [
  { id: "delay-mvp", label: "想擋住明天改頒 MVP，先把獎盃藏起來" },
  { id: "curfew-lie", label: "因為晚歸說了謊，所以獎盃就是這個人拿的" },
  { id: "magic-trick", label: "用魔術道具把真獎盃換走了" },
  { id: "sell-off", label: "打算把獎盃帶出學校賣掉" },
];

export const TIMELINE: { time: string; text: string }[] = [
  { time: "17:30", text: "校工王叔鎖上玻璃櫃，主鑰匙被他帶走。獎盃當時還在裡面。" },
  { time: "18:40", text: "林教練告訴陳柏宇：明天的年度 MVP 要改頒給新秀。柏宇喊：「沒有獎盃，看你怎麼頒。」高子謙經過時聽見。" },
  { time: "18:58", text: "蘇苡萱補拍宣傳片。獎盃仍在櫃中。同一段畫面裡，林教練拖著行李箱離校。" },
  { time: "19:02", text: "高子謙開始每八分鐘拍一次結晶，直到 19:42。三樓實驗室到體育館的來回，塞不進這些空檔。" },
  { time: "19:20", text: "陳柏宇用器材室的備用鑰匙打開櫃子。螢光綠鞋帶刮在鎖上，藍墨留在絨布。他把獎盃塞進自己的 7 號球袋，寫下署名 B 的紙條。" },
  { time: "19:36", text: "苡萱回到走廊，發現櫃子是空的，手忙腳亂時誤觸錄影。她看見深藍球袋被提起，但自己騰不出手。因為超過 19:00 的離校規定，她後來謊稱早退。" },
  { time: "20:12", text: "柏宇在便利商店結帳。備用鑰匙留在他置物櫃的口袋裡。獎盃一直沒有離開學校。" },
];

export const CLUE_MAP: Record<ClueId, Clue> = Object.fromEntries(
  CLUES.map((clue) => [clue.id, clue]),
) as Record<ClueId, Clue>;

export const SUSPECT_MAP: Record<SuspectId, Suspect> = Object.fromEntries(
  SUSPECTS.map((suspect) => [suspect.id, suspect]),
) as Record<SuspectId, Suspect>;

export const LOCATION_MAP: Record<LocationId, Location> = Object.fromEntries(
  LOCATIONS.map((location) => [location.id, location]),
) as Record<LocationId, Location>;

export function cluesAt(location: LocationId): Clue[] {
  return CLUES.filter((clue) => clue.location === location);
}
