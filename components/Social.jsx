import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SOCIALS } from "../lib/site";

const INSTA_BG = "bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fd5949_45%,#d6249f_60%,#285aeb_90%)]";
const INSTA_HOVER_BG = "hover:bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fd5949_45%,#d6249f_60%,#285aeb_90%)]";

// `brand`: filled with the brand colour all the time; otherwise outlined, filled on hover.
const LINKS = [
  { key: "facebook", label: "Facebook", Icon: FaFacebookF, brand: "bg-[#1877f2]", hover: "hover:bg-[#1877f2] hover:border-[#1877f2]" },
  { key: "instagram", label: "Instagram", Icon: FaInstagram, brand: INSTA_BG, hover: `${INSTA_HOVER_BG} hover:border-transparent` },
  { key: "linkedin", label: "LinkedIn", Icon: FaLinkedinIn, brand: "bg-[#0a66c2]", hover: "hover:bg-[#0a66c2] hover:border-[#0a66c2]" },
];

const LINK = "grid h-9 w-9 place-items-center rounded-full p-0 [transition:transform_.2s,background_.2s] hover:[transform:translateY(-2px)] [&_svg]:w-[17px]";

// Brand-coloured social buttons, used in the FAQ panel and the footer (brand), and the contact page (outlined).
export default function SocialLinks({ className = "", brand = false }) {
  return (
    <div className={`flex gap-[9px] ${className}`.trim()}>
      {LINKS.map(({ key, label, Icon, brand: brandCls, hover }) => (
        <a key={key} className={`${LINK} ${brand ? `border-0 text-white ${brandCls}` : `border border-[rgba(255,255,255,.2)] ${hover}`}`} href={SOCIALS[key]} target="_blank" rel="noreferrer" aria-label={label}><Icon /></a>
      ))}
    </div>
  );
}
