import type { Metadata } from "next";
import CalendlyInline from "./CalendlyInline";

export const metadata: Metadata = { title: "Agendar cita" };

export default function Page() {
  return (
    <section className="section">
      <div className="container-ls">
        <h1 className="section-title mb-6 text-center">Agendar cita</h1>
        <CalendlyInline />
      </div>
    </section>
  );
}
