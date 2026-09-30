"use client";

import { ArrowRight, CheckCircle2, Clock, MapPin, Navigation, Phone } from "lucide-react";
import SocialLinks from "../../components/Social";
import { ADDRESS, FOUNDED_YEAR, MAPS_URL, PHONE, PHONE_DISPLAY } from "../../lib/site";
import Faq from "../../components/Faq";

const quickCards = [
  { icon: Phone, title: "Call Karein", value: PHONE_DISPLAY, link: "Abhi Call Karein", href: `tel:+${PHONE}` },
  { icon: MapPin, title: "Dukaan Ka Pata", value: ADDRESS, link: "Directions Lein", href: MAPS_URL, external: true },
  { icon: Clock, title: "Timing", value: "Mon – Sun ( 9 AM – 10 PM )", note: "Hafte ke saaton din khula" }
];

const visitReasons = [
  "Naap (measurement) dene ke liye",
  "Fabric aur design dekhne ke liye",
  "School, office ya hotel uniform ka bulk order",
  "Trial, fitting ya alteration ke liye"
];

const cardClass = "relative flex flex-col items-center overflow-hidden rounded-[18px] border border-[#efe4cf] bg-white px-6 pt-[30px] pb-[26px] text-center shadow-[0_16px_40px_rgba(94,16,20,.07)] transition-[background-color,border-color] duration-300 ease-[ease] hover:border-[#e6cf9f] hover:bg-[#fbf5ea] before:absolute before:top-0 before:right-0 before:left-0 before:h-[3px] before:bg-[linear-gradient(90deg,var(--color-gold),var(--color-gold2),var(--color-gold))] before:content-['']";
const cardFoot = "mt-auto inline-flex items-center gap-1.5 text-[14px]";
const eyebrowLine = "before:h-px before:w-10 before:bg-gold before:content-[''] after:h-px after:w-10 after:bg-gold after:content-['']";

export default function Contact() {
  return (
    <>

      <section className="section leading-[normal]">
        <div className="container">
          <div className="mx-auto mb-[34px] max-w-[760px] text-center">
            <span className={`inline-flex items-center gap-3.5 text-[12px] font-bold tracking-[2.5px] text-gold uppercase ${eyebrowLine}`}>Contact Us</span>
            <h1 className="mt-2.5 mb-3 font-serif text-[50px] leading-[1.08] font-bold text-navy max-[900px]:text-[38px] max-[560px]:text-[32px]">Aapse Baat Karke <em className="text-maroon not-italic">Khushi Hogi</em></h1>
            <p className="m-0 text-[16px] leading-[1.7] text-muted">Dukaan par aayein ya seedhe call karke humse baat karein — {FOUNDED_YEAR} se Alwar mein aapki seva mein.</p>
          </div>

          <div className="mb-[34px] grid grid-cols-3 gap-[22px] max-[900px]:grid-cols-1 max-[900px]:gap-4">
            {quickCards.map(({ icon: Icon, title, value, link, href, external, note }) => {
              const body = (
                <>
                  <span className="mb-4 grid h-[62px] w-[62px] place-items-center rounded-full bg-[linear-gradient(150deg,var(--color-maroon),var(--color-maroon2))] text-gold2 shadow-[0_0_0_6px_rgba(228,182,76,.22)]"><Icon className="h-[26px] w-[26px]" /></span>
                  <h3 className="mt-0 mb-1.5 font-serif text-[26px] font-bold text-navy">{title}</h3>
                  <p className="mt-0 mb-4 text-[15px] leading-[1.55] font-semibold text-ink">{value}</p>
                  {link ? <span className={`${cardFoot} font-bold text-maroon`}>{link} <ArrowRight size={16} /></span> : <span className={`${cardFoot} font-semibold text-gold`}>{note}</span>}
                </>
              );
              return href
                ? <a key={title} className={cardClass} href={href} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>{body}</a>
                : <div key={title} className={cardClass}>{body}</div>;
            })}
          </div>

          <div className="grid grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] items-stretch gap-[26px] max-[900px]:grid-cols-1">
            <div className="relative min-h-[480px] overflow-hidden rounded-[18px] shadow-[0_20px_44px_rgba(28,36,48,.14)] max-[900px]:min-h-[340px]">
              <iframe
                className="absolute inset-0 h-full w-full border-0"
                title="Gupta Tailors Location"
                src="https://www.google.com/maps?q=Tilak%20Market%2C%20Hanuman%20Burj%2C%20Kabir%20Colony%2C%20Alwar%2C%20Rajasthan&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-[18px] left-[18px] max-w-[320px] rounded-[14px] border-l-4 border-gold bg-white px-[18px] py-4 shadow-[0_14px_34px_rgba(0,0,0,.18)] max-[560px]:right-3 max-[560px]:bottom-3 max-[560px]:left-3 max-[560px]:max-w-none">
                <b className="block font-serif text-[22px] leading-[1.1] text-maroon">Gupta Tailors</b>
                <span className="mt-1 mb-2.5 block text-[13px] leading-[1.5] text-muted">{ADDRESS}</span>
                <a className="inline-flex items-center gap-1.5 text-[13px] font-bold text-maroon" href={MAPS_URL} target="_blank" rel="noreferrer"><Navigation size={15} /> Directions Lein</a>
              </div>
            </div>

            <div className="relative flex flex-col overflow-hidden rounded-[18px] bg-[linear-gradient(150deg,var(--color-maroon),var(--color-maroon2))] px-8 py-[34px] text-white max-[560px]:px-[22px] max-[560px]:py-[26px] after:absolute after:top-[-60px] after:right-[-60px] after:h-[200px] after:w-[200px] after:rounded-full after:border after:border-[rgba(228,182,76,.25)] after:content-['']">
              <span className="text-[12px] font-bold tracking-[2.5px] text-gold2 uppercase">Since {FOUNDED_YEAR}</span>
              <h2 className="mt-2 mb-2.5 font-serif text-[36px] leading-[1.1] font-bold text-white max-[560px]:text-[30px]">Dukaan Par Kab Aayein?</h2>
              <p className="mt-0 mb-[18px] text-[15px] leading-[1.65] text-[#f1dcdc]">Bina appointment ke kabhi bhi aa sakte hain. Pehle call kar lenge toh hum aapke liye taiyaar rahenge.</p>
              <ul className="mt-0 mb-6 grid list-none gap-3 p-0">
                {visitReasons.map(r => <li className="flex items-center gap-2.5 text-[15px] font-medium" key={r}><CheckCircle2 className="h-[19px] w-[19px] flex-none text-gold2" />{r}</li>)}
              </ul>
              <div className="mb-[22px]">
                <a className="btn btn-gold w-full text-[17px]" href={`tel:+${PHONE}`}><Phone size={18} /> {PHONE_DISPLAY}</a>
              </div>
              <div className="mt-auto flex items-center justify-between gap-3 border-t border-[rgba(255,255,255,.15)] pt-[22px]">
                <span className="text-[13px] font-bold tracking-[1.5px] text-gold2 uppercase">Follow Karein</span>
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Faq />
    </>
  );
}
