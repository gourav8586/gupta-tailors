import { Phone, Scissors, Shirt, Sparkles, Users } from "lucide-react";
import { processSteps } from "../lib/data";

const stepIcons = [Phone, Users, Scissors, Shirt, Sparkles];

export default function ProcessSteps() {
  return (
    <section className="relative overflow-hidden bg-[#140e0c] py-[30px] leading-[normal]">
      <div
        className="absolute -inset-3 [background:linear-gradient(90deg,rgba(20,14,12,.9)_0%,rgba(20,14,12,.78)_50%,rgba(20,14,12,.9)_100%),url('/img/1776107490710-f5c08a0c6a98-w2000.jpg')_center/cover_no-repeat] blur-[1.5px] pointer-events-none"
        aria-hidden="true"
      />
      <div className="container relative z-[1]">
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-3.5 text-[12px] font-bold tracking-[1.5px] uppercase text-gold before:content-[''] before:w-[50px] before:h-px before:bg-gold after:content-[''] after:w-[50px] after:h-px after:bg-gold max-[560px]:before:w-6 max-[560px]:after:w-6">Humara Kaam Karne Ka Tariqa</span>
          <h2 className="font-serif text-[40px] leading-[1.1] font-bold mt-1.5 mb-1 text-white max-[560px]:text-[34px]">Aasaan Steps, <em className="not-italic text-gold2">Perfect Fit</em></h2>
          <p className="text-[#e9e1dc]">Bas kuch aasaan steps mein paayein apne liye perfect outfit.</p>
        </div>
        <ol className="list-none mx-auto my-0 p-0 max-w-[1080px] grid grid-cols-[repeat(5,1fr)] gap-5 max-[900px]:grid-cols-[repeat(3,1fr)] max-[900px]:gap-y-9 max-[560px]:grid-cols-[1fr_1fr]">
          {processSteps.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <li className="relative text-center max-[560px]:last:col-span-2 not-last:after:content-['→'] not-last:after:absolute not-last:after:top-[18px] not-last:after:-right-[22px] not-last:after:w-6 not-last:after:text-[24px] not-last:after:leading-none not-last:after:text-gold2 max-[900px]:nth-3:after:hidden max-[560px]:after:hidden" key={step.n}>
                <div className="w-[60px] h-[60px] mx-auto mb-2 rounded-full bg-white border-[1.5px] border-[#d8822c] grid place-items-center text-maroon [&_svg]:w-[26px] [&_svg]:h-[26px]"><Icon /></div>
                <small className="block text-[14px] font-semibold text-gold2">{step.n}</small>
                <h3 className="font-serif text-[20px] font-bold text-white mb-1">{step.title}</h3>
                <p className="mx-auto max-w-[190px] text-[13px] leading-[1.5] text-[#e9e1dc]">{step.text}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
