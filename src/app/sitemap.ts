import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/appointment", "/terms-and-conditions", "/give-away-october-26"].map((p) => ({
    url: `${site.url}${p}`,
  }));
}
