import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-ls text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="section-title">Página no encontrada</h1>
        <p className="mt-4 text-ls-muted">La página que buscas no existe o fue movida.</p>
        <Link href="/" className="btn btn-primary mt-8">Volver al inicio</Link>
      </div>
    </section>
  );
}
