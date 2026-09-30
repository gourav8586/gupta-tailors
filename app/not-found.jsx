import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      {/* Same background declaration as the page header; --ph-img is not set here (as before). */}
      <section className="pt-24 pb-[92px] text-white [background:linear-gradient(rgba(16,18,26,.78),rgba(16,18,26,.7)),var(--ph-img)_center/cover_no-repeat] max-[761px]:pt-[60px] max-[761px]:pb-14">
        <div className="container text-center">
          <div className="eyebrow eyebrow-light mb-1.5">404</div>
          <h1 className="mt-1 mb-2 font-serif text-[44px] font-bold leading-[1.1] max-[981px]:text-[38px] max-[761px]:text-[34px]">Yeh Page Nahi Mila</h1>
          <p className="mx-auto my-0 max-w-[640px] leading-[1.7] text-[#e6e8ee]">Jo page aap dhoondh rahe hain woh maujood nahi hai ya hata diya gaya hai.</p>
        </div>
      </section>
      <section className="section">
        <div className="container center-cta">
          <Link className="btn btn-primary" href="/">Home Page Par Jaayein <ArrowRight size={18}/></Link>
        </div>
      </section>
    </>
  );
}
