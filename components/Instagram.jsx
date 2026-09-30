"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Clapperboard, Copy } from "lucide-react";
import { FaInstagram as InstagramIcon } from "react-icons/fa";
import { INSTAGRAM_ACCESS_TOKEN, INSTAGRAM_USER_ID, SOCIALS } from "../lib/site";

const API = "https://graph.instagram.com";
const MEDIA_FIELDS = "id,caption,media_type,media_url,thumbnail_url,permalink";
const PROFILE_FIELDS = "username,name,profile_picture_url,followers_count,media_count";
const POST_COUNT = 9;

const GRID = "mb-0 grid grid-cols-6 gap-3 max-[980px]:grid-cols-4 max-[760px]:grid-cols-3 max-[760px]:gap-2";
const POST = "group relative block aspect-square overflow-hidden rounded-[14px] bg-[#f1ebe0] max-[760px]:rounded-[10px]";
const FEATURED = "col-span-2 row-span-2";
const SKELETON = "bg-[linear-gradient(100deg,#f1ebe0_30%,#faf6ee_50%,#f1ebe0_70%)] bg-size-[200%_100%] animate-shimmer motion-reduce:animate-none";
const MEDIA = "absolute inset-0 block h-full w-full object-cover";
const STAT_NUM = "block text-[20px] leading-[1.1] font-bold text-maroon";
const STAT_LABEL = "text-[12px] font-bold tracking-[.5px] text-muted uppercase";

const fetchJson = url => fetch(url).then(res => res.json()).then(data => {
  if (data.error) throw new Error(data.error.message);
  return data;
});

// Reels play a muted preview while hovered; everything else shows its image.
function InstaPost({ post, featured }) {
  const videoRef = useRef(null);
  const isVideo = post.media_type === "VIDEO";
  const caption = post.caption ? post.caption.replace(/\s+/g, " ").trim() : "";

  const play = () => { if (videoRef.current) videoRef.current.play().catch(() => {}); };
  const stop = () => { if (videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0; } };

  return (
    <a className={`${POST} ${featured ? FEATURED : ""} shadow-[0_10px_25px_rgba(65,42,17,.08)]`} href={post.permalink} target="_blank" rel="noreferrer"
      onMouseEnter={play} onMouseLeave={stop} onFocus={play} onBlur={stop}>
      <img className={`${MEDIA} transition-transform duration-600 ease-[ease] group-hover:scale-[1.06] motion-reduce:transition-none`} src={isVideo ? post.thumbnail_url : post.media_url} alt={caption ? caption.slice(0, 80) : "Gupta Tailors Instagram post"} loading="lazy" />
      {isVideo && <video className={`${MEDIA} opacity-0 transition-opacity duration-300 ease-[ease] group-hover:opacity-100 group-focus:opacity-100`} ref={videoRef} src={post.media_url} muted loop playsInline preload="none" aria-hidden="true" />}
      {post.media_type !== "IMAGE" && (
        <span className="absolute top-2.5 right-2.5 z-[2] grid h-[30px] w-[30px] place-items-center rounded-full bg-[rgba(0,0,0,.45)] text-white backdrop-blur-[4px]" aria-hidden="true">{isVideo ? <Clapperboard className="h-4 w-4" /> : <Copy className="h-4 w-4" />}</span>
      )}
      <span className="absolute inset-0 z-[1] flex flex-col justify-end gap-2 bg-[linear-gradient(180deg,transparent_35%,rgba(20,14,12,.85))] p-4 text-white opacity-0 transition-opacity duration-300 ease-[ease] group-hover:opacity-100 group-focus-visible:opacity-100 max-[760px]:hidden">
        {caption && <p className={featured ? "m-0 line-clamp-3 text-[15px] leading-[1.5]" : "m-0 line-clamp-2 text-[13px] leading-[1.5]"}>{caption}</p>}
        <b className="inline-flex items-center gap-1 text-[13px] text-gold2">Instagram Par Dekhein <ArrowUpRight size={16} /></b>
      </span>
    </a>
  );
}

