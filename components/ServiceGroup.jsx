import {
  BookOpen, Briefcase, Building2, ChefHat, Crown, Factory, GraduationCap, Hospital, Hotel, House,
  PencilRuler, Phone, Ruler, School, Scissors, ShieldCheck, Shirt, SprayCan, Tag, Wrench
} from "lucide-react";
import { PHONE } from "../lib/site";

// Icon per service name; anything not listed falls back to scissors.
const ICONS = {
  "Pant Ki Silai": Ruler,
  "Shirt Ki Silai": Shirt,
  "Kurta-Pajama Ki Silai": Shirt,
  "Safari Suit Ki Silai": Briefcase,
  "Pathani Suit Ki Silai": Tag,
  "Shaadi Ke Kapdon Ki Silai": Crown,
  "Custom Silai": Scissors,
  "Ghar Par Naap Lene Ki Suvidha": House,
  "Alteration Aur Fitting": PencilRuler,
  "Suit Ki Marammat": Wrench,
  "Corporate Uniform Ki Silai": Briefcase,
  "Hotel Uniform Ki Silai": Hotel,
  "School Uniform Ki Silai": School,
  "Security Uniform Ki Silai": ShieldCheck,
  "Hostel Staff Uniform Ki Silai": Building2,
  "Hospital Uniform Ki Silai": Hospital,
  "Factory Uniform Ki Silai": Factory,
  "Restaurant Uniform Ki Silai": ChefHat,
  "Housekeeping Uniform Ki Silai": SprayCan,
  "College Uniform Ki Silai": GraduationCap,
  "Coaching Institute Uniform Ki Silai": BookOpen,
};

// "Hotel Uniform Ki Silai" -> "Hotel Uniform".
const shortName = name => name.replace(/\s+Ki Silai$/, "");

export function ServiceTiles({ items }) {
  return (
    <ul className="list-none p-0 mb-[26px] grid grid-cols-[repeat(3,minmax(0,1fr))] gap-3 max-[1100px]:grid-cols-[repeat(2,minmax(0,1fr))] max-[480px]:grid-cols-[1fr]">
      {items.map(name => {
        const Icon = ICONS[name] || Scissors;
        return (
          <li className="group flex items-center gap-3 p-3.5 bg-white border border-[#eee4d2] rounded-xl [transition:transform_.2s,border-color_.2s,box-shadow_.2s] hover:[transform:translateY(-3px)] hover:border-gold hover:shadow-[0_12px_26px_rgba(125,23,27,.1)]" key={name}>
            <span className="flex-none w-10 h-10 rounded-[10px] grid place-items-center bg-[#fbf3e4] text-maroon [transition:background_.2s,color_.2s] group-hover:bg-maroon group-hover:text-white [&_svg]:w-5 [&_svg]:h-5"><Icon /></span>
            <span className="min-w-0 text-[14px] font-bold leading-[1.3] text-ink [overflow-wrap:anywhere]">{shortName(name)}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default function ServiceGroup({ eyebrow, title, text, image, items, reverse }) {
  return (
    <div className={`grid gap-12 items-center leading-[normal] max-[900px]:grid-cols-[1fr] max-[900px]:gap-7 ${reverse ? "grid-cols-[minmax(0,7fr)_minmax(0,5fr)]" : "grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"}`}>
      <div className={`relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(28,36,48,.18)] aspect-[4/5] w-full after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(180deg,transparent_55%,rgba(28,36,48,.55))] max-[900px]:aspect-[16/10] ${reverse ? "order-2 max-[900px]:order-0" : ""}`}>
        <img className="w-full h-full object-cover block" src={image} alt={title} loading="lazy" />
        <div className="absolute left-5 bottom-5 z-[1] bg-maroon text-white rounded-xl py-3 px-[18px] flex items-baseline gap-2 shadow-[0_10px_24px_rgba(0,0,0,.25)]">
          <b className="font-serif text-[34px] leading-none text-gold2">{items.length}+</b>
          <span className="text-[13px] font-bold tracking-[1px] uppercase">Services</span>
        </div>
      </div>

      <div>
        <span className="svc-eyebrow leading-[normal]">{eyebrow}</span>
        <h2 className="font-serif text-[44px] leading-[1.05] font-bold text-maroon mt-2 mb-2.5 max-[900px]:text-[36px]">{title}</h2>
        <p className="mb-6 text-muted leading-[1.7] max-w-[560px]">{text}</p>

        <ServiceTiles items={items} />

        <a className="btn btn-primary" href={`tel:+${PHONE}`}><Phone size={17} /> Call Karke Poochein</a>
      </div>
    </div>
  );
}
