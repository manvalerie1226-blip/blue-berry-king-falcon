import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ScrollText, c as PenLine, d as Check, f as Camera, h as ArrowLeft, l as KeyRound, m as Backpack, n as Volume2, o as RotateCcw, p as BookOpen, r as Trophy, s as Receipt, t as VolumeX, u as FlaskConical } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B4MGiZZq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CLUE_IDS = [
	"shoelace",
	"ink",
	"camera",
	"trophybag",
	"note",
	"receipt",
	"lablog",
	"replica"
];
var SUSPECT_IDS = [
	"boyu",
	"yixuan",
	"ziqian"
];
var LOCATION_IDS = [
	"hall",
	"gym",
	"lab"
];
var MOTIVE_IDS = [
	"delay-mvp",
	"curfew-lie",
	"magic-trick",
	"sell-off"
];
var TRUE_MOTIVE = "delay-mvp";
var LOCATIONS = [
	{
		id: "hall",
		name: "走廊玻璃櫃",
		blurb: "門虛掩著。絨布空了，窗台留著一台相機。",
		art: "/game/hall.jpg"
	},
	{
		id: "gym",
		name: "體育館器材室",
		blurb: "球和角錐堆到頂。最上層有一隻沒拉緊的深藍球袋。",
		art: "/game/gym.jpg"
	},
	{
		id: "lab",
		name: "三樓科學實驗室",
		blurb: "桌燈還亮著。燒杯裡的結晶沒有被收走。",
		art: "/game/lab.jpg"
	}
];
var CLUES = [
	{
		id: "shoelace",
		location: "hall",
		item: "玻璃櫃的鎖",
		name: "鎖上的螢光綠纖維",
		detail: "櫃鎖的縫裡勾著一截螢光綠鞋帶纖維，像是剛剛拉開鎖時刮下來的。全校籃球隊裡，把鞋帶換成這種顏色的只有陳柏宇。他手腕上還綁著備用的一條。",
		ending: "開鎖時鞋帶刮在鎖縫上。這種螢光綠鞋帶全隊只有陳柏宇在用，和他手腕上那條備用鞋帶一樣。",
		pickNote: "顏色對得上陳柏宇的鞋帶。"
	},
	{
		id: "ink",
		location: "hall",
		item: "櫃內絨布",
		name: "絨布壓痕與藍墨",
		detail: "深綠絨布中央有一個圓形壓痕，大小和獎盃底座一致，代表獎盃不久前還在。壓痕旁邊有一點還沒乾透的藍色白板筆墨。陳柏宇寫戰術板一向用藍筆，指尖常沾到。",
		ending: "獎盃是被拿起來的，不是被砸破櫃子。新鮮藍墨符合柏宇寫戰術板的習慣。",
		pickNote: "藍墨對得上柏宇的白板筆。"
	},
	{
		id: "camera",
		location: "hall",
		item: "窗台上的相機",
		name: "兩段宣傳影片",
		detail: "學生會相機裡有兩段影片。18:58：獎盃還在櫃子裡，畫面遠處林教練拖著行李箱走向校門。19:36：櫃子已經空了。鏡頭輕微晃動，拍攝的人騰不出手；右側有人提起一隻深藍色球袋。",
		ending: "獎盃在 18:58 還在，所以更早的爭吵和林教練離校都發生在失竊之前。19:36 拍攝的人沒有同時提球袋，袋子卻已經被拿走。",
		pickNote: "把失竊時間縮在 18:58 到 19:36。"
	},
	{
		id: "trophybag",
		location: "gym",
		item: "最上層的球袋",
		name: "七號球袋裡的獎盃",
		detail: "深藍球袋口繡著 7，和陳柏宇的背號一樣。拉開之後，失蹤的金桂冠軍獎盃就在袋子裡，沒有被帶出學校。袋底還壓著一張揉皺的紙條。",
		ending: "獎盃沒有離校。它被藏在陳柏宇自己的 7 號球袋裡，就在器材室最上層。",
		pickNote: "獎盃在柏宇的球袋裡。"
	},
	{
		id: "note",
		location: "gym",
		item: "球袋裡的紙條",
		name: "署名 B 的紙條",
		detail: "紙條寫著：「如果明天不宣布改選 MVP，我就把獎盃放回去。——B」。B 是陳柏宇在戰術板上的簽名。這不是要賣掉，而是想用獎盃換一個宣布。",
		ending: "動機寫在紙上：他想擋住明天改頒 MVP，並打算條件達成後把獎盃放回去。",
		pickNote: "紙條寫出了藏獎盃的理由。"
	},
	{
		id: "receipt",
		location: "gym",
		item: "柏宇的置物櫃",
		name: "鑰匙和 20:12 收據",
		detail: "置物櫃沒鎖。外套口袋裡有兩樣東西：本應掛在器材室的玻璃櫃備用鑰匙，以及便利商店收據，時間是 20:12。這和他「七點就離開」的說法對不上。",
		ending: "備用鑰匙在他口袋，表示櫃子是用這把鑰匙打開的。20:12 的收據推翻了七點離校的口供。",
		pickNote: "鑰匙和收據都在柏宇的口袋。"
	},
	{
		id: "lablog",
		location: "lab",
		item: "實驗紀錄本",
		name: "每八分鐘的照片",
		detail: "紀錄本夾著六張結晶照片：19:02、19:10、19:18、19:26、19:34、19:42。實驗室在綜合樓三樓，到體育館來回要十二分鐘以上，還不含開櫃和藏球袋。中間沒有任何一段空檔夠用。",
		ending: "高子謙整段失竊時間都被實驗照片接住，沒有往返體育館的空檔。",
		pickNote: "這條是在排除高子謙，不是直接指向柏宇。"
	},
	{
		id: "replica",
		location: "lab",
		item: "桌角的塑膠獎盃",
		name: "還在的魔術道具",
		detail: "桌角那尊金盃是塑膠的，底邊有魔術社的磨損，重量很輕。真獎盃是金屬底座。道具還在實驗室，代表「讓獎盃消失」的玩笑沒有用到真品。",
		ending: "兩週前的魔術玩笑用的是這尊塑膠盃。真獎盃從未進過實驗室。",
		pickNote: "這條是在排除魔術玩笑，不是直接指向柏宇。"
	}
];
var SUSPECTS = [
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
				answer: "我七點就離開體育館了。後來去便利商店買運動飲料，喝完就回家。獎盃的事，我是今天早上才聽說的。",
				contradictions: [{
					when: "receipt",
					note: "他口袋裡的收據是 20:12。若七點就離開，這張時間對不上。"
				}]
			},
			{
				id: "fight",
				prompt: "有人說你跟林教練起了爭執。",
				answer: "只是討論上場時間，聲音大了一點。我再怎麼不高興，也不會去動那座獎盃。"
			},
			{
				id: "key",
				prompt: "玻璃櫃的備用鑰匙，你碰過嗎？",
				answer: "沒有。鑰匙一直掛在器材室。我的鞋帶很顯眼，不代表鎖上的東西就是我的。你不能只靠顏色定罪。",
				contradictions: [{
					when: "receipt",
					note: "備用鑰匙不在掛鉤上，而在他置物櫃的口袋裡。"
				}, {
					when: "shoelace",
					note: "鎖縫上的纖維，和他手腕那條螢光綠鞋帶是同一種。"
				}]
			}
		]
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
				contradictions: [{
					when: "camera",
					note: "相機裡的影片是 18:58 和 19:36。19:36 已經超過她說的離校時間，而且那時櫃子是空的。"
				}]
			},
			{
				id: "camera",
				prompt: "窗台上那台相機是你的嗎？",
				answer: "是學生會的相機，我可能忘了收回來。我拍攝的時候獎盃還好好地在櫃子裡。之後發生什麼，我不知道。"
			},
			{
				id: "saw",
				prompt: "你有看見別人碰獎盃嗎？",
				answer: "六點多我收工時，走廊只有我。我沒有看見誰搬獎盃。深藍色球袋是隊上的東西，體育館到處都有，不能說明什麼。我也沒有櫃子鑰匙。"
			}
		]
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
				answer: "我在三樓實驗室做結晶，中間不能離開太久。從 19:02 到 19:42，我每八分鐘拍一張照片，紀錄本攤在實驗桌。",
				contradictions: [{
					when: "lablog",
					note: "紀錄本上的六張照片時間，和他說的一致。來回體育館不夠用。"
				}]
			},
			{
				id: "magic",
				prompt: "你說過能讓獎盃消失。",
				answer: "那是兩週前魔術社的玩笑。用的是塑膠仿製品，現在還放在實驗室桌角。真獎盃我碰都沒碰。",
				contradictions: [{
					when: "replica",
					note: "桌角的塑膠盃還在。玩笑用的不是真獎盃。"
				}]
			},
			{
				id: "hear",
				prompt: "你有聽到什麼不尋常的話嗎？",
				answer: "18:40 我去器材室借電池，經過辦公室，聽見陳柏宇對林教練喊：「沒有獎盃，看你怎麼頒。」我沒進去，拿了電池就回實驗室了。"
			}
		]
	}
];
var MOTIVES = [
	{
		id: "delay-mvp",
		label: "想擋住明天改頒 MVP，先把獎盃藏起來"
	},
	{
		id: "curfew-lie",
		label: "因為晚歸說了謊，所以獎盃就是這個人拿的"
	},
	{
		id: "magic-trick",
		label: "用魔術道具把真獎盃換走了"
	},
	{
		id: "sell-off",
		label: "打算把獎盃帶出學校賣掉"
	}
];
var TIMELINE = [
	{
		time: "17:30",
		text: "校工王叔鎖上玻璃櫃，主鑰匙被他帶走。獎盃當時還在裡面。"
	},
	{
		time: "18:40",
		text: "林教練告訴陳柏宇：明天的年度 MVP 要改頒給新秀。柏宇喊：「沒有獎盃，看你怎麼頒。」高子謙經過時聽見。"
	},
	{
		time: "18:58",
		text: "蘇苡萱補拍宣傳片。獎盃仍在櫃中。同一段畫面裡，林教練拖著行李箱離校。"
	},
	{
		time: "19:02",
		text: "高子謙開始每八分鐘拍一次結晶，直到 19:42。三樓實驗室到體育館的來回，塞不進這些空檔。"
	},
	{
		time: "19:20",
		text: "陳柏宇用器材室的備用鑰匙打開櫃子。螢光綠鞋帶刮在鎖上，藍墨留在絨布。他把獎盃塞進自己的 7 號球袋，寫下署名 B 的紙條。"
	},
	{
		time: "19:36",
		text: "苡萱回到走廊，發現櫃子是空的，手忙腳亂時誤觸錄影。她看見深藍球袋被提起，但自己騰不出手。因為超過 19:00 的離校規定，她後來謊稱早退。"
	},
	{
		time: "20:12",
		text: "柏宇在便利商店結帳。備用鑰匙留在他置物櫃的口袋裡。獎盃一直沒有離開學校。"
	}
];
var CLUE_MAP = Object.fromEntries(CLUES.map((clue) => [clue.id, clue]));
var SUSPECT_MAP = Object.fromEntries(SUSPECTS.map((suspect) => [suspect.id, suspect]));
var LOCATION_MAP = Object.fromEntries(LOCATIONS.map((location) => [location.id, location]));
function cluesAt(location) {
	return CLUES.filter((clue) => clue.location === location);
}
function rankFor(score) {
	if (score >= 100) return {
		title: "金牌校園偵探",
		blurb: "一次就對上人、動機和證據。這份結案報告可以貼上偵探社佈告欄。"
	};
	if (score >= 90) return {
		title: "準金牌偵探",
		blurb: "你抓到了藏獎盃的人。扣掉的分數，是因為動機還沒完全對上。"
	};
	if (score >= 80) return {
		title: "銀牌偵探",
		blurb: "中間有一次指控沒站穩，但你願意回頭把線索再排一次。"
	};
	if (score >= 60) return {
		title: "銅牌偵探",
		blurb: "案子破了。下次先把時間排成一條線，再按下指控。"
	};
	if (score >= 40) return {
		title: "見習偵探",
		blurb: "你還是把獎盃找回來了。線索簿值得多翻幾次。"
	};
	return {
		title: "迷路的偵探",
		blurb: "分數所剩不多，可是你沒有放棄。把對不上的口供並排看，真相就會出現。"
	};
}
function evaluate(input) {
	if (input.suspect !== "boyu") return {
		ok: false,
		score: Math.max(0, input.score - 20)
	};
	const weakMotive = input.motive !== TRUE_MOTIVE;
	const score = weakMotive ? Math.max(0, input.score - 10) : input.score;
	return {
		ok: true,
		score,
		weakMotive,
		rank: rankFor(score)
	};
}
function wrongHint(suspect, found) {
	if (suspect === "yixuan") {
		if (found.includes("note") || found.includes("trophybag")) return "球袋和紙條已經指向署名 B 的人。苡萱的謊言解釋得了晚歸，解釋不了這張紙條。";
		if (found.includes("camera")) return "19:36 的影片裡櫃子已經空了，拍攝的人沒有同時提著球袋。她趕到時，獎盃多半已經被藏起來。";
		return "她可能說了謊，但七點離校的規定給了她說謊的理由。先把「誰說謊」和「誰有鑰匙」分開。";
	}
	if (found.includes("lablog")) return "實驗照片中間沒有足夠空檔讓他跑去體育館再回來。他聽見的那句「沒有獎盃，看你怎麼頒」，請拿去對另一個人。";
	if (found.includes("replica")) return "桌角的塑膠獎盃還在，真獎盃沒有被變走。再查查誰真的能打開玻璃櫃。";
	return "先去實驗室看他整晚有沒有空檔。玩笑話要有道具對得上，才算證據。";
}
var KEY = "campus-detective-trophy-v1";
var CLUE_SET = new Set(CLUE_IDS);
var LOC_SET = new Set(LOCATION_IDS);
var SUSPECT_SET = new Set(SUSPECT_IDS);
var MOTIVE_SET = new Set(MOTIVE_IDS);
var SCREEN_SET = /* @__PURE__ */ new Set([
	"brief",
	"hub",
	"scene",
	"talk",
	"book",
	"deduce",
	"ending"
]);
function freshSave(muted = false) {
	return {
		version: 1,
		score: 100,
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
		muted
	};
}
function isStringList(value, allowed) {
	return Array.isArray(value) && value.every((item) => typeof item === "string" && allowed.has(item));
}
function isScore(value) {
	return typeof value === "number" && Number.isInteger(value) && value >= 0 && value <= 100;
}
function loadSave() {
	if (typeof window === "undefined") return null;
	try {
		const raw = window.localStorage.getItem(KEY);
		if (!raw) return null;
		const data = JSON.parse(raw);
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
		let lastHint = null;
		if (data.lastHint !== null && data.lastHint !== void 0) {
			const hint = data.lastHint;
			if (typeof hint.text !== "string" || !isScore(hint.from) || !isScore(hint.to)) return null;
			lastHint = {
				text: hint.text,
				from: hint.from,
				to: hint.to
			};
		}
		let solved = null;
		if (data.solved !== null && data.solved !== void 0) {
			const item = data.solved;
			if (typeof item.motive !== "string" || !MOTIVE_SET.has(item.motive)) return null;
			if (typeof item.weakMotive !== "boolean") return null;
			if (!isStringList(item.evidence, CLUE_SET)) return null;
			solved = {
				motive: item.motive,
				evidence: item.evidence,
				weakMotive: item.weakMotive
			};
		}
		const screen = data.screen;
		return {
			version: 1,
			score: data.score,
			found: data.found,
			visited: data.visited,
			talked: data.talked,
			asked: data.asked.filter((item) => /^(boyu|yixuan|ziqian):[a-z]+$/.test(item)),
			wrong: data.wrong,
			screen: screen === "ending" && !solved ? "hub" : screen,
			location: data.location,
			suspect: data.suspect,
			lastHint,
			solved,
			muted: data.muted
		};
	} catch {
		return null;
	}
}
function writeSave(save) {
	if (typeof window === "undefined") return;
	window.localStorage.setItem(KEY, JSON.stringify(save));
}
var ctx = null;
function unlockAudio() {
	if (typeof window === "undefined") return;
	if (!ctx) ctx = new AudioContext();
	if (ctx.state === "suspended") ctx.resume();
}
function beep(freq, when, dur, type, gain) {
	if (!ctx) return;
	const osc = ctx.createOscillator();
	const amp = ctx.createGain();
	osc.type = type;
	osc.frequency.value = freq;
	amp.gain.setValueAtTime(gain, when);
	amp.gain.exponentialRampToValueAtTime(1e-4, when + dur);
	osc.connect(amp);
	amp.connect(ctx.destination);
	osc.start(when);
	osc.stop(when + dur);
}
function playClue() {
	if (!ctx) return;
	const t = ctx.currentTime;
	beep(523, t, .12, "sine", .05);
	beep(784, t + .09, .18, "sine", .04);
}
function playWrong() {
	if (!ctx) return;
	const t = ctx.currentTime;
	beep(196, t, .22, "triangle", .05);
	beep(146, t + .12, .28, "triangle", .04);
}
function playSolve() {
	if (!ctx) return;
	const t = ctx.currentTime;
	[
		523,
		659,
		784,
		1046
	].forEach((freq, index) => {
		beep(freq, t + index * .09, .2, "sine", .045);
	});
}
var ENDING_ORDER = [
	"camera",
	"shoelace",
	"ink",
	"lablog",
	"replica",
	"trophybag",
	"note",
	"receipt"
];
var ICONS = {
	shoelace: KeyRound,
	ink: PenLine,
	camera: Camera,
	trophybag: Backpack,
	note: ScrollText,
	receipt: Receipt,
	lablog: FlaskConical,
	replica: Trophy
};
function cx(...parts) {
	return parts.filter(Boolean).join(" ");
}
var brassBtn = "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-brass px-4 py-3 text-base font-medium text-ink hover:brightness-110 disabled:opacity-50";
var ghostBtn = "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl border border-line bg-panel px-4 py-3 text-base font-medium text-paper hover:bg-panel-2 disabled:opacity-50";
var iconBtn = "grid size-11 shrink-0 place-items-center rounded-2xl border border-line bg-panel text-paper hover:bg-panel-2";
function Art({ src, alt, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src,
		alt,
		className,
		draggable: false
	});
}
function ClueIcon({ id }) {
	const Icon = ICONS[id];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
		className: "size-5 shrink-0",
		"aria-hidden": "true"
	});
}
function TopBar({ title, score, found, muted, onBack, onBook, onMute }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-20 border-b border-line bg-ink px-4 py-3",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3",
			children: [
				onBack ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: iconBtn,
					onClick: onBack,
					"aria-label": "返回",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
						className: "size-5",
						"aria-hidden": "true"
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "size-11 shrink-0",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-mist",
						children: [
							"線索 ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums",
								children: found
							}),
							"/",
							CLUES.length
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "truncate font-serif text-lg text-balance",
						children: title
					})]
				}),
				onBook ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: iconBtn,
					onClick: onBook,
					"aria-label": "打開線索簿",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, {
						className: "size-5",
						"aria-hidden": "true"
					})
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: iconBtn,
					onClick: onMute,
					"aria-label": muted ? "開啟音效" : "關閉音效",
					"aria-pressed": muted,
					children: muted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, {
						className: "size-5",
						"aria-hidden": "true"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, {
						className: "size-5",
						"aria-hidden": "true"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-right",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-sm text-mist",
						children: "偵探分"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-serif text-xl tabular-nums text-brass",
						children: score
					})]
				})
			]
		})
	});
}
function TitleScreen({ hydrated, hasPrior, found, score, solved, muted, onContinue, onNew, onMute }) {
	const [confirmNew, setConfirmNew] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative min-h-dvh",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Art, {
				src: "/game/hall.jpg",
				alt: "",
				className: "absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-shade absolute inset-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex min-h-dvh w-full max-w-xl flex-col justify-end px-5 py-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-brass",
						children: "青葉中學・校園偵探社"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-serif text-4xl text-balance text-paper",
						children: "消失的冠軍獎盃"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-md text-pretty text-paper",
						children: "頒獎典禮前一夜，金桂冠軍獎盃從走廊玻璃櫃消失。你要查現場、問三個人，再指出是誰藏起它、為什麼。"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid gap-3",
						children: [
							hasPrior ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: brassBtn,
								disabled: !hydrated,
								onClick: onContinue,
								children: solved ? "查看結案" : `繼續調查・線索 ${found}・${score} 分`
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: brassBtn,
								disabled: !hydrated,
								onClick: onNew,
								children: "開始調查"
							}),
							hasPrior && !confirmNew ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: ghostBtn,
								onClick: () => setConfirmNew(true),
								children: "重新開始"
							}) : null,
							confirmNew ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-line bg-panel p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-paper",
									children: "重新開始會清掉目前的線索和分數。"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 grid grid-cols-2 gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: ghostBtn,
										onClick: () => setConfirmNew(false),
										children: "取消"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: brassBtn,
										onClick: onNew,
										children: "確定重來"
									})]
								})]
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
									className: "flex-1 rounded-2xl border border-line bg-panel px-4 py-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
										className: "min-h-11 font-medium",
										children: "遊戲規則"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
										className: "mt-3 list-disc space-y-2 pl-5 text-sm text-mist",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "三位嫌疑人，八條線索。至少找到三條才能提出推理。" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "選錯人扣 20 分，可以再查再送。" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "選對人但動機不對，扣 10 分，仍算破案。" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "真相從一開始就固定，不會因為你的選擇改變。" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "分數從 100 起算。" })
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: iconBtn,
									onClick: onMute,
									"aria-label": muted ? "開啟音效" : "關閉音效",
									"aria-pressed": muted,
									children: muted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-5" })
								})]
							})
						]
					})
				]
			})
		]
	});
}
function BriefScreen({ onStart }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "mx-auto w-full max-w-3xl px-4 py-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "dossier rise rounded-3xl p-5 sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Art, {
						src: "/game/trophy.jpg",
						alt: "金桂冠軍獎盃",
						className: "size-24 shrink-0 rounded-2xl object-cover sm:size-32"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-brass-deep",
							children: "案號 青葉-041"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-serif text-3xl text-balance",
							children: "消失的冠軍獎盃"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-ink-soft",
							children: "調查範圍只有下面三個人。"
						})
					] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-pretty",
					children: "金桂冠軍獎盃在頒獎典禮前一夜，從體育館外的一樓玻璃櫃消失。櫃子沒有被砸開，絨布上只剩一個圓形壓痕。"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-5 grid gap-3 text-sm sm:grid-cols-2",
					children: [
						["失竊物", "金桂冠軍獎盃"],
						["主鑰匙", "校工王叔 17:30 鎖櫃後帶走"],
						["備用鑰匙", "原本掛在器材室"],
						["離校規定", "社團須在 19:00 前結束"],
						["實驗室", "綜合樓三樓，離體育館較遠"],
						["現場", "體育館外的一樓走廊"]
					].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-paper-dim px-3 py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-ink-soft",
							children: label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "font-medium",
							children: value
						})]
					}, label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 space-y-2 text-sm",
					children: SUSPECTS.map((person) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Art, {
							src: person.art,
							alt: "",
							className: "size-12 rounded-xl object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: person.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-ink-soft",
							children: ["・", person.role]
						})] })]
					}, person.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: `${brassBtn} mt-6`,
					onClick: onStart,
					children: "前往調查"
				})
			]
		})
	});
}
function HubScreen({ save, onLocation, onTalk, onBook, onDeduce, onCover, onDismissHint, onMute }) {
	const ready = save.found.length >= 3;
	const steps = [
		{
			label: "閱讀案情",
			done: true
		},
		{
			label: "調查三個現場",
			done: save.visited.length >= LOCATIONS.length
		},
		{
			label: "詢問三位嫌疑人",
			done: save.talked.length >= SUSPECTS.length
		},
		{
			label: `收集至少 3 條線索`,
			done: ready
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {
			title: "調查總部",
			score: save.score,
			found: save.found.length,
			muted: save.muted,
			onBack: onCover,
			onBook,
			onMute
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto grid w-full max-w-3xl gap-6 px-4 py-5",
			children: [
				save.lastHint ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rise rounded-3xl border border-seal bg-panel p-4",
					"aria-live": "polite",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-lg text-seal",
							children: "這次指控不成立"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 tabular-nums text-sm text-brass",
							children: save.lastHint.from === save.lastHint.to ? "分數維持 0。" : `偵探分 ${save.lastHint.from} → ${save.lastHint.to}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-pretty text-paper",
							children: save.lastHint.text
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: `${ghostBtn} mt-3`,
							onClick: onDismissHint,
							children: "知道了，繼續查"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-pretty text-mist",
					children: "三個現場、三個人。點進去調查，找到的東西會進線索簿。"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "grid gap-2 sm:grid-cols-2",
					children: steps.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-3 rounded-2xl border border-line bg-panel px-3 py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cx("grid size-7 shrink-0 place-items-center rounded-full border", step.done ? "border-brass bg-brass text-ink" : "border-line text-mist"),
							children: step.done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								className: "size-4",
								"aria-hidden": "true"
							}) : null
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: step.done ? "text-paper" : "text-mist",
							children: step.label
						})]
					}, step.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-3 font-serif text-xl",
					children: "現場"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 sm:grid-cols-3",
					children: LOCATIONS.map((location) => {
						const items = cluesAt(location.id);
						const found = items.filter((item) => save.found.includes(item.id)).length;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => onLocation(location.id),
							className: "overflow-hidden rounded-3xl border border-line bg-panel text-left hover:bg-panel-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Art, {
								src: location.art,
								alt: "",
								className: "aspect-video w-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "block space-y-1 p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-serif text-lg",
											children: location.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-sm tabular-nums text-brass",
											children: [
												found,
												"/",
												items.length
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-sm text-mist",
										children: location.blurb
									}),
									location.id === "hall" && !save.visited.includes("hall") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-block text-sm text-brass",
										children: "建議先查"
									}) : null
								]
							})]
						}, location.id);
					})
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-3 font-serif text-xl",
					children: "嫌疑人"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3",
					children: SUSPECTS.map((person) => {
						const talked = save.talked.includes(person.id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => onTalk(person.id),
							className: "flex w-full items-center gap-3 rounded-3xl border border-line bg-panel p-3 text-left hover:bg-panel-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Art, {
									src: person.art,
									alt: "",
									className: "h-24 w-20 rounded-2xl object-cover"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0 flex-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block font-serif text-lg",
											children: person.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-sm text-mist",
											children: person.role
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 block text-sm text-paper",
											children: person.trait
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "shrink-0 text-sm text-brass",
									children: talked ? "已詢問" : "查問"
								})
							]
						}, person.id);
					})
				})] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "sticky bottom-0 z-10 border-t border-line bg-ink px-4 py-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-full max-w-3xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: brassBtn,
					disabled: !ready,
					onClick: onDeduce,
					children: "提出推理"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-center text-sm text-mist",
					children: ready ? save.talked.length < SUSPECTS.length ? "還沒問完三個人也可以送出，口供能幫你排除。" : "選錯人會扣 20 分。" : `再找到 ${3 - save.found.length} 條線索才能送出。`
				})]
			})
		})
	] });
}
function SceneScreen({ save, onBack, onBook, onMute, onClue }) {
	const location = LOCATION_MAP[save.location];
	const items = cluesAt(save.location);
	const [open, setOpen] = (0, import_react.useState)(null);
	const clue = open ? CLUE_MAP[open.id] : null;
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const previous = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		const onKey = (event) => {
			if (event.key === "Escape") setOpen(null);
		};
		window.addEventListener("keydown", onKey);
		return () => {
			document.body.style.overflow = previous;
			window.removeEventListener("keydown", onKey);
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {
			title: location.name,
			score: save.score,
			found: save.found.length,
			muted: save.muted,
			onBack,
			onBook,
			onMute
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto w-full max-w-3xl px-4 py-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Art, {
					src: location.art,
					alt: location.name,
					className: "aspect-video w-full rounded-3xl object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-pretty text-mist",
					children: location.blurb
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-5 mb-3 font-serif text-xl",
					children: "可調查的物品"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3",
					children: items.map((item) => {
						const found = save.found.includes(item.id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => {
								const fresh = !save.found.includes(item.id);
								onClue(item.id);
								setOpen({
									id: item.id,
									fresh
								});
							},
							className: "flex min-h-14 items-center gap-3 rounded-2xl border border-line bg-panel px-4 py-3 text-left hover:bg-panel-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-11 place-items-center rounded-2xl bg-panel-2 text-brass",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClueIcon, { id: item.id })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-medium",
										children: item.item
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-sm text-mist",
										children: found ? "已收入線索簿" : "點擊調查"
									})]
								}),
								found ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
									className: "size-5 text-brass",
									"aria-hidden": "true"
								}) : null
							]
						}, item.id);
					})
				})
			]
		}),
		clue && open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-0 z-30 grid place-items-end bg-ink/80 p-4 sm:place-items-center",
			role: "presentation",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "dossier rise w-full max-w-md rounded-3xl p-5",
				role: "dialog",
				"aria-modal": "true",
				"aria-labelledby": "clue-title",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-brass-deep",
						children: open.fresh ? "新線索" : "線索"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "clue-title",
						className: "mt-1 font-serif text-2xl",
						children: clue.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-pretty text-ink",
						children: clue.detail
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: `${brassBtn} mt-5`,
						autoFocus: true,
						onClick: () => setOpen(null),
						children: open.fresh ? "收入線索簿" : "關閉"
					})
				]
			})
		}) : null
	] });
}
function TalkScreen({ save, onBack, onBook, onMute, onAsk }) {
	const person = SUSPECT_MAP[save.suspect];
	const [active, setActive] = (0, import_react.useState)(null);
	const question = person.questions.find((item) => item.id === active) ?? null;
	const notes = question?.contradictions?.filter((item) => save.found.includes(item.when)) ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {
		title: `查問・${person.name}`,
		score: save.score,
		found: save.found.length,
		muted: save.muted,
		onBack,
		onBook,
		onMute
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto grid w-full max-w-3xl gap-4 px-4 py-5 sm:grid-cols-[220px_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "overflow-hidden rounded-3xl border border-line bg-panel",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Art, {
				src: person.art,
				alt: person.name,
				className: "aspect-3/4 w-full object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-2xl",
						children: person.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-mist",
						children: person.role
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-paper",
						children: person.trait
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 font-serif text-xl",
				children: "選擇問題"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-2",
				children: person.questions.map((item) => {
					const asked = save.asked.includes(`${person.id}:${item.id}`);
					const selected = active === item.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"aria-pressed": selected,
						onClick: () => {
							setActive(item.id);
							onAsk(person.id, item.id);
						},
						className: cx("min-h-12 rounded-2xl border px-4 py-3 text-left", selected ? "border-brass bg-panel-2" : "border-line bg-panel hover:bg-panel-2"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-medium",
							children: item.prompt
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-sm text-mist",
							children: asked ? "已問過，可再看" : "尚未詢問"
						})]
					}, item.id);
				})
			}),
			question ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "dossier rise mt-4 rounded-3xl p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-brass-deep",
						children: [person.name, "的回答"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-pretty",
						children: question.answer
					}),
					notes.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 space-y-2",
						children: notes.map((note) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "border-l-4 border-seal pl-3 text-sm text-seal",
							children: ["和線索對不上：", note.note]
						}, note.when))
					}) : null
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-mist",
				children: "點一個問題，看他怎麼說。找到的線索如果對不上，會標出來。"
			})
		] })]
	})] });
}
function BookScreen({ save, onBack, onMute }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {
		title: "線索簿",
		score: save.score,
		found: save.found.length,
		muted: save.muted,
		onBack,
		onMute
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto w-full max-w-3xl px-4 py-5",
		children: [save.found.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "rounded-3xl border border-line bg-panel p-5 text-pretty text-mist",
			children: "線索簿還是空的。先去三個現場，點開可以調查的物品。"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3",
			children: CLUES.filter((clue) => save.found.includes(clue.id)).map((clue) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "dossier rounded-3xl p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-brass-deep",
						children: LOCATION_MAP[clue.location].name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-1 flex items-center gap-2 font-serif text-xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClueIcon, { id: clue.id }), clue.name]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-pretty",
						children: clue.detail
					})
				]
			}, clue.id))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-5 grid gap-2",
			children: LOCATIONS.map((location) => {
				const items = cluesAt(location.id);
				const found = items.filter((item) => save.found.includes(item.id)).length;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center justify-between rounded-2xl border border-line px-4 py-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: location.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "tabular-nums text-mist",
						children: [
							"已找到 ",
							found,
							"/",
							items.length
						]
					})]
				}, location.id);
			})
		})]
	})] });
}
function DeduceScreen({ save, onBack, onBook, onMute, onAccuse }) {
	const [suspect, setSuspect] = (0, import_react.useState)(null);
	const [motive, setMotive] = (0, import_react.useState)(null);
	const [picked, setPicked] = (0, import_react.useState)([]);
	const [confirm, setConfirm] = (0, import_react.useState)(false);
	const found = CLUES.filter((clue) => save.found.includes(clue.id));
	const ready = suspect !== null && motive !== null && picked.length > 0 && save.found.length >= 3;
	const suspectName = suspect ? SUSPECT_MAP[suspect].name : "";
	function toggle(id) {
		setConfirm(false);
		setPicked((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {
		title: "提出推理",
		score: save.score,
		found: save.found.length,
		muted: save.muted,
		onBack,
		onBook,
		onMute
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto grid w-full max-w-3xl gap-6 px-4 py-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-pretty text-mist",
				children: "選出藏起獎盃的人，並說明原因。選錯人扣 20 分。人對了但動機不對，扣 10 分，仍算破案。"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 font-serif text-xl",
				children: "1. 你要指控誰？"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3",
				children: SUSPECTS.map((person) => {
					const selected = suspect === person.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"aria-pressed": selected,
						onClick: () => {
							setConfirm(false);
							setSuspect(person.id);
						},
						className: cx("flex items-center gap-3 rounded-3xl border p-3 text-left", selected ? "border-brass bg-panel-2" : "border-line bg-panel hover:bg-panel-2"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Art, {
							src: person.art,
							alt: "",
							className: "h-20 w-16 rounded-2xl object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-serif text-lg",
							children: person.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-sm text-mist",
							children: person.role
						})] })]
					}, person.id);
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 font-serif text-xl",
				children: "2. 原因是什麼？"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-2",
				children: MOTIVES.map((item) => {
					const selected = motive === item.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-pressed": selected,
						onClick: () => {
							setConfirm(false);
							setMotive(item.id);
						},
						className: cx("min-h-12 rounded-2xl border px-4 py-3 text-left", selected ? "border-brass bg-panel-2" : "border-line bg-panel hover:bg-panel-2"),
						children: item.label
					}, item.id);
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 font-serif text-xl",
				children: "3. 拿出證據"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-2",
				children: found.map((clue) => {
					const selected = picked.includes(clue.id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"aria-pressed": selected,
						onClick: () => toggle(clue.id),
						className: cx("flex min-h-12 items-center gap-3 rounded-2xl border px-4 py-3 text-left", selected ? "border-brass bg-panel-2" : "border-line bg-panel hover:bg-panel-2"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClueIcon, { id: clue.id }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex-1",
								children: clue.name
							}),
							selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								className: "size-5 text-brass",
								"aria-hidden": "true"
							}) : null
						]
					}, clue.id);
				})
			})] }),
			confirm && suspect && motive ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl border border-brass bg-panel p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-pretty",
					children: [
						"確定指控",
						suspectName,
						"？若選錯人，偵探分會少 20。"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 grid gap-3 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: ghostBtn,
						onClick: () => setConfirm(false),
						children: "返回修改"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: brassBtn,
						onClick: () => onAccuse(suspect, motive, picked),
						children: "確定送出"
					})]
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: brassBtn,
				disabled: !ready,
				onClick: () => setConfirm(true),
				children: "送出推理"
			})
		]
	})] });
}
function EndingScreen({ save, onBook, onRestart, onMute }) {
	const solved = save.solved;
	if (!solved) return null;
	const rank = rankFor(save.score);
	const motive = MOTIVES.find((item) => item.id === solved.motive);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {
		title: "結案",
		score: save.score,
		found: save.found.length,
		muted: save.muted,
		onMute
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto grid w-full max-w-3xl gap-5 px-4 py-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rise rounded-3xl border border-brass bg-panel px-5 py-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Art, {
						src: "/game/trophy.jpg",
						alt: "找回的金桂冠軍獎盃",
						className: "mx-auto size-28 rounded-2xl object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-brass",
						children: "偵探評級"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-3xl text-balance",
						children: rank.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-pretty text-mist",
						children: rank.blurb
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-serif text-4xl tabular-nums text-brass",
						children: save.score
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-mist",
						children: save.wrong === 0 ? "沒有指控錯人" : `錯誤指控 ${save.wrong} 次`
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "dossier rounded-3xl p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-2xl",
						children: "你的推理"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2",
						children: [
							"你指控",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: "陳柏宇"
							}),
							"，理由是「",
							motive?.label,
							"」。"
						]
					}),
					solved.weakMotive ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-seal",
						children: "人找對了，動機還沒對上。他不是要賣掉獎盃，也不是變魔術；他想擋住明天改頒 MVP。"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2",
						children: "動機正確。他把獎盃暫時藏起來，想交換「不要改頒 MVP」。"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2 text-sm",
						children: solved.evidence.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: CLUE_MAP[id].name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-ink-soft",
							children: ["・", CLUE_MAP[id].pickNote]
						})] }, id))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-3xl border border-line bg-panel p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-2xl",
						children: "事件經過"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-pretty text-mist",
						children: "獎盃沒有被帶出學校。陳柏宇做錯了事，但它還在他自己的球袋裡。"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-4 space-y-3",
						children: TIMELINE.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "grid grid-cols-[4.5rem_1fr] gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-serif tabular-nums text-brass",
								children: step.time
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-pretty",
								children: step.text
							})]
						}, step.time))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 font-serif text-2xl",
				children: "證據怎麼對上"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3",
				children: ENDING_ORDER.map((id) => {
					const clue = CLUE_MAP[id];
					const owned = save.found.includes(id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-3xl border border-line bg-panel p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-brass",
								children: owned ? "調查時找到" : "結案補上"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 font-serif text-xl",
								children: clue.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-pretty text-mist",
								children: clue.ending
							})
						]
					}, id);
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: ghostBtn,
					onClick: onBook,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, {
						className: "size-5",
						"aria-hidden": "true"
					}), "翻線索簿"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: brassBtn,
					onClick: onRestart,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, {
						className: "size-5",
						"aria-hidden": "true"
					}), "再辦一次"]
				})]
			})
		]
	})] });
}
function DetectiveApp() {
	const [save, setSave] = (0, import_react.useState)(() => freshSave());
	const [cover, setCover] = (0, import_react.useState)(true);
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	const [hasPrior, setHasPrior] = (0, import_react.useState)(false);
	const lock = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		const loaded = loadSave();
		if (loaded) {
			setSave(loaded);
			setHasPrior(true);
		}
		setHydrated(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!hydrated || cover) return;
		writeSave(save);
	}, [
		save,
		hydrated,
		cover
	]);
	(0, import_react.useEffect)(() => {
		window.scrollTo(0, 0);
	}, [save.screen, cover]);
	function goto(screen, partial) {
		setSave((current) => ({
			...current,
			...partial,
			screen
		}));
	}
	function onClue(id) {
		if (!save.found.includes(id) && !save.muted) {
			unlockAudio();
			playClue();
		}
		setSave((current) => current.found.includes(id) ? current : {
			...current,
			found: [...current.found, id]
		});
	}
	function onAsk(suspect, questionId) {
		const key = `${suspect}:${questionId}`;
		setSave((current) => ({
			...current,
			suspect,
			asked: current.asked.includes(key) ? current.asked : [...current.asked, key],
			talked: current.talked.includes(suspect) ? current.talked : [...current.talked, suspect]
		}));
	}
	function onAccuse(suspect, motive, evidence) {
		if (lock.current) return;
		lock.current = true;
		const verdict = evaluate({
			suspect,
			motive,
			score: save.score
		});
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
				lastHint: {
					text: hint,
					from: current.score,
					to: verdict.score
				}
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
			solved: {
				motive,
				evidence,
				weakMotive: verdict.weakMotive
			}
		}));
	}
	function onRestart() {
		lock.current = false;
		setSave(freshSave(save.muted));
		setCover(false);
		setHasPrior(true);
	}
	function onMute() {
		setSave((current) => ({
			...current,
			muted: !current.muted
		}));
		unlockAudio();
	}
	if (cover) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TitleScreen, {
		hydrated,
		hasPrior,
		found: save.found.length,
		score: save.score,
		solved: save.solved !== null,
		muted: save.muted,
		onContinue: () => setCover(false),
		onNew: onRestart,
		onMute
	});
	const back = () => goto(save.solved ? "ending" : "hub");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-ink text-paper",
		onPointerDown: () => {
			if (!save.muted) unlockAudio();
		},
		children: [
			save.screen === "brief" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefScreen, { onStart: () => goto("hub") }) : null,
			save.screen === "hub" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HubScreen, {
				save,
				onLocation: (id) => setSave((current) => ({
					...current,
					screen: "scene",
					location: id,
					visited: current.visited.includes(id) ? current.visited : [...current.visited, id]
				})),
				onTalk: (id) => goto("talk", { suspect: id }),
				onBook: () => goto("book"),
				onDeduce: () => goto("deduce"),
				onCover: () => setCover(true),
				onDismissHint: () => setSave((current) => ({
					...current,
					lastHint: null
				})),
				onMute
			}) : null,
			save.screen === "scene" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SceneScreen, {
				save,
				onBack: back,
				onBook: () => goto("book"),
				onMute,
				onClue
			}) : null,
			save.screen === "talk" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TalkScreen, {
				save,
				onBack: back,
				onBook: () => goto("book"),
				onMute,
				onAsk
			}, save.suspect) : null,
			save.screen === "book" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookScreen, {
				save,
				onBack: back,
				onMute
			}) : null,
			save.screen === "deduce" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeduceScreen, {
				save,
				onBack: back,
				onBook: () => goto("book"),
				onMute,
				onAccuse
			}) : null,
			save.screen === "ending" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EndingScreen, {
				save,
				onBook: () => goto("book"),
				onRestart,
				onMute
			}) : null
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetectiveApp, {});
}
//#endregion
export { Home as component };
