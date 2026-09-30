import { ADDRESS_PARTS, FOUNDED_YEAR, MAPS_URL, PHONE, SITE_NAME, SITE_URL, SOCIALS } from "./site";

// One entry per public page: used for <title>/<meta>, canonical URLs and sitemap.xml.
export const PAGES = {
  home: {
    path: "/",
    title: "Gupta Tailors Alwar | Best Tailor & Uniform Stitching Since 1979",
    description: `Alwar ke bharosemand tailor, ${FOUNDED_YEAR} se. Pant, shirt, kurta-pajama, safari suit, pathani suit, shaadi ke kapde aur school, hotel, corporate uniform ki silai. Call +91 93141 53200.`,
    priority: 1,
  },
  about: {
    path: "/about",
    title: "About Us | Gupta Tailors, Alwar Since 1979",
    description: `${FOUNDED_YEAR} se Alwar mein bharosemand tailoring — traditional kaarigari, modern styling aur har customer ke liye perfect fit.`,
    priority: 0.7,
  },
  services: {
    path: "/services",
    title: "Tailoring Services in Alwar | Pant, Shirt, Kurta, Safari Suit | Gupta Tailors",
    description: "Pant, shirt, kurta-pajama, safari suit, pathani suit, shaadi ke kapde, custom silai, ghar par naap, alteration aur suit ki marammat — Alwar mein aapke naap se.",
    priority: 0.9,
  },
  uniforms: {
    path: "/uniforms",
    title: "Uniform Stitching in Alwar | School, Hotel, Corporate Uniforms | Gupta Tailors",
    description: "School, college, hotel, hospital, corporate, security, factory, restaurant aur housekeeping uniform ki silai. Bulk orders, logo aur custom branding ke saath.",
    priority: 0.9,
  },
  process: {
    path: "/process",
    title: "How It Works | Call Se Delivery Tak | Gupta Tailors Alwar",
    description: "Call ya visit, consultation, measurement, trial & fitting aur final delivery — Gupta Tailors mein silai ke aasaan steps.",
    priority: 0.6,
  },
  gallery: {
    path: "/gallery",
    title: "Gallery | Hamara Kaam | Gupta Tailors Alwar",
    description: "Gupta Tailors, Alwar ki silai, suits, uniforms aur dukaan ki jhalkiyan.",
    priority: 0.5,
  },
  contact: {
    path: "/contact",
    title: "Contact Gupta Tailors | Tilak Market, Alwar | +91 93141 53200",
    description: "Tilak Market, Hanuman Burj, Kabir Colony, Alwar mein Gupta Tailors se miliye. Mon–Sun, 9 AM – 10 PM. Call: +91 93141 53200.",
    priority: 0.8,
  },
};

export const KEYWORDS = [
  "tailor in Alwar", "best tailor in Alwar", "gents tailor Alwar", "Gupta Tailors", "Gupta Tailors Alwar",
  "uniform stitching Alwar", "school uniform tailor Alwar", "safari suit stitching", "pathani suit stitching",
  "kurta pajama stitching", "pant shirt stitching", "alteration tailor Alwar", "custom tailoring Alwar",
];

// Next.js `metadata` for one page, with canonical URL and Open Graph/Twitter tags.
export function pageMetadata(key) {
  const { path, title, description } = PAGES[key];
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path },
    twitter: { title, description },
  };
}

// schema.org data for Google: the shop as a local business, plus the website itself.
export const businessJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ClothingStore",
      "@id": `${SITE_URL}/#business`,
      name: SITE_NAME,
      description: PAGES.home.description,
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      image: `${SITE_URL}/logo.png`,
      telephone: `+${PHONE}`,
      priceRange: "₹₹",
      foundingDate: String(FOUNDED_YEAR),
      address: {
        "@type": "PostalAddress",
        streetAddress: ADDRESS_PARTS.street,
        addressLocality: ADDRESS_PARTS.city,
        addressRegion: ADDRESS_PARTS.state,
        postalCode: ADDRESS_PARTS.postalCode,
        addressCountry: ADDRESS_PARTS.country,
      },
      hasMap: MAPS_URL,
      areaServed: { "@type": "City", name: "Alwar" },
      openingHoursSpecification: [{
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "09:00",
        closes: "22:00",
      }],
      sameAs: Object.values(SOCIALS),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "en-IN",
      publisher: { "@id": `${SITE_URL}/#business` },
    },
  ],
};

export function faqJsonLd(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}
