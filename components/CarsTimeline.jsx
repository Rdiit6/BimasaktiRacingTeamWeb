"use client";
import { useEffect, useRef } from "react";
import { CARS } from "@/data/site";
import Pic from "./Pic";

// Timeline zig-zag: baris genap kiri→kanan, baris ganjil kanan→kiri,
// garis merah turun di sisi kanan/kiri supaya tetap nyambung.
const rows = [];
for (let i = 0; i < CARS.length; i += 2) rows.push(CARS.slice(i, i + 2));

// Ujung garis horizontal baris terakhir harus berhenti di tengah kartu terakhir.
function endClass(rowIndex, count) {
  const rev = rowIndex % 2 === 1;
  if (rev) return count === 2 ? "tl__row--end-l" : "tl__row--end-l1";
  return count === 2 ? "tl__row--end-r" : "tl__row--end-r1";
}

function Car({ car, image }) {
  return (
    <article className="car">
      <div className="car__media">
        {image ? (
          <Pic src={image} alt={`Bimasakti car ${car.year}`} sizes="(max-width: 760px) 100vw, 600px" />
        ) : (
          <span className="car__placeholder" aria-hidden="true">{car.year}</span>
        )}
        <span className="car__gen">{car.gen}</span>
      </div>
      <h2 className="car__year">{car.year}</h2>
      <ul className="car__list">
        {car.achievements.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>
    </article>
  );
}

export default function CarsTimeline({ images = {} }) {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    root.classList.add("tl--js");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    root.querySelectorAll(".car").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="tl" ref={ref}>
      {rows.map((row, i) => {
        const last = i === rows.length - 1;
        const cls = [
          "tl__row",
          i % 2 === 1 && "tl__row--rev",
          i === 0 && "tl__row--first",
          last && "tl__row--last",
          last && endClass(i, row.length),
        ].filter(Boolean).join(" ");
        return (
          <div className={cls} key={row[0].year}>
            {row.map((car) => (
              <Car car={car} image={images[car.year]} key={car.year} />
            ))}
          </div>
        );
      })}
    </div>
  );
}
