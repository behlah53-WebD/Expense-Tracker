"use client";

import React, { useState } from "react";
import { Sparkles, TrendingUp, ShieldCheck, Zap } from "lucide-react";

export function AuthVisualHero() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Check reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotate({
      x: -y * 0.03,
      y: x * 0.03,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="hidden lg:flex flex-col justify-between p-12 relative overflow-hidden bg-gradient-to-br from-[var(--bg-base)] via-[var(--bg-elevated)] to-[var(--bg-base)] border-r border-[var(--border)]"
    >
      {/* Background Expense Tracker Orbs */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[var(--primary)]/25 blur-[100px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 -right-24 w-80 h-80 rounded-full bg-[var(--accent-cyan)]/20 blur-[100px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 left-1/4 w-96 h-96 rounded-full bg-[var(--expense)]/15 blur-[100px] pointer-events-none"
      />

      {/* Brand Header */}
      <div className="z-10 flex items-center gap-3">
        <div className="w-12 h-12 rounded-inner bg-gradient-to-tr from-[var(--primary)] to-[var(--accent-cyan)] flex items-center justify-center shadow-glow-violet">
          <Sparkles className="w-6 h-6 text-white" aria-hidden="true" />
        </div>
        <div>
          <span className="font-heading font-extrabold text-2xl tracking-wide bg-gradient-to-r from-white via-[var(--text-secondary)] to-[var(--accent-cyan)] bg-clip-text text-transparent">
            Expense Tracker
          </span>
          <span className="font-heading font-light text-xs block text-[var(--primary)] tracking-widest uppercase">
            Ledger
          </span>
        </div>
      </div>

      {/* Central 3D Tilted Glass Card */}
      <div className="z-10 my-auto py-10 flex flex-col items-center justify-center perspective-[1000px]">
        <div
          className="w-full max-w-sm rounded-[28px] p-7 transition-transform duration-200 ease-out"
          style={{
            background: "var(--surface)",
            backdropFilter: "blur(24px) saturate(160%)",
            border: "1px solid var(--border)",
            boxShadow:
              "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(124, 92, 255, 0.25)",
            transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          }}
        >
          <div className="flex items-center justify-between">
            <span className="text-[12px] font-medium uppercase tracking-[0.08em] text-[var(--text-muted)] flex items-center gap-1.5">
              <span
                className="w-2 h-2 rounded-full bg-[var(--income)] shadow-glow-mint animate-pulse"
                aria-hidden="true"
              />
              Active Net Worth
            </span>
            <span className="text-xs font-mono font-bold text-[var(--income-text)] bg-[var(--income)]/15 px-2.5 py-1 rounded-full flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" aria-hidden="true" /> +18.4%
            </span>
          </div>

          <div className="mt-4">
            <span className="font-mono text-4xl font-extrabold text-[var(--text-heading)] tracking-tight">
              ₹1,24,580
              <span className="text-[var(--accent-cyan)] text-2xl">.00</span>
            </span>
          </div>

          {/* Mini Sparkline in the tilted card */}
          <div className="mt-6 pt-4 border-t border-[var(--border)]">
            <div className="flex items-center justify-between text-xs text-[var(--text-secondary)] mb-2">
              <span>Trajectory</span>
              <span className="text-[var(--accent-cyan)] font-mono font-semibold">
                High Growth
              </span>
            </div>
            <div className="h-10 w-full" aria-hidden="true">
              <svg viewBox="0 0 200 40" className="w-full h-full">
                <defs>
                  <linearGradient
                    id="tiltedCardGlow"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#7C5CFF" />
                    <stop offset="50%" stopColor="#38D5FF" />
                    <stop offset="100%" stopColor="#2EF2B0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,32 Q30,35 60,24 T120,18 T170,8 L200,4"
                  fill="none"
                  stroke="url(#tiltedCardGlow)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="mt-8 text-center max-w-sm">
          <h2 className="text-2xl font-bold font-heading text-[var(--text-heading)]">
            Watch your money glow.
          </h2>
          <p className="text-xs text-[var(--text-secondary)] mt-2 leading-relaxed">
            Turn transactions into living northern lights. Income enters as mint
            and emerald light, expenses flow as vibrant coral, and your Balance
            Orb pulses with financial health.
          </p>
        </div>
      </div>

      {/* Feature Badges Footer */}
      <div className="z-10 grid grid-cols-2 gap-3 text-xs text-[var(--text-secondary)]">
        <div className="flex items-center gap-2">
          <ShieldCheck
            className="w-4 h-4 text-[var(--income)]"
            aria-hidden="true"
          />
          <span>Bank-grade Encryption</span>
        </div>
        <div className="flex items-center gap-2">
          <Zap
            className="w-4 h-4 text-[var(--accent-gold)]"
            aria-hidden="true"
          />
          <span>Instant Insights & Sync</span>
        </div>
      </div>
    </div>
  );
}
