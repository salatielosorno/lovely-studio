import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/terms-and-conditions"].map((p) => ({
    url: `${site.url}${p}`,
  }));
}
