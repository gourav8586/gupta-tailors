import { Camera, Check, Phone, Scissors, Shirt, Sparkles, Users } from "lucide-react";
import { PageHeader, SectionTitle } from "../../components/UI";
import { processSteps } from "../../lib/data";
import { PHONE, PHONE_DISPLAY } from "../../lib/site";
import { pageMetadata } from "../../lib/seo";
import Faq from "../../components/Faq";

export const metadata = pageMetadata("process");

const icons = [Phone, Users, Scissors, Shirt, Sparkles];

const bringAlong = [
  { icon: Shirt, title: "Achhi Fit Wala Kapda", text: "Koi purana kapda jiski fitting aapko pasand hai — naap aur bhi sateek hota hai." },
  { icon: Scissors, title: "Apna Fabric", text: "Agar aapke paas fabric hai to saath laayein, warna hamari range se chunein." },
  { icon: Camera, title: "Design Ki Photo", text: "Koi style ya design pasand hai to uski photo phone mein dikha dijiye." },
];

export default function Process() {
  return (
    <>
      <PageHeader
        image="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=1800&q=80"
        crumb="How Gupta Tailors Works"
      />

      <section className="section leading-[normal]">
        <div className="container">
          <SectionTitle eyebrow="5 Aasaan Steps" title="Pehli Call Se Delivery Tak" text="Har step par hum aapke saath hain — taaki kapda bilkul waisa bane jaisa aap chahte hain." />

          <ol className="list-none mt-2.5 mx-auto mb-0 p-0 max-w-[1000px] relative before:content-[''] before:absolute before:left-1/2 before:top-2.5 before:bottom-2.5 before:w-0.5 before:[transform:translateX(-50%)] before:bg-[repeating-linear-gradient(180deg,var(--color-gold)_0_8px,transparent_8px_14px)] max-[800px]:before:left-[30px]">
            {processSteps.map((step, i) => {
              const Icon = icons[i];
              return (
                <li className="group/ptl relative grid grid-cols-[1fr_1fr] gap-[90px] not-first:-mt-[110px] max-[800px]:grid-cols-[1fr] max-[800px]:gap-0 max-[800px]:pl-[78px] max-[800px]:not-first:mt-[22px]" key={step.n}>
                  <div className="absolute left-1/2 top-[22px] [transform:translateX(-50%)] z-[1] w-[60px] h-[60px] rounded-full bg-white border-2 border-gold text-maroon grid place-items-center shadow-[0_0_0_6px_#fff,0_10px_24px_rgba(125,23,27,.12)] [&_svg]:w-[26px] [&_svg]:h-[26px] max-[800px]:left-[30px] max-[800px]:top-[18px]"><Icon /></div>
                  <div className="relative overflow-hidden bg-white border border-[#eee4d2] rounded-[14px] py-6 px-[26px] shadow-[0_18px_50px_rgba(61,34,16,.07)] [transition:transform_.25s,box-shadow_.25s,border-color_.25s] hover:[transform:translateY(-4px)] hover:border-gold hover:shadow-[0_18px_40px_rgba(125,23,27,.12)] col-[1] group-even/ptl:col-[2] max-[800px]:col-[1]">
                    <span className="absolute right-[18px] top-1.5 font-serif text-[74px] font-bold leading-none text-[rgba(197,138,32,.14)]">{step.n}</span>
                    <small className="text-[11px] font-bold tracking-[2px] uppercase text-gold">Step {step.n}</small>
                    <h3 className="font-serif text-[28px] font-bold text-maroon mt-1 mb-1.5">{step.title}</h3>
                    <p className="mb-3.5 text-muted leading-[1.6] text-[14.5px]">{step.text}</p>
                    <ul className="list-none m-0 pt-3.5 border-t border-dashed border-[#eadfca] grid gap-2">
                      {step.points.map(p => (
                        <li className="flex items-center gap-2.5 text-[14px] font-semibold text-ink" key={p}>
                          <Check className="flex-none w-[22px] h-[22px] p-1 rounded-full bg-[#fbf3e4] text-maroon" size={15} strokeWidth={3} />{p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="section soft leading-[normal]">
        <div className="container">
          <SectionTitle eyebrow="Pehli Baar Aa Rahe Hain?" title="Dukaan Aate Waqt Saath Laayein" />
          <div className="grid grid-cols-[repeat(3,1fr)] gap-[22px] max-w-[1000px] mx-auto max-[800px]:grid-cols-[1fr]">
            {bringAlong.map(({ icon: Icon, title, text }) => (
              <div className="bg-white rounded-[14px] py-7 px-6 text-center shadow-[0_18px_50px_rgba(61,34,16,.07)] border-b-[3px] border-gold" key={title}>
                <span className="w-[58px] h-[58px] mx-auto mb-3.5 rounded-full grid place-items-center bg-maroon text-white [&_svg]:w-[26px] [&_svg]:h-[26px]"><Icon /></span>
                <h3 className="font-serif text-[24px] font-bold text-maroon mb-1.5">{title}</h3>
                <p className="text-muted text-[14px] leading-[1.6]">{text}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center gap-[18px] flex-wrap mt-[22px]">
            <p className="font-semibold text-ink">Koi sawaal hai? Seedhe humse baat karein.</p>
            <a className="btn btn-primary" href={`tel:+${PHONE}`}><Phone size={17} /> Call Karein {PHONE_DISPLAY}</a>
          </div>
        </div>
      </section>

      <Faq />
    </>
  );
}
