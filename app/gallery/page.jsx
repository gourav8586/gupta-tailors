"use client";

import { PageHeader } from "../../components/UI";
import { galleryImages } from "../../lib/data";
import Faq from "../../components/Faq";

export default function Gallery() {
  return (
    <>
      <PageHeader
        image="https://images.unsplash.com/photo-1598032895397-b9472444bf93?auto=format&fit=crop&w=1800&q=80"
        crumb="Gupta Tailors Gallery"
      />

      <section className="section leading-[normal]">
        <div className="container">
          <div className="grid grid-cols-5 gap-3 max-[980px]:grid-cols-3 max-[760px]:grid-cols-2 max-[450px]:grid-cols-1">
            {galleryImages.map(([img, alt]) => (
              <div className="group relative h-[285px] overflow-hidden rounded-lg max-[760px]:h-[240px] max-[450px]:h-[280px]" key={alt}>
                <img className="h-full w-full object-cover transition-all duration-500 ease-[ease] group-hover:scale-[1.06]" src={img} alt={alt}/>
                <span className="absolute right-3 bottom-3 left-3 rounded-[5px] bg-[rgba(15,25,50,.72)] px-[11px] py-[9px] text-[13px] font-bold text-white backdrop-blur-[5px]">{alt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq />
    </>
  );
}
