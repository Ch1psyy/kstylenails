"use client";

import { useState } from "react";

export interface Post {
  id: number;
  category: string;
  categoryLabel: string;
  title: string;
  content: string;
  hasImage: boolean;
  imageColor1: string;
  imageColor2: string;
  imageEmoji: string;
  likes: number;
  comments: number;
  shares: number;
  time: string;
  tags: string[];
}

const categoryStyles: Record<string, { bg: string; color: string }> = {
  nails: { bg: "#F2CECD", color: "#CE8F9E" },
  makeup: { bg: "#EACFD9", color: "#B87A8A" },
  concert: { bg: "#D8D9EE", color: "#6B6BAB" },
  skincare: { bg: "#DDE7F3", color: "#4E7A9B" },
  hair: { bg: "#D4EAD0", color: "#618455" },
};

export function PostCard({ post }: { post: Post }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);

  const style = categoryStyles[post.category] ?? categoryStyles.nails;

  const handleLike = () => {
    setLiked((prev) => !prev);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <article className="bg-white rounded-2xl border border-[#EACFD9] overflow-hidden mb-4 hover:shadow-lg transition-all duration-200" style={{ boxShadow: "0 2px 16px rgba(234,207,217,0.2)" }}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 pb-3">
        <div className="flex items-center gap-3">
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-base shadow-sm"
            style={{ background: "linear-gradient(135deg, #EACFD9, #CE8F9E)" }}
          >
            K
          </div>
          <div>
            <p className="font-semibold text-[#3D2B35] text-sm leading-tight">KStyle</p>
            <p className="text-[#9A7B84] text-xs">{post.time} назад</p>
          </div>
        </div>
        <span
          className="px-3 py-1 rounded-full text-xs font-semibold"
          style={{ backgroundColor: style.bg, color: style.color }}
        >
          {post.categoryLabel}
        </span>
      </div>

      {/* Content */}
      <div className="px-4 pb-3">
        <h3 className="font-display font-bold text-[#3D2B35] text-xl mb-2 leading-snug">
          {post.title}
        </h3>
        <p className="text-[#5D4550] text-sm leading-relaxed">{post.content}</p>
      </div>

      {/* Image placeholder */}
      {post.hasImage && (
        <div className="mx-4 mb-3">
          <div
            className="h-56 rounded-xl flex flex-col items-center justify-center gap-2"
            style={{
              background: `linear-gradient(135deg, ${post.imageColor1}, ${post.imageColor2})`,
            }}
          >
            <span className="text-6xl">{post.imageEmoji}</span>
            <span className="text-[#3D2B35]/30 text-xs font-medium">снимка скоро ✦</span>
          </div>
        </div>
      )}

      {/* Tags */}
      {post.tags.length > 0 && (
        <div className="px-4 pb-3 flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium hover:underline cursor-pointer"
              style={{ color: "#CE8F9E" }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Engagement */}
      <div
        className="px-4 py-3 border-t flex items-center justify-between"
        style={{ borderColor: "#F2CECD" }}
      >
        <div className="flex items-center gap-5">
          <button
            onClick={handleLike}
            className="flex items-center gap-1.5 text-sm transition-all hover:scale-110"
            style={{ color: liked ? "#CE8F9E" : "#9A7B84" }}
          >
            <span className="text-lg">{liked ? "❤️" : "🤍"}</span>
            <span className="font-medium">{likeCount}</span>
          </button>
          <button
            className="flex items-center gap-1.5 text-sm transition-colors hover:scale-110"
            style={{ color: "#9A7B84" }}
          >
            <span className="text-lg">💬</span>
            <span className="font-medium">{post.comments}</span>
          </button>
          <button
            className="flex items-center gap-1.5 text-sm transition-colors hover:scale-110"
            style={{ color: "#9A7B84" }}
          >
            <span className="text-lg">↗️</span>
            <span className="font-medium">{post.shares}</span>
          </button>
        </div>
        <button
          onClick={() => setSaved((prev) => !prev)}
          className="text-lg transition-all hover:scale-110"
          style={{ color: saved ? "#818455" : "#9A7B84" }}
        >
          {saved ? "🔖" : "📑"}
        </button>
      </div>
    </article>
  );
}
