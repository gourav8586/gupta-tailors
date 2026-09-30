import { Award, ArrowRight } from "lucide-react";
import Link from "next/link";
import { PageHeader, SectionTitle } from "../../components/UI";
import { milestones, values } from "../../lib/data";
import { pageMetadata } from "../../lib/seo";
import Years from "../../components/Years";
import Faq from "../../components/Faq";

export const metadata = pageMetadata("about");

const copyP = "mt-0 mb-[15px] text-muted leading-[1.7]";

export default function About() {
  return (
    <>
      <PageHeader
        image="https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=1800&q=80"
        crumb="About Gupta Tailors, Alwar"
      />

      <section className="section leading-[normal]">
        <div className="container grid grid-cols-2 items-center gap-[75px] max-[760px]:grid-cols-1 max-[760px]:gap-10">
          <div>
            <div className="eyebrow">Hamari Kahani</div>
            <h2 className="mt-2 mb-2.5 font-serif text-[48px] leading-none font-bold text-maroon max-[760px]:text-[40px]">Har Customer Ke Liye Bharosa, Ek Silai Mein</h2>
            <p className={copyP}><Years/>+ saalon se Gupta Tailors Alwar mein bharosemand tailoring service ke liye jaana jaata hai. Hamara focus sirf kapda silna nahi, balki aapke liye aisa fit taiyaar karna hai jo pehenne mein comfortable aur dikhne mein confidence se bhara lage.</p>
            <p className={copyP}>Traditional kaarigari ko modern styling, behtareen fabric aur sateek naap ke saath milakar hum har customer ko personal service dete hain. Chahe shaadi ka suit ho, roz pehenne ki shirt ho ya poori team ki uniform — har kaam utni hi mehnat se kiya jaata hai jitni 1979 mein pehle din ki gayi thi.</p>
            <Link className="btn btn-primary" href="/contact">Hamari Dukaan Par Aayein <ArrowRight size={18}/></Link>
          </div>
          <div className="relative h-[510px] max-[760px]:h-[390px]">
            <img className="h-full w-full rounded-xl object-cover" src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=1200&q=85" alt="Tailor working on a garment"/>
            <div className="absolute bottom-[30px] left-[-30px] grid grid-cols-[auto_1fr] gap-x-2.5 border-l-4 border-gold bg-white px-[22px] py-[18px] shadow-[0_18px_50px_rgba(61,34,16,.07)] max-[760px]:bottom-[15px] max-[760px]:left-3">
              <Award className="row-start-1 row-end-3 text-gold"/>
              <b className="text-[16px]">1979 Se</b>
              <span className="text-[12px] text-muted">Bharosemand Kaarigari</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section soft leading-[normal]">
        <div className="container">
          <SectionTitle eyebrow="Hamari Soch" title="Hamari Values" />
          <div className="grid grid-cols-4 gap-5 max-[980px]:grid-cols-2 max-[760px]:grid-cols-1">
            {values.map(v => (
              <div className="rounded-[10px] border border-line bg-white px-[22px] py-7 shadow-[0_7px_25px_rgba(65,42,17,.05)] transition-all duration-300 ease-[ease] hover:-translate-y-1.5 hover:shadow-[0_18px_50px_rgba(61,34,16,.07)]" key={v.title}>
                <h3 className="mt-0 mb-2 font-serif text-[22px] font-bold text-maroon">{v.title}</h3>
                <p className="m-0 text-[13px] leading-[1.6] text-muted">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section leading-[normal]">
        <div className="container">
          <SectionTitle eyebrow="Hamara Safar" title="Dashakon Ki Tarakki" text="1979 se aaj tak — ek chhoti dukaan se Alwar ke bharosemand tailoring naam tak." />
          <div className="mx-auto grid max-w-[760px] gap-0 border-l-2 border-dashed border-gold pl-[30px] max-[760px]:pl-[22px]">
            {milestones.map(m => (
              <div className="relative pb-[34px] last:pb-0 before:absolute before:top-1 before:left-[-37px] before:h-3 before:w-3 before:rounded-full before:bg-gold before:content-['']" key={m.year}>
                <div className="mb-1 font-serif text-[24px] font-bold text-maroon">{m.year}</div>
                <p className="m-0 leading-[1.6] text-muted">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq />
    </>
  );
}
