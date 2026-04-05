import React from "react";

const stories = [
  {
    id: 1,
    label: "Нов",
    emoji: "➕",
    color1: "#CE8F9E",
    color2: "#EACFD9",
    isNew: true,
  },
  {
    id: 2,
    label: "Нокти",
    emoji: "💅",
    color1: "#F2CECD",
    color2: "#CE8F9E",
    isNew: false,
  },
  {
    id: 3,
    label: "Грим",
    emoji: "💄",
    color1: "#EACFD9",
    color2: "#D8D9EE",
    isNew: false,
  },
  {
    id: 4,
    label: "Концерти",
    emoji: "🎵",
    color1: "#D8D9EE",
    color2: "#BACBE3",
    isNew: false,
  },
  {
    id: 5,
    label: "Скинкери",
    emoji: "🧴",
    color1: "#BACBE3",
    color2: "#DDE7F3",
    isNew: false,
  },
  {
    id: 6,
    label: "Коса",
    emoji: "💇",
    color1: "#A9B39A",
    color2: "#818455",
    isNew: false,
  },
  {
    id: 7,
    label: "Lifestyle",
    emoji: "✨",
    color1: "#F2CECD",
    color2: "#BACBE3",
    isNew: false,
  },
];

export function Stories() {
  return (
    <div className="bg-white rounded-2xl border border-[#EACFD9] p-4 mb-4">
      <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-1">
        {stories.map((story) => (
          <button
            key={story.id}
            className="flex flex-col items-center gap-2 flex-shrink-0 group cursor-pointer"
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-sm group-hover:scale-105 transition-transform"
              style={{
                background: `linear-gradient(135deg, ${story.color1}, ${story.color2})`,
                outline: story.isNew
                  ? "2px dashed #CE8F9E"
                  : "3px solid #EACFD9",
                outlineOffset: "2px",
              }}
            >
              {story.emoji}
            </div>
            <span className="text-xs text-[#5D4550] font-medium whitespace-nowrap">
              {story.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
