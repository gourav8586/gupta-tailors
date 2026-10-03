import Link from "next/link";
import { Clock, MapPin, Phone } from "lucide-react";
import { ADDRESS, MAPS_URL, PHONE, PHONE_DISPLAY } from "../lib/site";
import SocialLinks from "./Social";

const HEADING = "mb-[18px] text-[17px] font-bold tracking-[1px] text-[#e4c578]";
const LINK = "mb-3 block text-[15px] text-white hover:text-gold2";
const CONTACT_LI = "flex items-start gap-[10px] text-[15px] leading-[1.45] text-white [&>svg]:mt-[2px] [&>svg]:h-[18px] [&>svg]:w-[18px] [&>svg]:flex-none [&>svg]:text-gold2";

export default function Footer() {
  return (
    <footer className="bg-[#1c2430] pt-8 text-white">
      <div className="container grid grid-cols-[1.3fr_.8fr_1fr_1.3fr] gap-[50px] pb-6 max-[981px]:grid-cols-[1fr_1fr] max-[761px]:gap-[35px] max-[451px]:gap-x-5">
        <div className="max-[761px]:col-[1/-1]">
          <Link href="/" className="inline-flex min-w-0 leading-none" aria-label="Gupta Tailors — Home"><img className="block h-auto w-[240px] max-w-none max-[1101px]:w-[210px] max-[761px]:w-[200px]" src="/logo-white.png" alt="Gupta Tailors" width="800" height="267" /></Link>
          <p className="mt-4 mb-[14px] max-w-[280px] text-[15px] leading-[1.6] text-white">Modern touch ke saath traditional tailoring. 1979 se aapka bharosa.</p>
          <SocialLinks brand />
        </div>
        <div>
          <h4 className={HEADING}>Quick Links</h4>
          <Link className={LINK} href="/">Home</Link>
          <Link className={LINK} href="/about">About Us</Link>
          <Link className={LINK} href="/services">Services</Link>
          <Link className={LINK} href="/process">How It Works</Link>
          <Link className={LINK} href="/gallery">Gallery</Link>
          <Link className={LINK} href="/contact">Contact Karein</Link>
        </div>
        <div>
          <h4 className={HEADING}>Hamari Services</h4>
          <Link className={LINK} href="/services">Pant Ki Silai</Link>
          <Link className={LINK} href="/services">Shirt Ki Silai</Link>
          <Link className={LINK} href="/services">Kurta-Pajama Ki Silai</Link>
          <Link className={LINK} href="/uniforms">Uniform Stitching</Link>
          <Link className={LINK} href="/services">Alteration Aur Fitting</Link>
        </div>
        <div className="max-[761px]:col-[1/-1]">
          <h4 className={HEADING}>Contact Karein</h4>
          <ul className="grid gap-2">
            <li className={CONTACT_LI}><MapPin /><a className={LINK} href={MAPS_URL} target="_blank" rel="noreferrer">{ADDRESS}</a></li>
            <li className={CONTACT_LI}><Phone /><a className={LINK} href={`tel:+${PHONE}`}>{PHONE_DISPLAY}</a></li>
            <li className={CONTACT_LI}><Clock /><span>Mon – Sun ( 9 AM – 10 PM )</span></li>
          </ul>
        </div>
      </div>
      <div className="container flex flex-row flex-wrap items-center justify-center gap-x-2 gap-y-1 border-t border-[rgba(255,255,255,.12)] py-[14px] text-center text-[14px] tracking-[.3px] text-white max-[761px]:block max-[761px]:leading-[2] max-[561px]:flex">
        <span>© 2026 Gupta Tailors. All Rights Reserved.</span>
      </div>
    </footer>
  );
}
