'use client'
import { useEffect, useState } from "react";
import { PopupButton } from "react-calendly";
import { site } from "@/lib/site";

export default function BookButton({
  text = "Agendar cita",
  className = "btn btn-primary",
}: {
  text?: string;
  className?: string;
}) {
  const [root, setRoot] = useState<HTMLElement | null>(null);
  useEffect(() => setRoot(document.getElementById("rootNode")), []);

  if (!root) {
    return (
      <a href="/appointment" className={className}>
        {text}
      </a>
    );
  }
  return (
    <PopupButton
      url={site.calendlyUrl}
      rootElement={root}
      text={text}
      className={className}
      styles={{ fontFamily: "inherit" }}
    />
  );
}
