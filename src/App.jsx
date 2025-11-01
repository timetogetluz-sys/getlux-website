import React from "react";

const BACKGROUND_URL =
  "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1600&auto=format&fit=crop"; // Replace with your photo or promo still

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      {/* NAV */}
      <nav className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-white/40">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-black tracking-tight text-xl">
            GETLUZ
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:opacity-70" href="#classes">
              Classes
            </a>
            <a className="hover:opacity-70" href="#gallery">
              Gallery
            </a>
            <a className="hover:opacity-70" href="#merch">
              Merch
            </a>
            <a
              className="px-4 py-
