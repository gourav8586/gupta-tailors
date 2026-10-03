import { ADDRESS_PARTS, FOUNDED_YEAR, MAPS_URL, PHONE, SITE_NAME, SITE_URL, SOCIALS } from "./site";

// One entry per public page: used for <title>, meta description/keywords, canonical URLs and
// sitemap.xml. Titles stay under ~60 characters and descriptions under ~160 so Google shows them in full.
export const PAGES = {
  home: {
    path: "/",
    title: "Gupta Tailors Alwar | Best Tailor in Alwar Since 1979",
    description: `Gupta Tailors, Alwar ke bharosemand tailor ${FOUNDED_YEAR} se. Pant, shirt, kurta, safari suit, shaadi ke kapde aur school-hotel uniform ki silai. Call +91 93141 53200.`,
    keywords: ["tailor in Alwar", "best tailor in Alwar", "gents tailor in Alwar", "Gupta Tailors", "Gupta Tailors Alwar", "tailor near me Alwar", "custom tailoring Alwar", "uniform stitching Alwar", "tailor shop Alwar"],
    priority: 1,
  },
  about: {
    path: "/about",
    title: "About Gupta Tailors | Trusted Tailor in Alwar Since 1979",
    description: `${FOUNDED_YEAR} se Alwar mein Gupta Tailors: teen peedhiyon ka bharosa, traditional kaarigari aur modern fitting. Jaaniye hamari kahani aur kaam karne ka tareeka.`,
    keywords: ["about Gupta Tailors", "trusted tailor in Alwar", "old tailor shop Alwar", "family tailor Alwar", "tailor since 1979", "tailor shop Tilak Market Alwar"],
    priority: 0.7,
  },
  services: {
    path: "/services",
    title: "Tailoring Services in Alwar | Pant, Shirt, Safari Suit",
    description: "Pant, shirt, kurta-pajama, safari suit, pathani suit, shaadi ke kapde, alteration aur ghar par naap. Gupta Tailors, Alwar mein aapke naap se perfect silai.",
    keywords: ["pant stitching Alwar", "shirt stitching Alwar", "kurta pajama stitching Alwar", "safari suit tailor Alwar", "pathani suit stitching Alwar", "wedding dress tailor Alwar", "alteration tailor Alwar", "home measurement tailor Alwar", "suit repair Alwar"],
    priority: 0.9,
  },
  uniforms: {
    path: "/uniforms",
    title: "Uniform Stitching in Alwar | School, Hotel & Office Uniforms",
    description: "School, college, hotel, hospital, corporate, security aur factory uniform ki silai Alwar mein. Bulk orders, logo branding aur time par delivery, Gupta Tailors.",
    keywords: ["uniform stitching Alwar", "school uniform tailor Alwar", "college uniform Alwar", "hotel uniform stitching", "corporate uniform Alwar", "hospital uniform stitching", "security guard uniform Alwar", "bulk uniform order Alwar", "uniform maker Alwar"],
    priority: 0.9,
  },
  process: {
    path: "/process",
    title: "How It Works | Tailoring Process | Gupta Tailors Alwar",
    description: "Call ya visit, consultation, sateek naap, trial & fitting aur time par delivery. Jaaniye Gupta Tailors, Alwar mein silai ke 5 aasaan steps.",
    keywords: ["tailoring process", "custom stitching steps", "measurement tailor Alwar", "trial and fitting tailor", "stitching delivery time Alwar", "how to get clothes stitched"],
    priority: 0.6,
  },
  gallery: {
    path: "/gallery",
    title: "Gallery | Gupta Tailors Alwar Ki Silai Aur Uniforms",
    description: "Gupta Tailors, Alwar ka kaam dekhiye: custom suits, safari suit, pant-shirt, shaadi ke kapde aur school, hotel, hospital uniforms ki silai.",
    keywords: ["Gupta Tailors gallery", "tailor work Alwar", "uniform stitching photos", "safari suit design", "tailor shop Alwar photos"],
    priority: 0.6,
  },
  contact: {
    path: "/contact",
    title: "Contact Gupta Tailors | Tilak Market, Alwar | Call Now",
    description: "Gupta Tailors, Tilak Market, Hanuman Burj, Kabir Colony, Alwar 301001. Mon–Sun, 9 AM – 10 PM. Call +91 93141 53200 ya dukaan par aayein.",
    keywords: ["Gupta Tailors contact", "Gupta Tailors address", "tailor Tilak Market Alwar", "tailor near Hanuman Burj Alwar", "tailor phone number Alwar", "tailor open on Sunday Alwar"],
    priority: 0.8,
  },
};

// Site-wide keywords (root layout default).
export const KEYWORDS = PAGES.home.keywords;

// Next.js `metadata` for one page, with canonical URL and Open Graph/Twitter tags.
export function pageMetadata(key) {
  const { path, title, description, keywords } = PAGES[key];
  return {
    title: { absolute: title },
    description,
    keywords,
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
      founder: { "@type": "Person", name: "Anil Gupta", jobTitle: "Founder & CEO" },
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
