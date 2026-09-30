"use client";

import { motion } from "framer-motion";
import { Gem, HandHeart, Ruler, ShieldCheck } from "lucide-react";
import Years from "./Years";

const whyUs = [
  { icon: Ruler, title: "Sateek Naap", text: "Haath se liya gaya naap har baar save hota hai, taaki aapki agli silai bhi utni hi perfect ho." },
  { icon: Gem, title: "Behtareen Fabric", text: "Durability, fall aur finish ke liye chuni gayi curated fabric range." },
  { icon: ShieldCheck, title: <><Years/>+ Saal Ka Bharosa</>, text: "Alwar ki teen peedhiyan hamari tailoring par bharosa karti hain." },
  { icon: HandHeart, title: "Personal Service", text: "Har customer se seedhi baat, kisi counter ke zariye nahi." }
];

export default function WhySection() {
  return (
    <section className="section bg-[#faf6ee] leading-[normal]">
      <div className="container grid grid-cols-[minmax(0,5fr)_minmax(0,6fr)] items-center gap-11 max-[900px]:grid-cols-1">
        <motion.div className="relative aspect-[4/3.5] overflow-hidden rounded-[18px] shadow-[0_24px_50px_rgba(28,36,48,.16)]"
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: .3 }} transition={{ duration: .7, ease: "easeOut" }}>
          <img className="block h-full w-full object-cover" src="https://images.unsplash.com/photo-1752946253686-a15088ab0b8f?auto=format&fit=crop&w=900&q=80" alt="Gupta Tailors ke kaarigar silai machine par kaam karte hue" loading="lazy" />
          <div className="absolute right-[18px] bottom-[18px] flex items-center gap-2.5 rounded-[14px] bg-white px-3.5 py-2.5 shadow-[0_12px_28px_rgba(0,0,0,.18)]"><b className="font-serif text-[32px] leading-none text-maroon"><Years/>+</b><span className="text-xs leading-[1.3] font-bold tracking-[.5px] text-ink uppercase">Saal Ka<br/>Bharosa</span></div>
        </motion.div>

        <div>
          <span className="svc-eyebrow">Kyun Gupta Tailors</span>
          <h2 className="my-1.5 font-serif text-[40px] font-bold leading-[1.05] text-maroon">Bharosemand Kaarigari</h2>
          <p className="mt-0 mb-3 leading-[1.7] text-muted"><Years/>+ saal ka experience, personal attention aur quality par koi compromise nahi.</p>
          <ul className="m-0 grid list-none gap-0.5 p-0">
            {whyUs.map(({ icon: Icon, title, text }, i) => (
              <motion.li key={i} className="group flex items-start gap-3.5 rounded-xl border border-transparent px-3.5 py-[9px] transition-[background,border-color,transform] duration-[400ms] ease-[ease] hover:border-[#efe1c4] hover:bg-white hover:shadow-[0_10px_26px_rgba(125,23,27,.07)]"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: .4 }} transition={{ duration: .5, delay: i * .1, ease: "easeOut" }}>
                <span className="grid h-[42px] w-[42px] flex-none place-items-center rounded-full border border-[#ecd7ae] bg-[#fbf1de] text-maroon transition-[background,color,transform,scale] duration-[400ms] ease-[ease] group-hover:scale-[1.06] group-hover:border-maroon group-hover:bg-maroon group-hover:text-white [&>svg]:h-5 [&>svg]:w-5"><Icon/></span>
                <div>
                  <h3 className="m-0 mb-0.5 font-serif text-[21px] font-bold text-maroon">{title}</h3>
                  <p className="m-0 text-sm leading-[1.5] text-muted">{text}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
