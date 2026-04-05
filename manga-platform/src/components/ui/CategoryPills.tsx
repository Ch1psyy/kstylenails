"use client";

const categories = [
  { id: "all", label: "✨ Всички" },
  { id: "nails", label: "💅 Нокти" },
  { id: "makeup", label: "💄 Грим" },
  { id: "hair", label: "💇 Коса" },
  { id: "skincare", label: "🧴 Скинкери" },
  { id: "concert", label: "🎵 Концерти" },
];

interface CategoryPillsProps {
  active: string;
  onSelect: (category: string) => void;
}

export function CategoryPills({ active, onSelect }: CategoryPillsProps) {
  return (
    <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1 mb-4">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.id)}
          className="flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all"
          style={
            active === cat.id
              ? {
                  backgroundColor: "#CE8F9E",
                  color: "#FFFFFF",
                  boxShadow: "0 2px 8px rgba(206,143,158,0.35)",
                }
              : {
                  backgroundColor: "#FFFFFF",
                  color: "#9A7B84",
                  border: "1.5px solid #EACFD9",
                }
          }
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
