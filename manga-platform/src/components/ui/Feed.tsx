"use client";

import { useState } from "react";
import { Stories } from "./Stories";
import { CategoryPills } from "./CategoryPills";
import { PostCard, type Post } from "./PostCard";

const posts: Post[] = [
  {
    id: 1,
    category: "nails",
    categoryLabel: "💅 Нокти",
    title: "Пролетни нокти с нежни цветя",
    content:
      "Обожавам тези пролетни дизайни! Направих ги с гел лак в нежни розови нюанси с малки цветчета. Времето за сушене е 2 мин на всеки слой. Резултатът е просто невероятен — всяка ноктичка изглежда като малка картина 🌸",
    hasImage: true,
    imageColor1: "#F2CECD",
    imageColor2: "#CE8F9E",
    imageEmoji: "💅",
    likes: 243,
    comments: 18,
    shares: 7,
    time: "2 часа",
    tags: ["#нокти", "#пролет", "#гел", "#NailArt", "#нежноро зово"],
  },
  {
    id: 2,
    category: "concert",
    categoryLabel: "🎵 Концерт",
    title: "AURORA live — едно магическо преживяване",
    content:
      "Не мога да спра да мисля за вчерашния концерт! Атмосферата беше нереална — светлини, музика, хора около теб. Гласът на AURORA е просто нечовешки красив. Определено едно от най-добрите преживявания в живота ми 🌙✨",
    hasImage: true,
    imageColor1: "#D8D9EE",
    imageColor2: "#BACBE3",
    imageEmoji: "🎶",
    likes: 412,
    comments: 34,
    shares: 23,
    time: "5 часа",
    tags: ["#концерт", "#AURORA", "#live", "#музика", "#KStyleEvents"],
  },
  {
    id: 3,
    category: "makeup",
    categoryLabel: "💄 Грим",
    title: "Soft glam look за всеки ден",
    content:
      "Показвам ви любимия си everyday makeup look! Лека основа, розови нюанси по скулите и нежен блясък. Перфектен за работа, училище или разходка. Нужни са само 10 минути ⏱️💕",
    hasImage: true,
    imageColor1: "#EACFD9",
    imageColor2: "#DDE7F3",
    imageEmoji: "💄",
    likes: 187,
    comments: 25,
    shares: 11,
    time: "1 ден",
    tags: ["#грим", "#makeup", "#softglam", "#everydaylook", "#розово"],
  },
  {
    id: 4,
    category: "skincare",
    categoryLabel: "🧴 Скинкери",
    title: "Моята сутрешна скинкери рутина за 2025",
    content:
      "Сутринта задавам тона на деня с тази рутина: почистване, тонер, серум с витамин С, хидратация и SPF. Резултатите след 3 месеца са видими — кожата е по-сияйна, по-равна и много по-хидратирана. Питайте ако искате подробности за продуктите 🌿",
    hasImage: false,
    imageColor1: "",
    imageColor2: "",
    imageEmoji: "",
    likes: 156,
    comments: 42,
    shares: 19,
    time: "2 дни",
    tags: ["#скинкери", "#skincare", "#routine", "#сутрин", "#здравакожа"],
  },
  {
    id: 5,
    category: "hair",
    categoryLabel: "💇 Коса",
    title: "Балеаж трансформация — преди и след",
    content:
      "Накрая се реших! Направих балеаж за първи път и съм абсолютно влюбена в резултата. Преходът от тъмно към светло е толкова естествен. Прекарах 4 часа в салона, но е напълно заслужено! 💫",
    hasImage: true,
    imageColor1: "#A9B39A",
    imageColor2: "#EACFD9",
    imageEmoji: "💇",
    likes: 298,
    comments: 67,
    shares: 31,
    time: "3 дни",
    tags: ["#коса", "#балеаж", "#hair", "#трансформация", "#салон"],
  },
  {
    id: 6,
    category: "nails",
    categoryLabel: "💅 Нокти",
    title: "French manicure с twist — новата тенденция",
    content:
      "Класическият French manicure получи обновление! Вместо бялото на края, използвам нежно розово или дори пастелно синьо. Изглежда елегантно, но с характер. Перфектно за всякакъв повод 💎",
    hasImage: true,
    imageColor1: "#F9F6F4",
    imageColor2: "#D8D9EE",
    imageEmoji: "✨",
    likes: 189,
    comments: 21,
    shares: 9,
    time: "4 дни",
    tags: ["#нокти", "#french", "#FrenchMani", "#тренд2025", "#нежно"],
  },
];

export function Feed() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <div>
      <Stories />
      <CategoryPills active={activeCategory} onSelect={setActiveCategory} />
      <div>
        {filtered.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
        {filtered.length === 0 && (
          <div className="bg-white rounded-2xl border border-[#EACFD9] p-12 text-center">
            <p className="text-4xl mb-3">🌸</p>
            <p className="text-[#9A7B84]">
              Няма публикации в тази категория все още.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
