import React from "react";

const trending = [
  { tag: "#NailArt", posts: "2.3К публикации", color: "#CE8F9E" },
  { tag: "#ПролетенГрим", posts: "1.8К публикации", color: "#B87A8A" },
  { tag: "#КонцертиБГ", posts: "987 публикации", color: "#6B6BAB" },
  { tag: "#SkincareRoutine", posts: "3.1К публикации", color: "#4E7A9B" },
  { tag: "#ХайлайтерТренд", posts: "654 публикации", color: "#618455" },
];

const suggestions = [
  {
    name: "GlowUp Studio",
    bio: "Грим & Скинкери ✨",
    emoji: "💄",
    color1: "#EACFD9",
    color2: "#CE8F9E",
  },
  {
    name: "Nail Bar BG",
    bio: "Гел нокти & дизайн 💅",
    emoji: "💅",
    color1: "#F2CECD",
    color2: "#EACFD9",
  },
  {
    name: "Concert Vibes",
    bio: "Музика & Events 🎵",
    emoji: "🎵",
    color1: "#D8D9EE",
    color2: "#BACBE3",
  },
];

const palette = [
  "#F9F6F4",
  "#EACFD9",
  "#F2CECD",
  "#CE8F9E",
  "#818455",
  "#D8D9EE",
  "#BACBE3",
  "#A9B39A",
];

export function RightSidebar() {
  return (
    <div className="space-y-4">
      {/* Search */}
      <input
        type="text"
        placeholder="🔍 Търси..."
        className="w-full bg-white rounded-xl px-4 py-3 text-sm outline-none border border-[#EACFD9] focus:border-[#CE8F9E] text-[#3D2B35] placeholder-[#C5A0AB] transition-colors"
      />

      {/* Trending */}
      <div className="bg-white rounded-2xl border border-[#EACFD9] p-4">
        <h3 className="font-display font-bold text-[#3D2B35] text-base mb-3">
          🔥 Трендинг
        </h3>
        <div className="space-y-3">
          {trending.map((item, i) => (
            <div
              key={item.tag}
              className="flex items-center justify-between group cursor-pointer"
            >
              <div>
                <p
                  className="text-sm font-semibold group-hover:underline"
                  style={{ color: item.color }}
                >
                  {item.tag}
                </p>
                <p className="text-[#9A7B84] text-xs">{item.posts}</p>
              </div>
              <span className="text-[#C5A0AB] text-xs font-medium">{i + 1}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Suggestions */}
      <div className="bg-white rounded-2xl border border-[#EACFD9] p-4">
        <h3 className="font-display font-bold text-[#3D2B35] text-base mb-3">
          ✨ Препоръки
        </h3>
        <div className="space-y-3">
          {suggestions.map((s) => (
            <div key={s.name} className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-lg flex-shrink-0 shadow-sm"
                style={{
                  background: `linear-gradient(135deg, ${s.color1}, ${s.color2})`,
                }}
              >
                {s.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-[#3D2B35] text-sm leading-tight">
                  {s.name}
                </p>
                <p className="text-[#9A7B84] text-xs truncate">{s.bio}</p>
              </div>
              <button
                className="text-xs font-semibold rounded-full px-3 py-1 flex-shrink-0 border border-[#CE8F9E] text-[#CE8F9E] hover:bg-[#CE8F9E] hover:text-white transition-all"
              >
                Следвай
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Color Palette Card */}
      <div
        className="rounded-2xl border border-[#EACFD9] p-4"
        style={{
          background: "linear-gradient(135deg, #F2CECD 0%, #D8D9EE 100%)",
        }}
      >
        <p className="text-[#3D2B35] text-xs text-center font-medium mb-2">
          ✦ Designed with love ✦
        </p>
        <div className="flex justify-center gap-1.5">
          {palette.map((color) => (
            <div
              key={color}
              className="w-5 h-5 rounded-full border-2 border-white shadow-sm"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
