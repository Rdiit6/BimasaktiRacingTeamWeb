"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import RollText from "./RollText";
import { NAV_LINKS, CONTACT_URL } from "@/data/site";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  // Saat menu HP terbuka: halaman di belakang tidak ikut ter-scroll, Esc menutup menu.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "nav--solid" : ""} ${open ? "nav--open" : ""}`}>
      <Link href="/" className="nav__logo" aria-label="Bimasakti Racing Team home">
        <img src="/assets/logo/logo-white.svg" alt="Logo" />
      </Link>

      <nav className="nav__links" aria-label="Main">
        {NAV_LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={`nav__link ${pathname === l.href ? "is-active" : ""}`}
          >
            <RollText text={l.label} />
          </Link>
        ))}
        {/* tombol Contact Us di dalam menu HP (di desktop ada di kanan atas) */}
        <a href={CONTACT_URL} className="nav__contact nav__contact--menu">CONTACT US</a>
      </nav>

      <div className="nav__right">
        <a href={CONTACT_URL} className="nav__contact">CONTACT US</a>
        <button
          className="nav__burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {/* 3 garis, berubah jadi X saat menu terbuka */}
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
