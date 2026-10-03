"use client";

import { useEffect, useRef, useState } from "react";

const SRC = "/hero-video.mp4";
const POSTER = "/hero-poster.jpg"; // first frame, shown until the video can play
const FADE = 1; // seconds of cross-fade between the end of one play and the start of the next

// Two stacked copies of the hero video. Shortly before the visible one ends, the hidden one
// starts from the beginning and fades in, so the loop never shows a jump or a blank frame.
export default function HeroVideo() {
  const refs = [useRef(null), useRef(null)];
  const [active, setActive] = useState(0);

  useEffect(() => {
    const current = refs[active].current;
    const next = refs[1 - active].current;
    if (!current || !next) return;

    let switched = false;
    const onTime = () => {
      if (switched || !current.duration) return;
      if (current.duration - current.currentTime <= FADE && next.readyState >= 2) {
        switched = true;
        next.currentTime = 0;
        next.play().catch(() => {});
        setActive(1 - active);
      }
    };
    // Fallback: if the other copy was never ready, simply restart this one instead of freezing.
    const onEnded = () => { if (!switched) { current.currentTime = 0; current.play().catch(() => {}); } };
    current.addEventListener("timeupdate", onTime);
    current.addEventListener("ended", onEnded);
    return () => {
      current.removeEventListener("timeupdate", onTime);
      current.removeEventListener("ended", onEnded);
    };
  }, [active]);

  // Pause the faded-out copy once the fade is done, so only one video decodes at a time.
  useEffect(() => {
    const hidden = refs[1 - active].current;
    const t = setTimeout(() => hidden && hidden.pause(), FADE * 1000 + 100);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${POSTER})` }} aria-hidden="true">
      {refs.map((ref, i) => (
        <video
          key={i}
          ref={ref}
          className={`absolute inset-0 h-full w-full object-cover motion-reduce:hidden transition-opacity duration-1000 ease-linear ${i === active ? "opacity-100" : "opacity-0"}`}
          src={SRC}
          poster={POSTER}
          autoPlay={i === 0}
          muted
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          controlsList="nodownload noplaybackrate noremoteplayback"
          onContextMenu={e => e.preventDefault()}
          preload="auto"
        />
      ))}
    </div>
  );
}
