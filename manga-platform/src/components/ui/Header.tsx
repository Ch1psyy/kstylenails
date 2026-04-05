"use client";

import { useState } from "react";

const navLinks = ["Начало", "Нокти", "Грим", "Коса", "Скинкери", "Концерти"];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        backgroundColor: "rgba(249,246,244,0.92)",
        backdropFilter: "blur(12px)",
        borderColor: "#EACFD9",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-sm"
            style={{ background: "linear-gradient(135deg, #CE8F9E, #EACFD9)" }}
          >
            K
          </div>
          <span
            className="font-display font-bold text-xl"
            style={{ color: "#3D2B35" }}
          >
            KStyle
          </span>
          <span
            className="text-xs font-medium hidden sm:block"
            style={{ color: "#CE8F9E" }}
          >
            ✦ beauty blog
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((item) => (
            <button
              key={item}
              className="px-3 py-1.5 rounded-full text-sm font-medium transition-colors text-[#9A7B84] hover:bg-[#F2CECD] hover:text-[#CE8F9E]"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => setSearchOpen((prev) => !prev)}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-[#EACFD9]"
            style={{ color: "#9A7B84" }}
            title="Търси"
          >
            🔍
          </button>

          {/* Notification bell */}
          <button
            className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-[#EACFD9] hidden sm:flex"
            style={{ color: "#9A7B84" }}
            title="Известия"
          >
            🔔
          </button>

          {/* Avatar */}
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm cursor-pointer shadow-sm hover:opacity-90 transition-opacity"
            style={{ background: "linear-gradient(135deg, #EACFD9, #CE8F9E)" }}
          >
            K
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-[#EACFD9]"
            style={{ color: "#9A7B84" }}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Search bar */}
      {searchOpen && (
        <div className="border-t px-4 py-3" style={{ borderColor: "#EACFD9" }}>
          <input
            type="text"
            placeholder="Търси нокти, грим, концерти..."
            autoFocus
            className="w-full max-w-xl mx-auto block rounded-full px-4 py-2 text-sm outline-none transition-colors"
            style={{
              backgroundColor: "#FFFFFF",
              border: "1.5px solid #EACFD9",
              color: "#3D2B35",
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "#CE8F9E")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "#EACFD9")}
          />
        </div>
      )}

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden border-t py-2"
          style={{ borderColor: "#EACFD9" }}
        >
          {navLinks.map((item) => (
            <button
              key={item}
              className="w-full text-left px-4 py-2.5 text-sm font-medium transition-colors hover:bg-[#F2CECD]"
              style={{ color: "#3D2B35" }}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
