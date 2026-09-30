import Link from "next/link";
import { ArrowRight, Check, Phone } from "lucide-react";
import { PHONE } from "../lib/site";

// `className` is merged onto the root (use `!` to override defaults, e.g. "max-w-none!").
export function SectionTitle({ eyebrow, title, text, className = "" }) {
  return (
    <div className={`mx-auto mt-0 mb-[22px] max-w-[720px] text-center leading-[normal] ${className}`}>
      <span className="text-[11px] font-bold tracking-[4px] text-gold">{eyebrow}</span>
      <h2 className="mt-2 mb-2.5 font-serif text-[48px] font-bold leading-none text-maroon max-[760px]:text-[40px]">{title}</h2>
      {text && <p className="m-0 leading-[1.7] text-muted">{text}</p>}
    </div>
  );
}

const DEFAULT_HEADER_IMAGE = "https://images.unsplash.com/photo-1602810319428-019690571b5b?auto=format&fit=crop&w=1800&q=80";

// Page banner showing the current page name as the heading.
export function PageHeader({ crumb, image = DEFAULT_HEADER_IMAGE }) {
  // The visual banner is hidden on all pages; keep the page name as an H1 for search engines
  // and screen readers. Remove this line to show the banner again.
  return <h1 className="sr-only">{crumb}</h1>;
  return (
    <section className="bg-[image:linear-gradient(rgba(16,18,26,.78),rgba(16,18,26,.7)),var(--ph-img)] bg-cover bg-center bg-no-repeat pt-24 pb-[92px] leading-[normal] text-white max-[760px]:pt-[60px] max-[760px]:pb-14" style={{ "--ph-img": `url("${image}")` }}>
      <div className="container text-center">
        <h1 className="mt-1 mb-2 font-serif text-[44px] font-bold leading-[1.1] max-[980px]:text-[38px] max-[760px]:text-[34px]">{crumb}</h1>
      </div>
    </section>
  );
}

export function PremiumServiceCard({ icon: Icon, title, items }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-[18px] border border-[#efe4cf] bg-white leading-[normal]">
      <div className="relative flex items-center gap-4 bg-[linear-gradient(135deg,#5e1014,#7d171b_60%,#96262a)] px-[26px] py-[22px] after:absolute after:right-0 after:bottom-0 after:left-0 after:h-[3px] after:bg-[linear-gradient(90deg,#c58a20,#e4b64c,#c58a20)] after:content-[''] max-[760px]:p-[18px]">
        <div className="grid h-14 w-14 flex-none place-items-center rounded-full bg-gold2 text-maroon2 shadow-[0_0_0_5px_rgba(228,182,76,.25)] [&>svg]:h-[26px] [&>svg]:w-[26px]"><Icon /></div>
        <div>
          <h3 className="m-0 font-serif text-[28px] font-bold leading-[1.1] text-white max-[760px]:text-[24px]">{title}</h3>
          <span className="mt-1 block text-[12px] font-bold tracking-[1.5px] text-gold2 uppercase">{items.length} Services</span>
        </div>
      </div>
      <ul className="m-0 mb-3.5 grid list-none grid-cols-2 gap-2.5 px-[22px] pt-[22px] pb-1.5 max-[760px]:grid-cols-1 max-[760px]:px-4 max-[760px]:pt-[18px] max-[760px]:pb-1">
        {items.map(item => (
          <li key={item} className="flex items-center gap-2.5 rounded-[10px] border border-[#f1e7d3] bg-[#faf6ee] px-3 py-[11px] text-sm leading-[1.35] font-semibold text-navy"><i className="grid h-[22px] w-[22px] flex-none place-items-center rounded-full border-[1.5px] border-gold bg-white text-gold"><Check size={13} strokeWidth={3} /></i>{item}</li>
        ))}
      </ul>
      <a className="mx-[22px] mt-auto mb-[22px] flex items-center justify-center gap-2 rounded-[10px] border-[1.5px] border-maroon bg-maroon p-3 text-[14px] font-bold text-white transition-all duration-[250ms] ease-[ease] hover:border-maroon2 hover:bg-maroon2 max-[760px]:mx-4 max-[760px]:mt-3 max-[760px]:mb-[18px]" href={`tel:+${PHONE}`}><Phone size={16} /> Abhi Call Karein</a>
    </div>
  );
}

export function FabricCard({ title, text, image }) {
  return (
    <div className="group text-center leading-[normal]">
      <div className="relative h-[190px] overflow-hidden rounded-[14px] shadow-[0_12px_30px_rgba(65,42,17,.1)]"><img className="h-full w-full object-cover transition-all duration-500 ease-[ease] group-hover:scale-[1.06]" src={image} alt={title} /></div>
      <h3 className="mt-4 mb-1.5 font-serif text-[22px] font-bold text-maroon">{title}</h3>
      <p className="m-0 text-[13px] leading-[1.6] text-muted">{text}</p>
    </div>
  );
}

export function CategorySection({ title, text, items, href, soft, className = "" }) {
  return (
    <section className={`section leading-[normal] ${soft ? "bg-white" : "bg-[#f7f4ee]"} ${className}`}>
      <div className="container">
        <div className="mx-auto mb-[22px] max-w-[720px] text-center">
          <h2 className="m-0 mb-1.5 font-serif text-[44px] font-semibold leading-[1.05] text-maroon max-[560px]:text-[34px]">{title}</h2>
          {text && <p className="m-0 text-[16px] font-medium text-gold">{text}</p>}
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {items.slice(0, 10).map(item => (
            <Link href={href} className="group relative block w-[calc((100%-64px)/5)] max-[1100px]:w-[calc((100%-32px)/3)] max-[700px]:w-[calc((100%-16px)/2)] aspect-[3/4.2] overflow-hidden rounded-[14px] bg-[#1c2430] text-left shadow-[0_14px_34px_rgba(28,36,48,.14)] after:absolute after:inset-0 after:bg-[linear-gradient(180deg,rgba(15,12,10,0)_40%,rgba(15,12,10,.55)_68%,rgba(15,12,10,.9)_100%)] after:content-[''] max-[520px]:aspect-[4/4.4]" key={item.title}>
              <img className="absolute inset-0 h-full w-full object-cover transition-transform duration-[600ms] ease-[ease] group-hover:scale-[1.06]" src={item.image} alt={item.title} loading="lazy" />
              <div className="absolute right-0 bottom-0 left-0 z-[1] flex items-end justify-between gap-3.5 px-4 pt-4 pb-[18px]">
                <div>
                  <h3 className="m-0 mb-1 font-serif text-[22px] font-bold leading-[1.1] text-white">{item.title}</h3>
                  {item.text && <p className="m-0 text-[12.5px] text-[#e7e2dc] max-[700px]:hidden">{item.text}</p>}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-5 text-center">
          <Link className="btn btn-primary" href={href}>View All Services <ArrowRight size={18}/></Link>
        </div>
      </div>
    </section>
  );
}
