"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Clock, MapPin, Menu, Phone, X } from "lucide-react";
import { ADDRESS, MAPS_URL, PHONE, PHONE_DISPLAY } from "../lib/site";
import Years from "./Years";

// Small gold diamond-tipped rule on either side of the "years" text in the topbar.
const ORN = "relative block h-px w-[44px] flex-none before:content-[''] after:content-[''] before:absolute after:absolute before:top-1/2 after:top-1/2 before:box-content after:box-content before:h-1.5 after:h-1.5 before:w-1.5 after:w-1.5 before:border after:border before:border-gold2 after:border-gold2 before:[transform:translateY(-50%)_rotate(45deg)] after:[transform:translateY(-50%)_rotate(45deg)] before:left-[-3px] after:right-[-3px]";

const NAV_LINK = "font-bold max-[1101px]:flex max-[1101px]:items-center max-[1101px]:gap-3 max-[1101px]:before:block max-[1101px]:before:h-[7px] max-[1101px]:before:w-[7px] max-[1101px]:before:flex-none max-[1101px]:before:rotate-45 max-[1101px]:before:bg-gold max-[1101px]:before:content-[''] hover:text-maroon2 min-[1101px]:relative min-[1101px]:max-[1321px]:text-[13px] max-[1101px]:px-[5px] max-[1101px]:py-3 focus:outline-none focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-gold focus-visible:outline-offset-4 focus-visible:rounded-[4px]";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setMenuOpen(false);

  // Close the mobile menu as soon as the page is scrolled.
  useEffect(() => {
    if (!menuOpen) return;
    const onScroll = () => setMenuOpen(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname === href);
  const linkClass = (href) => `${NAV_LINK} ${isActive(href) ? "text-maroon2" : "text-[#4b5263]"}`;

  return (
    <>
      <div className="bg-maroon text-white text-[12px] max-[761px]:hidden">
        <div className="container flex min-h-[36px] items-center justify-between gap-5">
          <a className="inline-flex flex-none items-center gap-1.5 whitespace-nowrap text-inherit hover:text-gold2" href={MAPS_URL} target="_blank" rel="noreferrer"><MapPin size={14}/> {ADDRESS}</a>
          <span className="flex flex-none items-center gap-3 whitespace-nowrap text-white"><i className={`${ORN} bg-[linear-gradient(90deg,rgba(228,182,76,0),var(--color-gold2))] after:bg-gold2`}/><b className="whitespace-nowrap text-[13.5px] font-extrabold tracking-[.5px]"><Years/>+ Saalon Se Aapka Bharosa</b><i className={`${ORN} bg-[linear-gradient(90deg,var(--color-gold2),rgba(228,182,76,0))] before:bg-gold2`}/></span>
          <span className="flex flex-none items-center gap-1.5 whitespace-nowrap"><Clock size={14}/> Mon – Sun ( 9 AM – 10 PM ) </span>
        </div>
      </div>

      {/* Mobile menu backdrop: blurs the page and closes the menu when tapped. */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[rgba(16,31,69,.28)] backdrop-blur-[5px] min-[1101px]:hidden" onClick={closeMenu} aria-hidden="true" />
      )}

      <header className="sticky top-0 z-50 bg-[rgba(255,255,255,.96)] backdrop-blur-[12px]">
        <div className="container flex min-h-[76px] items-center justify-between max-[761px]:min-h-[72px] min-[1101px]:grid min-[1101px]:grid-cols-[1fr_auto_1fr]">
          <Link href="/" className="flex min-w-0 flex-col items-center leading-none text-maroon min-[1101px]:justify-self-start" onClick={closeMenu} aria-label="Gupta Tailors — Home">
            <img className="block h-auto w-[170px] max-w-none max-[1321px]:w-[150px] max-[1101px]:w-[160px] max-[761px]:w-[140px]" src="/logo.png" alt="Gupta Tailors — Since 1979. Perfect Fit. Personal Touch." width="800" height="250" />
          </Link>

          <button className="hidden border-0 bg-none px-1.5 py-px max-[1101px]:relative max-[1101px]:z-60 max-[1101px]:block max-[1101px]:text-maroon [&_svg]:inline [&_svg]:h-7 [&_svg]:w-7" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X/> : <Menu/>}
          </button>

          <nav className={`flex items-center text-[14px] font-semibold max-[1241px]:text-[13.5px] min-[1101px]:contents max-[1101px]:absolute max-[1101px]:top-[calc(100%+8px)] max-[1101px]:right-3 max-[1101px]:left-3 max-[1101px]:flex-col max-[1101px]:items-stretch max-[1101px]:gap-1 max-[1101px]:overflow-hidden max-[1101px]:rounded-[16px] max-[1101px]:border-2 max-[1101px]:border-[#e4c98f] max-[1101px]:bg-white max-[1101px]:px-[5%] max-[1101px]:py-[15px] max-[1101px]:text-[14px] ${menuOpen ? "max-[1101px]:flex" : "max-[1101px]:hidden"}`}>
            <div className="flex items-center gap-[25px] max-[1321px]:gap-4 max-[1101px]:contents">
              <Link href="/about" className={linkClass("/about")} onClick={closeMenu}>About Us</Link>
              <Link href="/services" className={linkClass("/services")} onClick={closeMenu}>Tailoring Services</Link>
              <Link href="/uniforms" className={linkClass("/uniforms")} onClick={closeMenu}>Uniform Stitching</Link>
              <Link href="/gallery" className={linkClass("/gallery")} onClick={closeMenu}>Gallery</Link>
              <Link href="/contact" className={linkClass("/contact")} onClick={closeMenu}>Contact Us</Link>
            </div>
            <a className="relative inline-flex cursor-pointer items-center justify-center gap-[10px] rounded-[40px] border-0 bg-[linear-gradient(135deg,var(--color-maroon),var(--color-maroon2))] py-[6px] pr-5 pl-[6px] font-bold text-white [transition:.25s] hover:-translate-y-0.5 min-[1101px]:justify-self-end min-[1101px]:max-[1321px]:gap-2 min-[1101px]:max-[1321px]:py-[5px] min-[1101px]:max-[1321px]:pr-4 min-[1101px]:max-[1321px]:pl-[5px] max-[1101px]:mt-3 max-[1101px]:justify-center max-[1101px]:gap-4 max-[1101px]:py-2 max-[1101px]:pl-2 max-[1101px]:pr-6" href={`tel:+${PHONE}`} onClick={closeMenu}>
              <span className="relative grid h-9 w-9 place-items-center rounded-full bg-gold2 text-maroon2 after:absolute after:inset-[-4px] after:rounded-full after:border-2 after:border-gold2 after:opacity-0 after:content-[''] after:animate-[ctaPulse_2s_ease-out_infinite] motion-reduce:after:animate-none"><Phone size={16}/></span>
              <span className="flex flex-col text-left leading-[1.15]"><small className="text-[11px] font-medium tracking-[.3px] text-[#f3dca6]">Call Karein</small><b className="text-[15px] tracking-[.3px] min-[1101px]:max-[1321px]:text-[14px]">{PHONE_DISPLAY}</b></span>
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
