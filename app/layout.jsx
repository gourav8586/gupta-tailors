import Header from "../components/Header";
import Footer from "../components/Footer";
import CallFloat from "../components/CallFloat";
import JsonLd from "../components/JsonLd";
import { KEYWORDS, PAGES, businessJsonLd } from "../lib/seo";
import { GOOGLE_SITE_VERIFICATION, SITE_NAME, SITE_URL } from "../lib/site";
import "./globals.css";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: PAGES.home.title, template: "%s | Gupta Tailors Alwar" },
  description: PAGES.home.description,
  keywords: KEYWORDS,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Tailoring",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  ...(GOOGLE_SITE_VERIFICATION && { verification: { google: GOOGLE_SITE_VERIFICATION } }),
  formatDetection: { telephone: true, address: true },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE_NAME,
    url: "/",
    title: PAGES.home.title,
    description: PAGES.home.description,
    images: [{ url: "/logo.png", alt: "Gupta Tailors — Since 1979. Perfect Fit. Personal Touch." }],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGES.home.title,
    description: PAGES.home.description,
    images: ["/logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport = {
  themeColor: "#7d171b",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PWNHQD9T');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PWNHQD9T" height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <JsonLd data={businessJsonLd} />
        {/* leading-[normal]: legacy pages relied on the browser's default line-height, Preflight sets 1.5 */}
        <div className="overflow-x-clip leading-[normal]">
          <Header />
          <main>{children}</main>
          <Footer />
          <CallFloat />
        </div>
      </body>
    </html>
  );
}
