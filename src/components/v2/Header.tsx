'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { navItems } from "@/lib/site";
import { logoArcs, logoText } from "./logoPaths";
import ThemeToggle from "./ThemeToggle";
import BookButton from "./BookButton";

export function Logo({ className = "h-16" }: { className?: string }) {
  return (
    <Link href="/" aria-label="Lovely Studio, inicio" className="inline-flex">
      <svg viewBox="82 128 322 327" aria-hidden="true" className={`${className} w-auto`} fill="currentColor">
        <path d={logoArcs} fillRule="evenodd" />
        <path d={logoText} />
      </svg>
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = navItems.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-[1100] border-b transition-colors ${
        scrolled ? "border-ls-border bg-ls-bg/90 backdrop-blur" : "border-transparent bg-ls-bg"
      }`}
      style={{ height: "var(--ls-header-h)" }}
    >
      <div className="container-ls flex h-full items-center justify-between">
        <Logo />

        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
          {navItems.map((n) => (
            <a
              key={n.id}
              href={n.href}
              aria-current={active === n.id ? "true" : undefined}
              className={`py-2 text-sm font-medium transition-colors hover:text-ls-accent-strong ${
                active === n.id ? "text-ls-accent-strong underline underline-offset-8 decoration-2" : ""
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <div className="hidden md:block">
            <BookButton className="btn btn-primary !min-h-[44px]" />
          </div>
          <IconButton
            aria-label="Abrir menú"
            onClick={() => setOpen(true)}
            sx={{ display: { md: "none" }, color: "var(--ls-text)", width: 44, height: 44 }}
          >
            <MenuIcon />
          </IconButton>
        </div>
      </div>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{ sx: { width: "min(86vw, 320px)", bgcolor: "var(--ls-bg)", backgroundImage: "none" } }}
      >
        <div className="flex h-full flex-col p-5">
          <div className="flex items-center justify-between">
            <Logo className="h-20" />
            <IconButton aria-label="Cerrar menú" onClick={() => setOpen(false)} sx={{ color: "var(--ls-text)" }}>
              <CloseIcon />
            </IconButton>
          </div>
          <nav aria-label="Móvil" className="mt-8 flex flex-col">
            {navItems.map((n) => (
              <a
                key={n.id}
                href={n.href}
                onClick={() => setOpen(false)}
                className="border-b border-ls-border py-4 font-display text-2xl"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto" onClick={() => setOpen(false)}>
            <BookButton className="btn btn-primary w-full" />
          </div>
        </div>
      </Drawer>
    </header>
  );
}
