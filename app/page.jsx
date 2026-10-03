"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, CheckCircle2, PhoneCall, Scissors, Shirt
} from "lucide-react";
import { faqs, statsBand, tailoringCategories, tailoringChecklist, uniformCategories, uniformChecklist } from "../lib/data";
import { PHONE, PHONE_DISPLAY } from "../lib/site";
import { CategorySection, PremiumServiceCard, SectionTitle } from "../components/UI";
import { InstagramFeed } from "../components/Instagram";
import Faq from "../components/Faq";
import HeroVideo from "../components/HeroVideo";
import Years from "../components/Years";
import AboutTeaser from "../components/AboutTeaser";
import ProcessSteps from "../components/ProcessSteps";
import WhySection from "../components/WhySection";
import JsonLd from "../components/JsonLd";
import { faqJsonLd } from "../lib/seo";

export default function Home() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <section className="relative flex min-h-[calc(100svh-114px)] items-center overflow-hidden bg-navy leading-[normal] text-white max-[900px]:min-h-[45svh]">
        <h1 className="sr-only">Gupta Tailors — Alwar Ke Bharosemand Tailor, 1979 Se. Custom Tailoring Aur Uniform Stitching.</h1>
        <HeroVideo />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,31,69,.35)_0%,rgba(16,31,69,.15)_50%,rgba(16,31,69,0)_100%)] max-[900px]:bg-[rgba(16,31,69,.2)]" />
        <div className="container relative z-[2] py-[44px]">
          <motion.div className="max-w-[920px]" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
            {/* <div className="eyebrow light">SINCE 1979 · PARAMPARA AUR STYLE KA SANGAM</div> */}
            {/* <h1>Perfect Fit Ke Liye<br/><em>Aapka Bharosemand Tailor</em></h1> */}
            {/* <p>1979 se Alwar mein custom tailoring, behtareen fabric aur uniform stitching — har kapde mein aapka style, comfort aur ek personal touch.</p> */}
            {/* <ul className="hero-points">
              <li><CheckCircle2/> Expert Custom Tailoring Services</li>
              <li><CheckCircle2/> Har Kapde Mein Perfect Fit Ki Guarantee</li>
              <li><CheckCircle2/> Premium Quality Fabric Available</li>
            </ul> */}
            <div className="mt-8 flex flex-wrap items-center gap-[26px]">
              {/* <Link className="btn gold" href="/contact">
                Contact Karein <ArrowRight size={18}/>
              </Link> */}
              {/* <a className="hero-call" href={`tel:+${PHONE}`}>
                <span className="hero-call-icon"><PhoneCall/></span>
                <span><small>Abhi Call Karein</small><b>{PHONE_DISPLAY}</b></span>
              </a> */}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-[1] bg-[#f7f4ee] pt-[22px] pb-2 leading-[normal]">
        <div className="container grid grid-cols-5 gap-5 max-[980px]:gap-x-0 max-[980px]:gap-y-[14px] max-[900px]:relative max-[900px]:grid-cols-2 max-[900px]:before:absolute max-[900px]:before:inset-y-0 max-[900px]:before:left-1/2 max-[900px]:before:w-px max-[900px]:before:bg-[#ecdfc8] max-[900px]:before:content-['']">
          {statsBand.map(s => (
            <div key={s.label} className="border-r border-r-[#ecdfc8] text-center text-ink last:border-0 max-[980px]:border-r-0 max-[980px]:border-b max-[980px]:border-b-[rgba(255,255,255,.14)] max-[980px]:pb-3 max-[980px]:last:border-b-0 max-[900px]:border-b-[#ecdfc8] max-[900px]:nth-3:hidden max-[900px]:nth-4:border-b-0 max-[900px]:nth-5:border-b-0"><b className="block font-serif text-[34px] leading-none text-maroon">{s.value === "years" ? <><Years/>+</> : s.value}</b><span className="mt-1 block text-[12px] font-semibold tracking-[.5px] text-[#5b6272]">{s.label}</span></div>
          ))}
        </div>
      </section>

      <CategorySection
        className="pt-4 min-[901px]:pt-8"
        title="Hamari Silai Services"
        text="Apna signature style chunein — har kapda aapke naap se silta hai."
        items={tailoringCategories}
        href="/services"
      />

      <CategorySection
        title="Uniform Ki Silai"
        text="School, hotel, hospital ya office — har team ke liye perfect fit uniform."
        items={uniformCategories}
        href="/uniforms"
        soft
      />

      <WhySection />

      <section className="section bg-white leading-[normal]">
        <div className="container">
          <SectionTitle className="max-w-none!" eyebrow="Poori Service List" title="Hamari Sabhi Services Ek Nazar Mein" text="Tailoring ho ya uniform — har service ki poori list yahan dekhein." />
          <div className="grid grid-cols-2 items-stretch gap-[30px] max-[760px]:grid-cols-1">
            <PremiumServiceCard icon={Scissors} title="Tailoring Services" items={tailoringChecklist} />
            <PremiumServiceCard icon={Shirt} title="Uniform Stitching Services" items={uniformChecklist} />
          </div>
        </div>
      </section>

      <ProcessSteps />

      <AboutTeaser />

      <Faq />

      <section className="section leading-[normal]">
        <div className="container">
          <SectionTitle className="max-[560px]:[&_h2]:text-[30px]" eyebrow="Social Media" title="Instagram Par Humein Follow Karein" text="Latest kaam, naye designs aur store ki jhalkiyan — sab kuch @gupta.tailors par." />
          <InstagramFeed />
        </div>
      </section>
    </>
  );
}
