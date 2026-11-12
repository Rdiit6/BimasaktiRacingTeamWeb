// Semua teks & link ada di sini supaya gampang diubah.
export const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "CARS", href: "/cars" },
  { label: "NEWS", href: "/news" },
  { label: "SPONSORS", href: "/sponsors" },
  { label: "GALLERY", href: "/gallery" },
  { label: "MERCH", href: "/merch" },
];

// Ganti dengan email / form kontak tim
export const CONTACT_URL = "mailto:bimasakti@ugm.ac.id";

export const SOCIALS = [
  { icon: "/assets/icon/yt.svg", label: "BIMASAKTI RACING TEAM UGM", href: "https://www.youtube.com/@bimasaktiracingteamugm", name: "YouTube" },
  { icon: "/assets/icon/ig.svg", label: "BIMASAKTIUGM", href: "https://www.instagram.com/bimasaktiugm", name: "Instagram" },
  { icon: "/assets/icon/tt.svg", label: "BIMASAKTIUGM", href: "https://www.tiktok.com/bimasaktiugm", name: "TikTok" },
  { icon: "/assets/icon/x.svg", label: "BIMASAKTIUGM", href: "https://x.com/bimasakti_ugm", name: "X" },
];

// Logo sponsor otomatis diambil dari folder public/assets/sponsors/<tier>/
// (exclusive, platinum, gold, silver, bronze, supports). Cukup taruh file gambarnya.
// Nama file jadi nama sponsor, mis. "jembo-cable.png" -> "JEMBO CABLE".
export const SPONSOR_TIERS = ["EXCLUSIVE", "PLATINUM", "GOLD", "SILVER", "BRONZE", "SUPPORTS"];

// Opsional: link website sponsor, kuncinya nama file tanpa ekstensi.
// Contoh: "jembo-cable": "https://www.jembo.com"
export const SPONSOR_LINKS = {};

// Timeline mobil per tahun. Foto diambil otomatis dari public/assets/image/cars/<tahun>/
// (file gambar pertama sesuai urutan nama). Kalau foldernya kosong, kartu menampilkan placeholder.
export const CARS = [
  { year: 2011, gen: "1st", achievements: ["First team from Indonesia in Student Formula Competition"] },
  { year: 2012, gen: "2nd", achievements: ["Participant of Student Formula Japan Automotive Research and Development"] },
  { year: 2013, gen: "3rd", achievements: ["Participant of Student Formula Japan Automotive Research and Development"] },
  { year: 2014, gen: "4th", achievements: ["Participant of Student Formula Japan Automotive Research and Development"] },
  { year: 2016, gen: "5th", achievements: ["3rd Place ICV Efficiency Category", "3rd Place Overseas Student Formula Team"] },
  {
    year: 2017, gen: "6th",
    achievements: ["2nd Best Design from South East Asia", "Top 5 High Score Presentation Event", "Top 3 Autocross Skidpad from South East Asia"],
  },
  {
    year: 2018, gen: "7th",
    achievements: ["3rd Winner Business Presentation JAMA Chairman Award", "10th Place Skidpad Event", "Most Achievement team from Indonesia"],
  },
  {
    year: 2019, gen: "8th",
    achievements: [
      "Outstanding Performance Award, JAMA Chairman Award",
      "Top 5 Business Presentation (3 times since 2017)",
      "Top 8 Skidpad Event",
      "Top 3 Design Overseas",
      "Top 6 Overseas Team",
      "Number 1 Student Formula Team in Indonesia",
      "The only Indonesian team with award",
    ],
  },
  {
    year: 2020, gen: "8th",
    achievements: [
      "3rd Place Business Event",
      "4th Place Cost Event",
      "Top 3 ICV Overall",
      "Top 5 Overall",
      "Top 9 on Design Event",
      "The only Indonesian team with award",
    ],
  },
  {
    year: 2021, gen: "8th",
    achievements: ["4th Place Business Event", "10th Place Engineering Design Event", "Top 8 Overall"],
  },
  {
    year: 2022, gen: "11th",
    achievements: [
      "Special award: The Golden Fighter Award",
      "1st Place Business Presentation",
      "6th Place Design Presentation",
      "7th Place Overall Rank",
      "11th Place Cost and Manufacturing Event",
      "The First Indonesia's Formula Student Team that compete in Europe",
    ],
  },
  {
    year: 2023, gen: "12th",
    achievements: [
      "1st Place Business Presentation",
      "5th Place Endurance",
      "5th Place Skidpad",
      "5th Place Autocross",
      "5th Place Efficiency",
      "5th Place Acceleration",
      "8th Place Overall Ranking",
    ],
  },
  {
    year: 2024, gen: "13th",
    achievements: [
      "Best FSS Spirit 2024",
      "6th Place Business Presentation",
      "7th Place Cost and Manufacturing",
      "9th Place Skidpad",
      "10th Place Autocross",
      "12th Place Acceleration",
      "9th Place Overall Ranking",
    ],
  },
  {
    year: 2025, gen: "14th",
    achievements: [
      "1st Place Business Presentation",
      "2nd Place Cost and Manufacturing",
      "3rd Place Engineering Design",
      "2nd Place Overall for Class 3",
    ],
  },
  {
    year: 2026, gen: "15th",
    achievements: [
      "2nd Business Plan Presentation",
      "4th Engineering Design Presentation",
      "6th Cost & Manufacturing",
      "4th Endurance & Efficiency",
      "4th Skidpad",
      "5th Autocross",
      "5th Acceleration",
      "5th Overall for Class 1 ICV",
    ],
  },
  { year: 2027, gen: "16th", achievements: ["Coming soon"] },
];
