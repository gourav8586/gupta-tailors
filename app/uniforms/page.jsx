import { CalendarClock, CheckCircle2, ClipboardList, Palette, Phone, Ruler, Scissors, ShieldCheck, Truck, Users } from "lucide-react";
import { PageHeader, SectionTitle } from "../../components/UI";
import { uniformBenefits, uniformChecklist, uniformServices } from "../../lib/data";
import { PHONE, PHONE_DISPLAY } from "../../lib/site";
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata("uniforms");

const benefitIcons = [Ruler, CalendarClock, ShieldCheck, Palette];

const highlights = [
  { value: `${uniformChecklist.length}+`, label: "Uniform Types" },
  { value: "Bulk", label: "Orders Welcome" },
  { value: "Logo", label: "Custom Branding" },
];

const bulkSteps = [
  { icon: ClipboardList, title: "Zaroorat Batayein", text: "Kitne uniform, kis tarah ke aur kab tak chahiye — call par batayein." },
  { icon: Scissors, title: "Fabric Aur Design", text: "Fabric, rang, logo aur design final karte hain." },
  { icon: Users, title: "Team Ka Naap", text: "Poori team ka naap lekar standard size chart banate hain." },
  { icon: Truck, title: "Batch Delivery", text: "Quality check ke baad planned batches mein time par delivery." },
];

