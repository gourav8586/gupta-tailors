"use client";

import { motion } from "framer-motion";
import { CalendarClock, CheckCircle2, Palette, Phone, Ruler, Scissors, Shirt, Sparkles } from "lucide-react";
import { PHONE, PHONE_DISPLAY } from "../../lib/site";
import { PageHeader, SectionTitle } from "../../components/UI";
import Years from "../../components/Years";
import { services, tailoringChecklist } from "../../lib/data";

const highlights = [
  { value: `${tailoringChecklist.length}+`, label: "Silai Services" },
  { value: <><Years />+</>, label: "Saal Ka Anubhav" },
  { value: "Perfect", label: "Fit Guarantee" },
];

const benefits = [
  { icon: Ruler, title: "Haath Se Sateek Naap", text: "Anubhavi kaarigar khud naap lete hain aur aapka naap save rehta hai, taaki agli baar sirf call karke order de sakein." },
  { icon: Scissors, title: "Trial Ke Baad Finishing", text: "Pehle trial stitch, phir fitting check. Jab tak kapda bilkul sahi na baithe, final finishing nahi hoti." },
  { icon: Palette, title: "Apna Fabric Laayein", text: "Apna kapda laayein ya hamari dukaan ki curated fabric range mein se chunein, dono ki silai ek jaisi dhyan se." },
  { icon: CalendarClock, title: "Time Par Delivery", text: "Order lete waqt delivery ki date bata dete hain, aur shaadi-function ke orders ki planning pehle se karte hain." },
];

const stitchSteps = [
  { icon: Phone, title: "Call Ya Visit", text: "Humein call karein ya seedhe Tilak Market, Alwar ki dukaan par aayein." },
  { icon: Ruler, title: "Naap Aur Design", text: "Sateek naap ke saath fabric, style aur mauke par baat karke design final karte hain." },
  { icon: Shirt, title: "Trial & Fitting", text: "Trial par fitting check karke har chhoti kami wahin theek karte hain." },
  { icon: Sparkles, title: "Final Delivery", text: "Pressing aur quality check ke baad bataye gaye din par aapka kapda taiyaar." },
];

