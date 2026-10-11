'use client'
import { InlineWidget } from "react-calendly";
import { site } from "@/lib/site";

export default function CalendlyInline() {
  return <InlineWidget url={site.calendlyUrl} styles={{ height: "700px" }} />;
}
