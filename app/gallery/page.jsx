"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Phone, X } from "lucide-react";
import { PageHeader } from "../../components/UI";
import { galleryImages } from "../../lib/data";
import { PHONE, PHONE_DISPLAY } from "../../lib/site";

// First three photos are portrait (one row of three), the rest landscape (two per row).
const TILE = {
  0: "col-span-2 aspect-[3/4]",
  1: "col-span-2 aspect-[3/4] max-[700px]:col-span-1",
  2: "col-span-2 aspect-[3/4] max-[700px]:col-span-1",
  wide: "col-span-3 aspect-[16/9] max-[700px]:col-span-2",
};

export default function Gallery() {
  const [open, setOpen] = useState(null); // index into `shown`
  const shown = galleryImages;

  // Keyboard controls for the lightbox.
  useEffect(() => {
    if (open === null) return;
    const onKey = e => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen(i => (i + 1) % shown.length);
      if (e.key === "ArrowLeft") setOpen(i => (i - 1 + shown.length) % shown.length);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, shown.length]);

  return (
    <>
      <PageHeader crumb="Gupta Tailors Gallery" />

      <section className="section pt-1! leading-[normal]">
        <div className="container">
          <h2 className="mt-0 mb-4 text-center font-serif text-[42px] leading-[1.05] font-bold text-maroon max-[560px]:mb-4 max-[560px]:text-[36px]">Gallery</h2>
          <div className="grid grid-cols-6 gap-4 max-[700px]:grid-cols-2 max-[700px]:gap-3">
            {shown.map(([img, alt], i) => (
              <button
                key={img + alt}
                type="button"
                onClick={() => setOpen(i)}
                className={`group relative block w-full cursor-zoom-in overflow-hidden rounded-[14px] bg-[#f1ebe0] text-left ${TILE[i] || TILE.wide}`}
              >
                <img className="block h-full w-full object-cover transition-transform duration-500 ease-[ease] group-hover:scale-[1.05]" src={img} alt={alt} loading="lazy" />
              </button>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a className="btn btn-primary" href={`tel:+${PHONE}`}><Phone size={18} /> Dukaan Par Aayein — {PHONE_DISPLAY}</a>
          </div>
        </div>
      </section>

      {open !== null && shown[open] && (
        <div className="fixed inset-0 z-[100] grid place-items-center bg-[rgba(10,12,20,.88)] p-4 backdrop-blur-[4px]" onClick={() => setOpen(null)} role="dialog" aria-modal="true" aria-label={shown[open][1]}>
          <figure className="relative m-0 max-w-[min(1000px,92vw)]" onClick={e => e.stopPropagation()}>
            <img className="block max-h-[80vh] w-auto rounded-[12px] object-contain" src={shown[open][0]} alt={shown[open][1]} />
          </figure>
          <button type="button" aria-label="Band karein" onClick={() => setOpen(null)} className="absolute top-4 right-4 grid h-11 w-11 cursor-pointer place-items-center rounded-full bg-white/15 text-white hover:bg-white/25"><X /></button>
          {shown.length > 1 && <>
            <button type="button" aria-label="Pichhli photo" onClick={e => { e.stopPropagation(); setOpen((open - 1 + shown.length) % shown.length); }} className="absolute top-1/2 left-3 grid h-12 w-12 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-white/15 text-white hover:bg-white/25"><ChevronLeft /></button>
            <button type="button" aria-label="Agli photo" onClick={e => { e.stopPropagation(); setOpen((open + 1) % shown.length); }} className="absolute top-1/2 right-3 grid h-12 w-12 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-white/15 text-white hover:bg-white/25"><ChevronRight /></button>
          </>}
        </div>
      )}
    </>
  );
}
