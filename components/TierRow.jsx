"use client";
import { useEffect, useRef, useState } from "react";
import SponsorLogo from "./SponsorLogo";

// Logo satu tier dalam satu baris. Kalau muat -> diam di tengah,
// kalau tidak muat -> berjalan ke kiri (daftar ditampilkan 2x supaya loop nyambung).
export default function TierRow({ sponsors }) {
  const boxRef = useRef(null);
  const groupRef = useRef(null);
  const [moving, setMoving] = useState(false);

  useEffect(() => {
    // Ukur terhadap lebar tier (parent), bukan kotak baris: saat bergerak kotaknya
    // melebar ke tepi layar, dan kalau itu yang diukur hasilnya bolak-balik (flicker).
    const area = boxRef.current.parentElement;
    const group = groupRef.current;
    const check = () => {
      const pad = parseFloat(getComputedStyle(group).paddingRight) || 0;
      setMoving(group.scrollWidth - pad > area.clientWidth + 1);
    };
    check();
    const ro = new ResizeObserver(check);
    ro.observe(area);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={boxRef}
      className={`tier__row ${moving ? "tier__row--moving" : ""}`}
      style={{ "--dur": `${sponsors.length * 2.5}s` }}
    >
      <div className="tier__track">
        <div className="tier__logos" ref={groupRef}>
          {sponsors.map((s) => (
            <SponsorLogo s={s} className="tier__logo" key={s.logo} />
          ))}
        </div>
        {moving && (
          <div className="tier__logos" aria-hidden="true">
            {sponsors.map((s) => (
              <SponsorLogo s={s} className="tier__logo" key={s.logo} hidden />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
