import { PAGES } from "../lib/seo";
import { SITE_URL } from "../lib/site";

export const dynamic = "force-static";

export default function sitemap() {
  return Object.values(PAGES).map(({ path, priority }) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
