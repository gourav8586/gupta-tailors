"use client";

import { useEffect, useState } from "react";
import { ArrowRight, CalendarClock, Camera, CheckCircle2, Clock, MapPin, Navigation, Phone, Ruler, Scissors, Shirt } from "lucide-react";
import SocialLinks from "../../components/Social";
import { ADDRESS, FOUNDED_YEAR, MAPS_URL, PHONE, PHONE_DISPLAY } from "../../lib/site";

// Each contact method is a garment hang-tag hanging from a rail.
const hangTags = [
  { icon: Phone, title: "Call Karein", value: PHONE_DISPLAY, link: "Abhi Call Karein", href: `tel:+${PHONE}`, code: "GT-CALL", tilt: "-rotate-2",
    skin: "bg-[linear-gradient(160deg,#8f1d22,#5e1014)] text-white", sub: "text-[#f1dcdc]", stitch: "border-[rgba(228,182,76,.55)]", iconCls: "bg-gold2 text-maroon2", btn: "btn-gold" },
  { icon: MapPin, title: "Dukaan Ka Pata", value: ADDRESS, link: "Directions Lein", href: MAPS_URL, external: true, code: "GT-ALWAR", tilt: "rotate-1",
    skin: "bg-[#efe2c4] bg-[radial-gradient(rgba(94,60,20,.07)_1px,transparent_1px)] bg-[length:6px_6px] text-navy", sub: "text-ink", stitch: "border-[rgba(125,23,27,.35)]", iconCls: "bg-maroon text-gold2", btn: "btn-primary" },
  { icon: Clock, title: "Timing", value: "Mon – Sun ( 9 AM – 10 PM )", note: "Hafte ke saaton din khula", code: "GT-9TO10", tilt: "-rotate-1",
    skin: "bg-[linear-gradient(160deg,#22346a,#101f45)] text-white", sub: "text-[#d7dce6]", stitch: "border-[rgba(228,182,76,.5)]", iconCls: "bg-gold2 text-navy" },
];

const visitReasons = [
  "Naap dene ke liye",
  "Fabric aur design dekhne",
  "Uniform ka bulk order",
  "Trial, fitting, alteration"
];

const slipRows = [
  ["Dukaan", "Gupta Tailors"],
  ["Pata", ADDRESS],
  ["Phone", PHONE_DISPLAY],
  ["Timing", "Mon – Sun, 9 AM – 10 PM"],
];

// Pinking-shear zig-zag edge (masks the element into teeth).
const PINKED_BOTTOM = "[mask:conic-gradient(from_135deg_at_top,#0000,#000_1deg_89deg,#0000_90deg)_50%/18px_100%]";
// Dashed "stitch" line inside a card.
const STITCH = "outline-1 outline-dashed -outline-offset-[9px] outline-[#e2c68c]";
const eyebrowLine = "before:h-px before:w-10 before:bg-gold before:content-[''] after:h-px after:w-10 after:bg-gold after:content-['']";

function TapeMeasure() {
  return (
    <div aria-hidden="true" className="relative h-10 overflow-hidden bg-[linear-gradient(180deg,#f7d466,#e7b53a)]">
      <div className="absolute inset-x-0 top-0 h-[45%] bg-[repeating-linear-gradient(90deg,#3a2a12_0_1px,transparent_1px_8px)]" />
      <div className="absolute inset-x-0 top-0 h-[70%] bg-[repeating-linear-gradient(90deg,#3a2a12_0_1.5px,transparent_1.5px_40px)]" />
      <div className="absolute bottom-1 left-0 flex whitespace-nowrap text-[10px] font-bold text-[#3a2a12]">
        {Array.from({ length: 80 }, (_, i) => <span className="inline-block w-10 pl-1" key={i}>{i + 1}</span>)}
      </div>
    </div>
  );
}

// Shop hours in India time: 9 AM to 10 PM, every day.
function isShopOpen() {
  const hour = Number(new Intl.DateTimeFormat("en-IN", { hour: "numeric", hourCycle: "h23", timeZone: "Asia/Kolkata" }).format(new Date()));
  return hour >= 9 && hour < 22;
}

