import React from "react";

const navItems = [
  { emoji: "🏠", label: "Начало", active: true },
  { emoji: "✨", label: "Открий", active: false },
  { emoji: "💅", label: "Нокти", active: false },
  { emoji: "💄", label: "Грим", active: false },
  { emoji: "💇", label: "Коса", active: false },
  { emoji: "🧴", label: "Скинкери", active: false },
  { emoji: "🎵", label: "Концерти", active: false },
  { emoji: "🔖", label: "Запазени", active: false },
];

export function LeftSidebar() {
  return (
    <div className="space-y-4">
      {/* Profile Card */}
      <div className="bg-white rounded-2xl border border-[#EACFD9] overflow-hidden">
        {/* Cover gradient */}
        <div
          className="h-20"
          style={{
            background:
              "linear-gradient(135deg, #EACFD9 0%, #F2CECD 40%, #D8D9EE 100%)",
          }}
        />
        <div className="px-4 pb-4">
          {/* Avatar */}
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-2xl -mt-8 border-4 border-white shadow-md"
            style={{ background: "linear-gradient(135deg, #CE8F9E, #EACFD9)" }}
          >
            K
          </div>
          <h2 className="font-display font-bold text-[#3D2B35] mt-2 text-lg leading-tight">
            KStyle
          </h2>
          <p className="text-[#9A7B84] text-xs mt-0.5">✦ beauty & lifestyle blogger</p>
          <p className="text-[#5D4550] text-sm mt-2 leading-relaxed">
            Нокти 💅 Грим 💄 Коса 💇 Скинкери 🧴 Концерти 🎵
          </p>
          <div className="flex gap-4 mt-3 pt-3 border-t border-[#F2CECD]">
            <div className="text-center">
              <p className="font-bold text-[#3D2B35] text-sm">128</p>
              <p className="text-[#9A7B84] text-xs">Пости</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-[#3D2B35] text-sm">4.2К</p>
              <p className="text-[#9A7B84] text-xs">Последователи</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-[#3D2B35] text-sm">312</p>
              <p className="text-[#9A7B84] text-xs">Следва</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white rounded-2xl border border-[#EACFD9] p-3">
        <nav className="space-y-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors"
              style={
                item.active
                  ? { backgroundColor: "#F2CECD", color: "#CE8F9E" }
                  : { color: "#5D4550" }
              }
            >
              <span className="text-base">{item.emoji}</span>
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* New Post Button */}
      <button
        className="w-full py-3 rounded-2xl text-white font-semibold text-sm transition-all hover:opacity-90 shadow-sm"
        style={{ background: "linear-gradient(135deg, #CE8F9E, #B87A8A)" }}
      >
        ✦ Нов пост
      </button>
    </div>
  );
}