export default function Services() {
  return (
    <>
      <PageHeader
        image="/img/1602810319428-019690571b5b-w1800.jpg"
        crumb="Tailoring Services in Alwar"
      />

      <section className="section leading-[normal]">
        <div className="container grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-[50px] items-center max-[800px]:grid-cols-[1fr] max-[800px]:gap-7">
          <div className="rounded-2xl overflow-hidden aspect-[5/4]">
            <img className="w-full h-full object-cover object-top block" src="/img/services/tailor-shop-cuff-fitting.jpg" alt="Gupta Tailors, Alwar ki dukaan mein custom shirt ki fitting" />
          </div>
          <div>
            <span className="svc-eyebrow leading-[normal]">Custom Tailoring</span>
            <h2 className="font-serif text-[44px] leading-[1.05] font-bold text-maroon mt-2 mb-3 max-[800px]:text-[36px]">Tailoring Services</h2>
            <p className="mb-4 text-muted leading-[1.7]">Shirt se lekar shaadi ke kapdon tak — har kapda aapke naap aur pasand se silta hai.</p>
            <ul className="list-none p-0 mb-5 grid gap-2 [&_li]:flex [&_li]:items-center [&_li]:gap-2.5 [&_li]:font-semibold [&_li]:text-ink [&_li]:text-[14.5px] [&_svg]:flex-none [&_svg]:w-[19px] [&_svg]:h-[19px] [&_svg]:text-gold">
              <li><CheckCircle2 /> Haath se liya gaya sateek naap, perfect fitting</li>
              <li><CheckCircle2 /> Aapki pasand ka design, cut aur style</li>
              <li><CheckCircle2 /> Trial ke baad hi final finishing</li>
            </ul>
            <div className="grid grid-cols-[repeat(3,1fr)] gap-3 mb-[22px]">
              {highlights.map(h => (
                <div className="bg-[#fbf3e4] border border-[#efe1c4] rounded-xl py-3 px-3.5 text-center" key={h.label}>
                  <b className="block font-serif text-[28px] leading-[1.1] text-maroon max-[520px]:text-[22px]">{h.value}</b>
                  <span className="text-[12px] font-bold text-muted uppercase tracking-[.5px]">{h.label}</span>
                </div>
              ))}
            </div>
            <a className="btn btn-primary" href={`tel:+${PHONE}`}><Phone size={18} /> Abhi Call Karein</a>
          </div>
        </div>
      </section>

      <section className="section soft leading-[normal]">
        <div className="container">
          <SectionTitle eyebrow="Popular Services" title="Hamari Sabhi Tailoring Services" text="Aapke naap, pasand aur mauke ke hisaab se — har kapda haath ki kaarigari se." />
          <div className="grid grid-cols-[repeat(3,1fr)] gap-6 max-[1000px]:grid-cols-[repeat(2,1fr)] max-[600px]:grid-cols-[1fr]">
            {services.map((s, i) => (
              <motion.article
                className="group bg-white rounded-2xl overflow-hidden border border-[#efe4cf] [transition:transform_.45s_cubic-bezier(.2,.7,.2,1),border-color_.45s_ease] hover:[transform:translateY(-6px)] hover:border-[#e6cf9f]"
                key={s.title}
                initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: .2 }} transition={{ duration: .5, delay: i * .08, ease: "easeOut" }}>
                <div className="relative aspect-[4/3.4] overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(180deg,transparent_60%,rgba(15,12,10,.35))]">
                  <img className={`w-full h-full object-cover ${s.position || "object-top"} block [transition:transform_.7s_ease] group-hover:[transform:scale(1.06)]`} src={s.image} alt={s.title} loading="lazy" />
                  <span className="absolute left-4 top-4 z-[1] bg-white text-maroon text-[11px] font-extrabold tracking-[1.2px] py-1.5 px-3 rounded-[30px]">{s.tag}</span>
                  <span className="absolute right-4 bottom-2.5 z-[1] font-serif text-[44px] font-bold leading-none text-[rgba(255,255,255,.85)]">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="pt-[22px] px-6 pb-6">
                  <h3 className="font-serif text-[27px] leading-[1.1] font-bold text-maroon mb-2">{s.title}</h3>
                  <p className="mb-[18px] text-muted text-[14.5px] leading-[1.6]">{s.text}</p>
                  <a className="inline-flex items-center gap-2 py-2.5 px-4 rounded-lg bg-[#fbf1de] text-maroon text-[14px] font-bold [transition:background_.3s,color_.3s] group-hover:bg-maroon group-hover:text-white hover:bg-maroon hover:text-white" href={`tel:+${PHONE}`}><Phone size={15} /> Call Karke Poochein</a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1c2430] text-white py-11 leading-[normal]">
        <div className="container">
          <div className="text-center mb-7">
            <span className="svc-eyebrow leading-[normal] text-gold2 before:bg-gold2">Silai Kaise Hoti Hai</span>
            <h2 className="font-serif text-[40px] font-bold mt-2 max-[560px]:text-[32px]">4 Aasaan Steps Mein Perfect Fit</h2>
          </div>
          <ol className="list-none m-0 p-0 grid grid-cols-[repeat(4,1fr)] gap-[18px] max-[1000px]:grid-cols-[1fr_1fr] max-[520px]:grid-cols-[1fr]">
            {stitchSteps.map(({ icon: Icon, title, text }, i) => (
              <li className="relative bg-[rgba(255,255,255,.05)] border border-[rgba(255,255,255,.1)] rounded-[14px] py-6 px-[22px]" key={title}>
                <i className="absolute right-[18px] top-3 not-italic font-serif text-[44px] font-bold text-[rgba(228,182,76,.25)]">{String(i + 1).padStart(2, "0")}</i>
                <span className="w-12 h-12 rounded-full grid place-items-center bg-maroon text-white mb-3.5 [&_svg]:w-[22px] [&_svg]:h-[22px]"><Icon /></span>
                <h3 className="font-serif text-[23px] font-bold mb-1.5 text-white">{title}</h3>
                <p className="text-[#b9c1d1] text-[14px] leading-[1.6]">{text}</p>
              </li>
            ))}
          </ol>
          <div className="text-center mt-[26px]">
            <a className="btn btn-gold" href={`tel:+${PHONE}`}><Phone size={18} /> Abhi Call Karein {PHONE_DISPLAY}</a>
          </div>
        </div>
      </section>

      <section className="section leading-[normal]">
        <div className="container">
          <SectionTitle eyebrow="Humein Hi Kyun Chunein" title="Aapke Naap Se, Aapki Pasand Se" />
          <div className="grid grid-cols-[repeat(4,1fr)] gap-[18px] max-[1000px]:grid-cols-[1fr_1fr] max-[520px]:grid-cols-[1fr]">
            {benefits.map(({ icon: Icon, title, text }) => (
              <div className="bg-white rounded-[14px] py-[26px] px-[22px] border-t-[3px] border-maroon [transition:transform_.25s] hover:[transform:translateY(-4px)]" key={title}>
                <span className="w-[52px] h-[52px] rounded-xl grid place-items-center bg-[#fbf3e4] text-maroon mb-3.5 [&_svg]:w-6 [&_svg]:h-6"><Icon /></span>
                <h3 className="font-serif text-[23px] leading-[1.15] font-bold text-maroon mb-2">{title}</h3>
                <p className="text-muted text-[14px] leading-[1.6]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