export default function Contact() {
  // Computed after mount so the static HTML never shows a stale open/closed status.
  const [open, setOpen] = useState(null);
  useEffect(() => {
    setOpen(isShopOpen());
    const t = setInterval(() => setOpen(isShopOpen()), 60000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* Hero on tailor's pattern paper, with an order slip */}
      <section className="relative overflow-hidden bg-[#fbf6ea] bg-[linear-gradient(rgba(197,138,32,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(197,138,32,.12)_1px,transparent_1px),linear-gradient(rgba(197,138,32,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(197,138,32,.06)_1px,transparent_1px)] bg-[length:60px_60px,60px_60px,12px_12px,12px_12px] pt-12 pb-16 leading-[normal] max-[900px]:pt-8 max-[900px]:pb-12">
        {/* Dotted cutting line with scissors */}
        <div aria-hidden="true" className="absolute top-6 right-0 left-0 flex items-center gap-2 px-[4%] text-maroon max-[900px]:hidden">
          <Scissors className="h-5 w-5 -rotate-90" />
          <span className="h-0 flex-1 border-t-2 border-dashed border-[rgba(125,23,27,.35)]" />
        </div>

        <div className="container grid grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-center gap-14 max-[900px]:grid-cols-1 max-[900px]:gap-10">
          <div>
            <span className="svc-eyebrow">Contact Us</span>
            <h1 className="mt-3 mb-4 font-serif text-[56px] leading-[1.02] font-bold text-navy max-[900px]:text-[42px] max-[560px]:text-[36px]">Naap Aapka,<br /><em className="text-maroon not-italic">Silai Hamari.</em></h1>
            <p className="mt-0 mb-7 max-w-[520px] text-[16px] leading-[1.7] text-muted">Fitting ho, fabric chunna ho ya poori team ki uniform — ek call kijiye ya seedhe dukaan par aaiye. {FOUNDED_YEAR} se Alwar ka bharosa.</p>
            <div className="flex flex-wrap gap-3">
              <a className="btn btn-primary" href={`tel:+${PHONE}`}><Phone size={18} /> {PHONE_DISPLAY}</a>
              <a className="btn btn-gold" href={MAPS_URL} target="_blank" rel="noreferrer"><Navigation size={18} /> Directions Lein</a>
            </div>
          </div>

          {/* Order slip */}
          <div className="relative mx-auto w-full max-w-[460px] -rotate-[1.5deg] max-[560px]:rotate-0">
            <span aria-hidden="true" className="absolute -top-3 left-1/2 z-10 h-6 w-24 -translate-x-1/2 rotate-2 bg-[rgba(228,182,76,.55)]" />
            <div className="relative bg-white px-8 pt-9 pb-7 max-[560px]:px-6">
              <div className="flex items-end justify-between border-b-2 border-maroon pb-3">
                <div>
                  <b className="block font-serif text-[28px] leading-none text-maroon">Naap Parchi</b>
                  <span className="text-[11px] font-bold tracking-[2px] text-muted uppercase">Gupta Tailors · Alwar</span>
                </div>
                <span className="font-serif text-[15px] font-bold text-gold">No. {FOUNDED_YEAR}</span>
              </div>
              <dl className="mt-5 mb-0 grid gap-3.5">
                {slipRows.map(([k, v]) => (
                  <div className="grid grid-cols-[76px_1fr] items-baseline gap-2" key={k}>
                    <dt className="text-[12px] font-bold tracking-[1px] text-gold uppercase">{k}</dt>
                    <dd className="m-0 border-b border-dotted border-[#cdb68a] pb-1 font-hand text-[21px] leading-[1.15] text-navy">{v}</dd>
                  </div>
                ))}
              </dl>
              {/* Rubber stamp */}
              <div aria-hidden="true" className="absolute right-5 bottom-5 grid h-[92px] w-[92px] rotate-[-14deg] place-items-center rounded-full border-[3px] border-[rgba(125,23,27,.55)] text-center text-[rgba(125,23,27,.6)] outline-1 outline-dashed -outline-offset-[7px] outline-[rgba(125,23,27,.4)] max-[560px]:h-[76px] max-[560px]:w-[76px]">
                <span className="text-[10px] font-extrabold leading-[1.15] tracking-[1px] uppercase">Since<br /><b className="font-serif text-[22px] leading-none">{FOUNDED_YEAR}</b><br />Alwar</span>
              </div>
            </div>
            <div aria-hidden="true" className={`h-4 bg-white ${PINKED_BOTTOM}`} />
          </div>
        </div>
      </section>

      <TapeMeasure />

      {/* Contact methods as fabric swatches */}
      <section className="section leading-[normal]">
        <div className="container">
          <div className="mx-auto mb-[34px] max-w-[760px] text-center">
            <span className={`inline-flex items-center gap-3.5 text-[12px] font-bold tracking-[2.5px] text-gold uppercase ${eyebrowLine}`}>Humse Judiye</span>
            <h2 className="mt-2.5 mb-0 font-serif text-[42px] leading-[1.1] font-bold text-maroon max-[560px]:text-[32px]">Aapse Baat Karke Khushi Hogi</h2>
          </div>

          <div className="relative mb-[42px] pt-2">
            {/* Wooden rail the tags hang from */}
            <div aria-hidden="true" className="relative z-10 mx-auto h-3.5 w-[96%] rounded-full bg-[linear-gradient(180deg,#b07a3c,#7a4d1d)] before:absolute before:-top-1 before:-left-1 before:h-5.5 before:w-5.5 before:rounded-full before:bg-[#6b4219] before:content-[''] after:absolute after:-top-1 after:-right-1 after:h-5.5 after:w-5.5 after:rounded-full after:bg-[#6b4219] after:content-[''] max-[900px]:hidden" />
            <div className="grid grid-cols-3 gap-[34px] px-[3%] max-[900px]:grid-cols-1 max-[900px]:gap-12 max-[900px]:px-0 max-[900px]:pt-6">
              {hangTags.map(({ icon: Icon, title, value, link, href, external, note, code, tilt, skin, sub, stitch, iconCls, btn }) => {
                const inner = (
                  <>
                    <span aria-hidden="true" className={`pointer-events-none absolute inset-3 top-[52px] border border-dashed ${stitch}`} />
                    <span aria-hidden="true" className="absolute top-[18px] left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-[#faf6ee] ring-4 ring-[rgba(228,182,76,.8)]" />
                    <div className="relative flex flex-1 flex-col items-center px-7 pt-[58px] pb-6 text-center">
                      <span className={`mb-3 grid h-12 w-12 place-items-center rounded-full ${iconCls} transition-transform duration-300 group-hover:rotate-[-8deg]`}><Icon className="h-5 w-5" /></span>
                      <h3 className="mt-0 mb-1.5 font-serif text-[25px] leading-[1.1] font-bold">{title}</h3>
                      <p className={`mt-0 mb-4 text-[14.5px] leading-[1.55] font-semibold ${sub}`}>{value}</p>
                      {link
                        ? <span className={`btn ${btn} mt-auto px-5 py-2.5 text-[14px]`}>{link} <ArrowRight size={16} /></span>
                        : <span className="mt-auto inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-[14px] font-bold text-gold2"><span className="h-2 w-2 rounded-full bg-[#3ecf7a]" />{note}</span>}
                      {/* barcode */}
                      <span aria-hidden="true" className="mt-4 flex flex-col items-center gap-0.5 opacity-70">
                        <span className="block h-5 w-28 bg-[repeating-linear-gradient(90deg,currentColor_0_2px,transparent_2px_4px,currentColor_4px_5px,transparent_5px_8px,currentColor_8px_11px,transparent_11px_13px)]" />
                        <span className="text-[10px] font-bold tracking-[3px]">{code}</span>
                      </span>
                    </div>
                  </>
                );
                const tag = `relative flex h-full flex-col [clip-path:polygon(22%_0,78%_0,100%_14%,100%_100%,0_100%,0_14%)] ${skin}`;
                return (
                  <div key={title} className={`group relative pt-10 max-[900px]:mx-auto max-[900px]:w-full max-[900px]:max-w-[330px] max-[900px]:pt-8 max-[900px]:rotate-0 ${tilt} origin-top transition-transform duration-500 ease-[cubic-bezier(.3,1.6,.5,1)] hover:rotate-0`}>
                    {/* string from rail to tag hole */}
                    <span aria-hidden="true" className="absolute top-[-14px] left-1/2 h-[92px] w-[2px] -translate-x-1/2 bg-[#8a6a3a] max-[900px]:top-0 max-[900px]:h-[74px]" />
                    <div className="h-full">
                      {href
                        ? <a className={tag} href={href} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>{inner}</a>
                        : <div className={tag}>{inner}</div>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] overflow-hidden rounded-[22px] border border-[#efe4cf] bg-white max-[900px]:grid-cols-1">
            <div className="group/map relative min-h-[330px] max-[900px]:min-h-[260px]">
              <iframe
                className="absolute inset-0 h-full w-full border-0 [filter:sepia(.35)_saturate(.85)_contrast(.95)] transition-[filter] duration-500 group-hover/map:[filter:none]"
                title="Gupta Tailors Location"
                src="https://www.google.com/maps?q=Tilak%20Market%2C%20Hanuman%20Burj%2C%20Kabir%20Colony%2C%20Alwar%2C%20Rajasthan&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="pointer-events-none absolute right-4 bottom-4 left-4 flex justify-start max-[560px]:right-3 max-[560px]:bottom-3 max-[560px]:left-3">
                <div className="pointer-events-auto flex items-center gap-3 rounded-[16px] border-l-4 border-gold bg-white py-3 pr-3 pl-4 max-[560px]:w-full">
                  <span className="grid h-11 w-11 flex-none place-items-center rounded-full bg-maroon text-gold2"><MapPin className="h-5 w-5" /></span>
                  <span className="min-w-0 leading-[1.3]">
                    <b className="block font-serif text-[20px] text-maroon">Gupta Tailors</b>
                    <span className="text-[12.5px] text-muted">Tilak Market, Hanuman Burj, Alwar</span>
                  </span>
                  <a className="btn btn-primary ml-2 flex-none px-3.5 py-2 text-[13px]" href={MAPS_URL} target="_blank" rel="noreferrer"><Navigation size={15} /> Raasta</a>
                </div>
              </div>
            </div>

            <div className="relative flex flex-col bg-[linear-gradient(150deg,#8a1c21,#5e1014)] text-white">
              {/* woven texture */}
              <span aria-hidden="true" className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,.035)_0_2px,transparent_2px_8px),repeating-linear-gradient(-45deg,rgba(0,0,0,.08)_0_2px,transparent_2px_8px)]" />
              {/* measuring tape edge */}
              <span aria-hidden="true" className="relative block h-3.5 bg-[linear-gradient(180deg,#f7d466,#e7b53a)] after:absolute after:inset-x-0 after:top-0 after:h-[55%] after:bg-[repeating-linear-gradient(90deg,#3a2a12_0_1px,transparent_1px_7px)] after:content-[]" />
              <div className="relative m-3 flex flex-1 flex-col justify-center rounded-[14px] border border-dashed border-[rgba(228,182,76,.45)] px-6 py-5 max-[560px]:px-5 max-[560px]:py-5">
                <Scissors aria-hidden="true" className="absolute top-3 right-3 h-12 w-12 rotate-[25deg] text-[rgba(228,182,76,.14)]" />
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <span className="text-[12px] font-bold tracking-[2.5px] text-gold2 uppercase">Since {FOUNDED_YEAR}</span>
                  {open !== null && (
                    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-bold ${open ? "bg-[rgba(62,207,122,.16)] text-[#7ee2a8]" : "bg-white/10 text-[#f1dcdc]"}`}>
                      <span className={`h-2 w-2 rounded-full ${open ? "animate-pulse bg-[#3ecf7a]" : "bg-[#f1dcdc]"}`} />{open ? "Abhi Khula Hai" : "Abhi Band Hai · Subah 9 Baje Khulega"}
                    </span>
                  )}
                </div>
                <h2 className="mt-0 mb-1.5 font-serif text-[30px] leading-[1.1] font-bold text-white max-[560px]:text-[26px]">Dukaan Par Kab Aayein?</h2>
                <p className="mt-0 mb-3 text-[14px] leading-[1.5] text-[#f1dcdc]">Bina appointment ke kabhi bhi aaiye — roz subah 9 se raat 10 baje tak.</p>
                <ul className="mt-0 mb-4 grid list-none grid-cols-2 gap-x-4 gap-y-2 p-0 max-[400px]:grid-cols-1">
                  {visitReasons.map(r => <li className="flex items-center gap-2 text-[14px] font-medium" key={r}><Scissors className="h-3.5 w-3.5 flex-none text-gold2" />{r}</li>)}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <a className="btn btn-gold px-5 py-2.5 text-[15px]" href={`tel:+${PHONE}`}><Phone size={17} /> {PHONE_DISPLAY}</a>
                  <a className="btn bg-white px-5 py-2.5 text-[15px] text-maroon" href={MAPS_URL} target="_blank" rel="noreferrer"><Navigation size={17} /> Directions</a>
                </div>
                <div className="mt-4 flex items-center justify-between gap-3 border-t border-[rgba(255,255,255,.15)] pt-3.5">
                  <span className="text-[12px] font-bold tracking-[1.5px] text-gold2 uppercase">Follow Karein</span>
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
