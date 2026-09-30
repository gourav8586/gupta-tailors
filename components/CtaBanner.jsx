import { Phone } from "lucide-react";
import { PHONE, PHONE_DISPLAY } from "../lib/site";

export default function CtaBanner() {
  return (
    <section className="text-white [background:linear-gradient(90deg,rgba(20,14,12,.94)_0%,rgba(20,14,12,.8)_45%,rgba(20,14,12,.35)_100%),url(https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=1600&q=80)_center/cover]">
      <div className="container">
        <div className="flex items-center justify-between gap-6 py-[34px] max-[701px]:flex-col max-[701px]:items-start max-[701px]:py-7">
          <div>
            <h2 className="mb-[6px] font-serif text-[40px] font-bold leading-[1.1] max-[701px]:text-[32px]">Ready for Your Perfect Fit?</h2>
            <p className="text-[#e9e1dc]">Aaj hi call karein aur behtareen tailoring ka anubhav lein.</p>
          </div>
          <a className="inline-flex flex-none items-center gap-[10px] rounded-[6px] bg-maroon px-[26px] py-[14px] font-bold text-white shadow-[0_8px_20px_rgba(0,0,0,.3)] [transition:.25s] hover:-translate-y-0.5 hover:bg-[#951d22]" href={`tel:+${PHONE}`}><Phone size={18} /> Call Karein {PHONE_DISPLAY}</a>
        </div>
      </div>
    </section>
  );
}
