export const PHONE = "919314153200";
export const PHONE_DISPLAY = "+91 93141 53200";
export const FOUNDED_YEAR = 1979;
// Rounded down to a multiple of 5 (47 -> 45, 50 -> 50) so it reads as "45+", "50+", ...
export const yearsSinceFounded = () => Math.floor((new Date().getFullYear() - FOUNDED_YEAR) / 5) * 5;

// Live website address (no trailing slash). Used for canonical URLs, sitemap and robots.txt.
export const SITE_URL = "https://guptatailors.com";
export const SITE_NAME = "Gupta Tailors";
// Google Search Console → "HTML tag" verification: paste only the content="..." value.
export const GOOGLE_SITE_VERIFICATION = "";

export const ADDRESS = "Tilak Market, Hanuman Burj, Kabir Colony, Alwar, Rajasthan, 301001";
export const ADDRESS_PARTS = { street: "Tilak Market, Hanuman Burj, Kabir Colony", city: "Alwar", state: "Rajasthan", postalCode: "301001", country: "IN" };
export const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Gupta Tailors, " + ADDRESS);

export const SOCIALS = {
  facebook: "https://www.facebook.com/people/Gupta-Tailors/61590791699622/",
  instagram: "https://www.instagram.com/gupta.tailors/",
  linkedin: "http://linkedin.com/company/gupta-tailors"
};

// Live Instagram feed, fetched directly from Instagram's own API (no third-party widget).
// One-time setup (free, on Meta's official developer site):
// 1. Go to https://developers.facebook.com/apps → "Create App" → add the "Instagram" product
//    ("API setup with Instagram login").
// 2. Follow its steps to generate a token for the gupta.tailors account. It will give you
//    an "Instagram user ID" and a long-lived "Access Token" — set both as NEXT_PUBLIC_
//    env vars in .env.local (see .env.local.example).
// 3. This token expires after 60 days. Before it expires, open this URL in a browser
//    (with your current token in place of TOKEN) to get a fresh one:
//    https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=TOKEN
//    Copy the new "access_token" from the response into NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN.
export const INSTAGRAM_USER_ID = process.env.NEXT_PUBLIC_INSTAGRAM_USER_ID || "";
export const INSTAGRAM_ACCESS_TOKEN = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN || "";
