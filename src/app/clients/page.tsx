'use client'
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

const Clients = () => {
  const cid = useSearchParams().get("cid");
  return (
    <section className="section">
      <div className="container-ls text-center">
        <h1 className="section-title">¡Bienvenida!</h1>
        <p className="mt-4 text-ls-muted">N° de cliente: {cid ?? "—"}</p>
      </div>
    </section>
  );
};

export default function Page() {
  return (
    <Suspense>
      <Clients />
    </Suspense>
  );
}