export default function Uniforms() {
  return (
    <>
      <PageHeader
        image="/img/1728939254912-ccdba2dc9a6a-w1800.jpg"
        crumb="Uniform Stitching in Alwar"
      />

      <section className="section leading-[normal]">
        <div className="container grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-[50px] items-center max-[800px]:grid-cols-[1fr] max-[800px]:gap-7">
          <div className="rounded-2xl overflow-hidden aspect-[5/4]">
            <img className="w-full h-full object-cover block" src="/img/uniforms/uniform-tailoring.jpg" alt="Gupta Tailors, Alwar mein kaarigar uniform ka kapda kaatte hue" />
          </div>
          <div>
            <span className="svc-eyebrow leading-[normal]">Har Institution Ke Liye</span>
            <h2 className="font-serif text-[44px] leading-[1.05] font-bold text-maroon mt-2 mb-3 max-[800px]:text-[36px]">Har Tarah Ki Uniform, Ek Hi Jagah</h2>
            <p className="mb-4 text-muted leading-[1.7]">School se lekar corporate office, hotel aur hospital tak — poori team ke liye ek jaisi fitting, tikaau fabric aur professional finishing ke saath uniforms.</p>
            <ul className="list-none p-0 mb-5 grid gap-2 [&_li]:flex [&_li]:items-center [&_li]:gap-2.5 [&_li]:font-semibold [&_li]:text-ink [&_li]:text-[14.5px] [&_svg]:flex-none [&_svg]:w-[19px] [&_svg]:h-[19px] [&_svg]:text-gold">
              <li><CheckCircle2 /> Standard size chart, har batch mein ek jaisi fitting</li>
              <li><CheckCircle2 /> Aapke logo, colour aur piping ke saath</li>
              <li><CheckCircle2 /> Chhote se bade, har size ka order</li>
            </ul>
            <div className="grid grid-cols-[repeat(3,1fr)] gap-3 mb-[22px]">
              {highlights.map(h => (
                <div className="bg-[#fbf3e4] border border-[#efe1c4] rounded-xl py-3 px-3.5 text-center" key={h.label}>
                  <b className="block font-serif text-[28px] leading-[1.1] text-maroon max-[520px]:text-[22px]">{h.value}</b>
                  <span className="text-[12px] font-bold text-muted uppercase tracking-[.5px]">{h.label}</span>
                </div>
              ))}
            </div>
            <a className="btn btn-primary" href={`tel:+${PHONE}`}><Phone size={18} /> Call Karke Quotation Lein</a>
          </div>
        </div>
      </section>

      <section className="section soft leading-[normal]">
        <div className="container">
          <SectionTitle eyebrow="Hum Kinke Liye Banate Hain" title="Har Field Ki Uniform" />
          <div className="grid grid-cols-[repeat(3,1fr)] gap-6 max-[1000px]:grid-cols-[repeat(2,1fr)] max-[600px]:grid-cols-[1fr]">
            {uniformServices.map((c, i) => (
              <article
                className="group bg-white rounded-2xl overflow-hidden border border-[#efe4cf] [transition:transform_.45s_cubic-bezier(.2,.7,.2,1),border-color_.45s_ease] hover:[transform:translateY(-6px)] hover:border-[#e6cf9f]"
                key={c.title}>
                <div className="relative aspect-[4/3.4] overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(180deg,transparent_60%,rgba(15,12,10,.35))]">
                  <img className="w-full h-full object-cover object-top block [transition:transform_.7s_ease] group-hover:[transform:scale(1.06)]" src={c.image} alt={c.title} loading="lazy" />
                  <span className="absolute left-4 top-4 z-[1] bg-white text-maroon text-[11px] font-extrabold tracking-[1.2px] py-1.5 px-3 rounded-[30px]">{c.title.split(" ")[0].toUpperCase()}</span>
                  <span className="absolute right-4 bottom-2.5 z-[1] font-serif text-[44px] font-bold leading-none text-[rgba(255,255,255,.85)]">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="pt-[22px] px-6 pb-6">
                  <h3 className="font-serif text-[27px] leading-[1.1] font-bold text-maroon mb-2">{c.title}</h3>
                  <p className="mb-[18px] text-muted text-[14.5px] leading-[1.6]">{c.text}</p>
                  <a className="inline-flex items-center gap-2 py-2.5 px-4 rounded-lg bg-[#fbf1de] text-maroon text-[14px] font-bold [transition:background_.3s,color_.3s] group-hover:bg-maroon group-hover:text-white hover:bg-maroon hover:text-white" href={`tel:+${PHONE}`}><Phone size={15} /> Call Karke Poochein</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1c2430] text-white py-11 leading-[normal]">
        <div className="container">
          <div className="text-center mb-7">
            <span className="svc-eyebrow leading-[normal] text-gold2 before:bg-gold2">Bulk Order Kaise Hota Hai</span>
            <h2 className="font-serif text-[40px] font-bold mt-2">4 Steps Mein Poori Team Ki Uniform</h2>
          </div>
          <ol className="list-none m-0 p-0 grid grid-cols-[repeat(4,1fr)] gap-[18px] max-[1000px]:grid-cols-[1fr_1fr] max-[520px]:grid-cols-[1fr]">
            {bulkSteps.map(({ icon: Icon, title, text }, i) => (
              <li className="relative bg-[rgba(255,255,255,.05)] border border-[rgba(255,255,255,.1)] rounded-[14px] py-6 px-[22px]" key={title}>
                <i className="absolute right-[18px] top-3 not-italic font-serif text-[44px] font-bold text-[rgba(228,182,76,.25)]">{String(i + 1).padStart(2, "0")}</i>
                <span className="w-12 h-12 rounded-full grid place-items-center bg-maroon text-white mb-3.5 [&_svg]:w-[22px] [&_svg]:h-[22px]"><Icon /></span>
                <h3 className="font-serif text-[23px] font-bold mb-1.5 text-white">{title}</h3>
                <p className="text-[#b9c1d1] text-[14px] leading-[1.6]">{text}</p>
              </li>
            ))}
          </ol>
          <div className="text-center mt-[26px]">
            <a className="btn btn-gold" href={`tel:+${PHONE}`}><Phone size={18} /> Quotation Ke Liye Call Karein {PHONE_DISPLAY}</a>
          </div>
        </div>
      </section>

      <section className="section leading-[normal]">
        <div className="container">
          <SectionTitle eyebrow="Humein Hi Kyun Chunein" title="Bulk Orders Ke Liye Bharosemand" />
          <div className="grid grid-cols-[repeat(4,1fr)] gap-[18px] max-[1000px]:grid-cols-[1fr_1fr] max-[520px]:grid-cols-[1fr]">
            {uniformBenefits.map((b, i) => {
              const Icon = benefitIcons[i];
              return (
                <div className="bg-white rounded-[14px] py-[26px] px-[22px] border-t-[3px] border-maroon [transition:transform_.25s] hover:[transform:translateY(-4px)]" key={b.title}>
                  <span className="w-[52px] h-[52px] rounded-xl grid place-items-center bg-[#fbf3e4] text-maroon mb-3.5 [&_svg]:w-6 [&_svg]:h-6"><Icon /></span>
                  <h3 className="font-serif text-[23px] leading-[1.15] font-bold text-maroon mb-2">{b.title}</h3>
                  <p className="text-muted text-[14px] leading-[1.6]">{b.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </>
  );
}
