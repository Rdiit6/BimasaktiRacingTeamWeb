"use client";
import { useEffect, useState } from "react";

// Panjang garis tiap huruf (dalam em, sedikit lebih dari kelilingnya) supaya
// semua huruf mulai & selesai tergambar bersamaan.
const LETTERS = [["B", 3.6], ["I", 2.2], ["M", 7.6], ["A", 3.8], ["S", 4.4], ["A", 3.8], ["K", 4.2], ["T", 3.2], ["I", 2.2]];

export default function Loader() {
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Loader cuma jalan saat web dimuat ulang: selalu mulai dari paling atas Home
    // supaya tulisan BIMASAKTI di loader nyambung dengan judul hero.
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo({ top: 0, behavior: "instant" });

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setPct(100); setDone(true); return; }
    const start = performance.now();
    const dur = 2400;
    let raf;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur);
      setPct(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 250);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    document.body.style.overflow = done ? "" : "hidden";
  }, [done]);

  return (
    <div className={`loader ${done ? "loader--done" : ""}`} aria-hidden={done}>
      {/* Outline BIMASAKTI digambar mengikuti progress, posisinya sama dengan judul di hero
          sehingga saat loader memudar tulisannya terlihat menyatu ke halaman Home. */}
      <svg className="loader__svg" aria-hidden="true">
        <text className="loader__word" x="50%" y="42%">
          {LETTERS.map(([ch, len], i) => (
            <tspan key={i} style={{ strokeDasharray: `${len}em`, strokeDashoffset: `${(1 - pct / 100) * len}em` }}>
              {ch}
            </tspan>
          ))}
        </text>
      </svg>
      {/* muncul setelah outline hampir selesai */}
      <p className={`brand-sub ${pct >= 85 ? "is-shown" : ""}`}>RACING TEAM</p>
      <div className="loader__row">
        <span>LOADING</span>
        <span className="loader__pct">{pct}%</span>
      </div>
      <div className="loader__bar"><span style={{ width: `${pct}%` }} /></div>
    </div>
  );
}
