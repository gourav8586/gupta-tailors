"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Phone } from "lucide-react";
import { PHONE } from "../../lib/site";
import { PageHeader, SectionTitle } from "../../components/UI";
import Years from "../../components/Years";
import { services, tailoringChecklist } from "../../lib/data";
import Faq from "../../components/Faq";

const highlights = [
  { value: `${tailoringChecklist.length}+`, label: "Silai Services" },
  { value: <><Years />+</>, label: "Saal Ka Anubhav" },
  { value: "Perfect", label: "Fit Guarantee" },
];

export default function Services() {
  return (
    <>
      <PageHeader
        image="https://images.unsplash.com/photo-1602810319428-019690571b5b?auto=format&fit=crop&w=1800&q=80"
        crumb="Tailoring Services in Alwar"
      />

      <section className="section leading-[normal]">
        <div className="container grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-[50px] items-center max-[800px]:grid-cols-[1fr] max-[800px]:gap-7">
          <div className="rounded-2xl overflow-hidden aspect-[5/4] shadow-[0_20px_50px_rgba(28,36,48,.18)]">
            <img className="w-full h-full object-cover block" src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=80" alt="Naap se sila hua custom suit" />
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
                className="group bg-white rounded-2xl overflow-hidden border border-[#efe4cf] shadow-[0_12px_30px_rgba(28,36,48,.07)] [transition:transform_.45s_cubic-bezier(.2,.7,.2,1),box-shadow_.45s_ease,border-color_.45s_ease] hover:[transform:translateY(-6px)] hover:border-[#e6cf9f] hover:shadow-[0_22px_44px_rgba(125,23,27,.12)]"
                key={s.title}
                initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: .2 }} transition={{ duration: .5, delay: i * .08, ease: "easeOut" }}>
                <div className="relative aspect-[4/3.4] overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(180deg,transparent_60%,rgba(15,12,10,.35))]">
                  <img className="w-full h-full object-cover object-top block [transition:transform_.7s_ease] group-hover:[transform:scale(1.06)]" src={s.image} alt={s.title} loading="lazy" />
                  <span className="absolute left-4 top-4 z-[1] bg-white text-maroon text-[11px] font-extrabold tracking-[1.2px] py-1.5 px-3 rounded-[30px] shadow-[0_6px_14px_rgba(0,0,0,.15)]">{s.tag}</span>
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

      <Faq />
    </>
  );
}
