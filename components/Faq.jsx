import { Clock, MapPin, Phone, Plus } from "lucide-react";
import { faqs } from "../lib/data";
import { ADDRESS, MAPS_URL, PHONE, PHONE_DISPLAY } from "../lib/site";
import SocialLinks from "./Social";

const CONTACT_LI = "flex items-start gap-[14px] text-[14px] leading-[1.55] text-[#d7dce6]";
const CONTACT_ICON = "grid h-10 w-10 flex-none place-items-center rounded-full bg-[rgba(228,182,76,.14)] text-gold2 [&>svg]:h-[18px] [&>svg]:w-[18px]";
const CONTACT_LABEL = "mb-[2px] block text-[13px] text-white";
const CONTACT_LINK = "text-[#d7dce6] hover:text-gold2";

export default function Faq() {
  return (
    <section className="section soft">
      <div className="container grid grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-start gap-10 max-[901px]:grid-cols-[1fr] max-[901px]:gap-7">
        <aside className="sticky top-[110px] rounded-[14px] bg-[#1c2430] px-8 py-9 text-white max-[901px]:static max-[901px]:px-6 max-[901px]:py-[30px]">
          <span className="text-[11px] font-bold tracking-[4px] text-gold2">FAQs</span>
          <h2 className="mt-[10px] mb-3 font-serif text-[40px] font-bold leading-[1.05] max-[901px]:text-[34px]">Aksar Pooche Jaane Wale Sawaal</h2>
          <p className="mb-[26px] leading-[1.6] text-[#b9c1d1] max-[761px]:mb-0">Koi aur sawaal ho to seedhe humein call karein ya dukaan par aayein.</p>

          <ul className="mb-[26px] grid gap-[18px] max-[761px]:hidden">
            <li className={CONTACT_LI}><span className={CONTACT_ICON}><MapPin /></span><div><b className={CONTACT_LABEL}>Address</b><a className={CONTACT_LINK} href={MAPS_URL} target="_blank" rel="noreferrer">{ADDRESS}</a></div></li>
            <li className={CONTACT_LI}><span className={CONTACT_ICON}><Phone /></span><div><b className={CONTACT_LABEL}>Phone</b><a className={CONTACT_LINK} href={`tel:+${PHONE}`}>{PHONE_DISPLAY}</a></div></li>
            <li className={CONTACT_LI}><span className={CONTACT_ICON}><Clock /></span><div><b className={CONTACT_LABEL}>Timing</b>Mon – Sun ( 9 AM – 10 PM )</div></li>
          </ul>

          <div className="border-t border-[rgba(255,255,255,.12)] pt-[22px] max-[761px]:hidden">
            <b className="mb-3 block text-[13px]">Follow Karein</b>
            <SocialLinks brand />
          </div>
        </aside>

        <div className="grid gap-[14px]">
          {faqs.map(({ q, a }, i) => (
            <details className="group rounded-[10px] border border-l-[3px] border-line border-l-transparent bg-white [transition:border-color_.25s] open:border-l-maroon" key={q} name="faq" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center gap-4 px-[22px] py-5 font-bold text-ink group-open:text-maroon max-[701px]:gap-3 max-[701px]:px-[18px] max-[701px]:py-4 [&::-webkit-details-marker]:hidden">
                <i className="flex-none font-serif text-[22px] not-italic text-gold">{String(i + 1).padStart(2, "0")}</i>
                <span className="flex-1">{q}</span>
                <Plus size={20} className="h-8 w-8 flex-none rounded-full bg-[#f4efe6] p-1.5 text-maroon [transition:transform_.25s,background_.25s,color_.25s] group-open:bg-maroon group-open:text-white group-open:[transform:rotate(45deg)]" />
              </summary>
              <p className="m-0 pt-0 pr-[22px] pb-5 pl-[60px] leading-[1.7] text-muted max-[701px]:pr-[18px] max-[701px]:pb-4 max-[701px]:pl-[18px]">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