export function InstagramFeed() {
  const configured = Boolean(INSTAGRAM_ACCESS_TOKEN && INSTAGRAM_USER_ID);
  const [state, setState] = useState({ status: configured ? "loading" : "off", posts: [], profile: null });

  useEffect(() => {
    if (!configured) return;
    let cancelled = false;
    const token = `access_token=${INSTAGRAM_ACCESS_TOKEN}`;

    Promise.all([
      fetchJson(`${API}/${INSTAGRAM_USER_ID}/media?fields=${MEDIA_FIELDS}&limit=${POST_COUNT}&${token}`),
      fetchJson(`${API}/me?fields=${PROFILE_FIELDS}&${token}`).catch(() => null)
    ])
      .then(([media, profile]) => {
        if (!cancelled) setState({ status: "ready", posts: media.data || [], profile });
      })
      .catch(() => {
        if (!cancelled) setState({ status: "error", posts: [], profile: null });
      });

    return () => { cancelled = true; };
  }, [configured]);

  const { status, posts, profile } = state;

  return (
    <div className="leading-[normal] [--ig:linear-gradient(45deg,#f9ce34,#ee2a7b_45%,#6228d7)]">
      <div className="mx-auto mt-0 mb-[18px] flex max-w-[880px] items-center gap-[18px] rounded-[18px] border border-[#efe4cf] bg-white px-5 py-3 shadow-[0_14px_34px_rgba(94,16,20,.07)] max-[760px]:flex-wrap max-[760px]:gap-3.5 max-[760px]:p-4">
        <a className="grid h-14 w-14 flex-none place-items-center rounded-full bg-(image:--ig) p-[3px] text-white" href={SOCIALS.instagram} target="_blank" rel="noreferrer" aria-label="Gupta Tailors Instagram">
          {profile?.profile_picture_url ? <img className="block h-full w-full rounded-full border-[3px] border-white object-cover" src={profile.profile_picture_url} alt="" /> : <InstagramIcon className="h-7 w-7" />}
        </a>
        <div className="min-w-0">
          <b className="block font-serif text-[24px] leading-[1.1] text-navy">{profile?.name || "Gupta Tailors"}</b>
          <span className="text-[14px] font-semibold text-muted">@{profile?.username || "gupta.tailors"}</span>
        </div>
        {profile && (
          <div className="ml-auto flex gap-[26px] px-2 max-[760px]:order-3 max-[760px]:ml-0 max-[760px]:flex-1 max-[760px]:justify-start max-[760px]:gap-5 max-[760px]:p-0">
            <div className="text-center"><b className={STAT_NUM}>{profile.media_count}</b><span className={STAT_LABEL}>Posts</span></div>
            <div className="text-center"><b className={STAT_NUM}>{profile.followers_count}</b><span className={STAT_LABEL}>Followers</span></div>
          </div>
        )}
        <a className={`inline-flex flex-none items-center gap-2 rounded-[40px] bg-(image:--ig) px-[22px] py-3 text-[15px] font-bold text-white shadow-[0_10px_22px_rgba(238,42,123,.25)] transition-transform duration-[250ms] ease-[ease] hover:-translate-y-0.5 max-[760px]:order-4 ${profile ? "ml-0 max-[760px]:ml-auto" : "ml-auto"}`} href={SOCIALS.instagram} target="_blank" rel="noreferrer">
          <InstagramIcon size={18} /> Follow Karein
        </a>
      </div>

      {status === "loading" && (
        <div className={GRID} aria-label="Posts load ho rahi hain">
          {Array.from({ length: POST_COUNT }, (_, i) => <span key={i} className={`${POST} ${i === 0 ? FEATURED : ""} ${SKELETON}`} />)}
        </div>
      )}

      {status === "ready" && posts.length > 0 && (
        <div className={GRID}>
          {posts.map((post, i) => <InstaPost key={post.id} post={post} featured={i === 0} />)}
        </div>
      )}

      {(status === "off" || status === "error" || (status === "ready" && posts.length === 0)) && (
        <div className="mx-auto mt-0 mb-10 max-w-[560px] rounded-[14px] border border-dashed border-gold bg-white px-7 py-9 text-center text-muted">
          <InstagramIcon className="mb-3 inline-block h-[30px] w-[30px] align-baseline text-gold" />
          <p className="m-0 text-[14px] leading-[1.8]">
            Hamara latest kaam dekhne ke liye Instagram par{" "}
            <a className="font-bold text-maroon" href={SOCIALS.instagram} target="_blank" rel="noreferrer">@gupta.tailors</a> ko follow karein.
          </p>
        </div>
      )}

      {status === "ready" && posts.length > 0 && (
        <div className="center-cta">
          <a className="btn btn-primary whitespace-nowrap max-[560px]:px-4 max-[560px]:text-[14px]" href={SOCIALS.instagram} target="_blank" rel="noreferrer">
            <InstagramIcon size={18} /> Saari Posts Instagram Par Dekhein <ArrowRight className="max-[400px]:hidden" size={16} />
          </a>
        </div>
      )}
    </div>
  );
}
