import { Phone } from "lucide-react";
import { PHONE, PHONE_DISPLAY } from "../lib/site";

export default function CallFloat() {
  return (
    <a className="fixed right-[22px] bottom-[22px] z-60 grid h-[58px] w-[58px] place-items-center rounded-full bg-[linear-gradient(135deg,var(--color-maroon),var(--color-maroon2))] text-white shadow-[0_10px_30px_rgba(125,23,27,.35)] [transition:.25s] before:absolute before:inset-0 before:rounded-full before:border-2 before:border-gold2 before:content-[''] before:animate-[ctaPulse_2s_ease-out_infinite] hover:[transform:translateY(-3px)_scale(1.05)] motion-reduce:before:animate-none max-[761px]:right-[14px] max-[761px]:bottom-[14px] max-[761px]:h-[52px] max-[761px]:w-[52px] [&_svg]:w-[25px]" href={`tel:+${PHONE}`} aria-label={`Call karein ${PHONE_DISPLAY}`}>
      <Phone />
    </a>
  );
}
