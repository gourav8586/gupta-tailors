"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Award, Gem, Ruler, UserCheck, Wallet } from "lucide-react";
import { FOUNDED_YEAR } from "../lib/site";

const points = [
  { icon: Award, text: "Anubhav Ki Parampara" },
  { icon: UserCheck, text: "Personalized Service" },
  { icon: Ruler, text: "Har Detail Par Dhyan" },
  { icon: Gem, text: "Behtareen Quality" },
  { icon: Wallet, text: "Har Budget Ke Liye Solutions" }
];

// Scroll-reveal classes for a child: hidden (slid 70px to the side) once JS is ready,
// shown when the section enters the viewport. Uses the inline --d delay.
const REVEAL_BASE = "[transition:opacity_.7s_ease_var(--d,0ms),transform_.9s_cubic-bezier(.2,.7,.2,1)_var(--d,0ms)] motion-reduce:[transition:none] motion-reduce:opacity-100 motion-reduce:[transform:none]";
const REVEAL_SHOWN = "opacity-100 [transform:none]";
const REVEAL_HIDDEN = {
  left: "opacity-0 [transform:translateX(-70px)]",
  right: "opacity-0 [transform:translateX(70px)]"
};

export default function AboutTeaser() {
  const ref = useRef(null);
  const [state, setState] = useState("");

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    setState("reveal-ready");
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setState("reveal-ready is-visible");
        io.disconnect();
      }
    }, { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const ready = state.includes("reveal-ready");
  const visible = state.includes("is-visible");
  const reveal = dir => (ready ? `${REVEAL_BASE} ${visible ? REVEAL_SHOWN : REVEAL_HIDDEN[dir]}` : "");

  return (
    <section ref={ref} className="section overflow-hidden bg-white leading-[normal]">
      <div className="container grid grid-cols-[180px_minmax(0,.9fr)_minmax(0,1.4fr)_minmax(0,.85fr)] items-center gap-[34px] max-[1180px]:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)_minmax(0,1fr)] max-[900px]:grid-cols-2 max-[560px]:grid-cols-1 max-[560px]:gap-[26px]">
        <div className={`text-center text-[#b7a386] max-[1180px]:hidden ${reveal("left")}`} aria-hidden="true" data-reveal="left" style={{ "--d": "600ms" }}>
          <svg className="mx-auto mb-1.5 block h-auto w-[100px]" viewBox="0 0 120 220" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M52 14h16M56 14v-6h8v6" />
            <path d="M50 20c-8 2-16 4-20 10-4 8-2 20 2 30 3 9 4 18 2 28-2 12-6 22-6 34 0 6 4 10 12 12h40c8-2 12-6 12-12 0-12-4-22-6-34-2-10-1-19 2-28 4-10 6-22 2-30-4-6-12-8-20-10" />
            <path d="M50 20c2 6 18 6 20 0" />
            <path d="M36 46c14 6 34 6 48 0M34 86c16 5 36 5 52 0" strokeDasharray="3 3" />
            <path d="M60 22v124" strokeDasharray="2 4" opacity=".6" />
            <path d="M46 24c-4 18 6 30 2 50-3 14-10 22-6 40" />
            <path d="M60 146v48M60 194l-26 16M60 194l26 16M60 194v18" />
          </svg>
          <p className="m-0 [transform:rotate(-6deg)] font-hand text-[21px] leading-[1.2] whitespace-nowrap text-maroon">Silai sirf kapde ki nahi,<br />Rishton ki bhi hoti hai.</p>
        </div>

        <ul className="m-0 grid list-none gap-5 border-r border-[#e8dcc4] py-1.5 pr-[30px] pl-0 max-[900px]:border-r-0 max-[900px]:pr-0">
          {points.map(({ icon: Icon, text }, i) => (
            <li key={text} className={`group flex items-center gap-3.5 text-[14.5px] font-semibold text-navy ${reveal("left")}`} data-reveal="left" style={{ "--d": `${250 + i * 110}ms` }}><span className="grid h-10 w-10 flex-none place-items-center rounded-full border-[1.5px] border-gold text-gold transition-all duration-[250ms] ease-[ease] group-hover:border-maroon group-hover:bg-maroon group-hover:text-gold2 [&>svg]:h-[19px] [&>svg]:w-[19px]"><Icon /></span>{text}</li>
          ))}
        </ul>

        <div className={`max-[900px]:col-span-full max-[900px]:-order-2 ${reveal("right")}`} data-reveal="right" style={{ "--d": "150ms" }}>
          <div className="mb-3.5 flex items-center gap-2.5 text-[11px] font-bold tracking-[2.5px] text-gold uppercase"><i className="block h-px w-[26px] bg-gold" />Hamare Baare Mein<i className="block h-px w-[26px] bg-gold" /></div>
          <h2 className="m-0 mb-4 font-serif text-[42px] font-bold leading-[1.08] text-navy max-[560px]:text-[34px]"><span className="whitespace-nowrap">Parampara Se, Aaj Tak</span><br />Sirf <em className="text-maroon not-italic">Aapke Liye</em></h2>
          <p className="m-0 mb-6 text-[15px] leading-[1.75] text-muted">Gupta Tailors ki shuruaat {FOUNDED_YEAR} mein hui thi, ek simple soch ke saath — har insaan ko uske liye perfect fit aur behtareen quality dena. Aaj bhi hum wahi values ke saath kaam kar rahe hain — quality, precision aur personal touch.</p>
          <Link className="btn btn-primary" href="/about">Hamari Kahani <ArrowRight size={18} /></Link>
        </div>

        <div className={`relative aspect-[4/5] overflow-hidden rounded-[14px] max-[900px]:-order-1 max-[560px]:aspect-[4/4.5] ${reveal("right")}`} data-reveal="right">
          <img className="block h-full w-full object-cover object-top" src="/img/about/owner-portrait.jpg" alt="Anil Gupta, Founder & CEO, Gupta Tailors Alwar" loading="lazy" />
          <div className="absolute right-0 bottom-0 flex items-center gap-3.5 rounded-tl-xl border-2 border-r-0 border-b-0 border-gold2 bg-[linear-gradient(150deg,#7d171b,#5e1014)] px-4 py-3 text-white"><b className="block font-serif text-[34px] leading-none font-bold">{FOUNDED_YEAR}</b><span aria-hidden="true" className="h-9 w-px bg-[rgba(228,182,76,.5)]" /><span className="text-left leading-tight"><b className="block font-serif text-[18px] font-bold text-white">Anil Gupta</b><span className="block text-[10px] font-bold tracking-[1.5px] text-gold2 uppercase">Founder &amp; CEO</span></span></div>
        </div>
      </div>
    </section>
  );
}
