import markup from "./heroBannerMarkup";

// Original banner artwork (1050x600): logo over a grey gradient with three diagonal photo strips.
export default function HeroBanner({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1050 600"
      role="img"
      aria-label="Lovely Studio: corte de cabello, uñas y maquillaje"
      className={className}
      style={{ display: "block", width: "100%", height: "auto" }}
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}
