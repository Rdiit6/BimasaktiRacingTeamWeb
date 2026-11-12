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
      </nav>

      <div className="nav__right">
        <a href={CONTACT_URL} className="nav__contact">CONTACT US</a>
        <button
          className="nav__burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <img src="/assets/icon/navicon.svg" alt="Nav Icon" />
        </button>
      </div>
    </header>
  );
}
