'use client'
import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import type { GalleryItem } from "@/data/gallery";

interface Props {
  items: GalleryItem[];
  index: number | null;
  onChange: (i: number | null) => void;
}

const navBtn = { color: "#fff", bgcolor: "rgba(0,0,0,.45)", width: 48, height: 48, "&:hover": { bgcolor: "rgba(0,0,0,.65)" } };

export default function Lightbox({ items, index, onChange }: Props) {
  const touchX = useRef<number | null>(null);
  const open = index !== null;
  const go = useCallback(
    (d: number) => index !== null && onChange((index + d + items.length) % items.length),
    [index, items.length, onChange]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, go]);

  const item = index !== null ? items[index] : null;

  return (
    <Dialog
      open={open}
      onClose={() => onChange(null)}
      fullScreen
      aria-label="Visor de imágenes"
      PaperProps={{ sx: { bgcolor: "rgba(10,8,8,.96)", backgroundImage: "none" } }}
    >
      {item && (
        <div
          className="relative flex h-full w-full flex-col items-center justify-center"
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
            touchX.current = null;
          }}
        >
          <IconButton aria-label="Cerrar" onClick={() => onChange(null)} sx={{ ...navBtn, position: "absolute", top: 12, right: 12, zIndex: 2 }}>
            <CloseIcon />
          </IconButton>
          <div className="relative h-[78vh] w-full max-w-4xl">
            <Image key={item.src} src={item.src} alt={item.alt} fill sizes="100vw" className="object-contain" priority />
          </div>
          <p className="mt-3 px-12 text-center text-sm text-white/80">
            {item.category} · {(index ?? 0) + 1} / {items.length}
          </p>
          {items.length > 1 && (
            <>
              <IconButton aria-label="Anterior" onClick={() => go(-1)} sx={{ ...navBtn, position: "absolute", left: 8, top: "50%" }}>
                <ChevronLeft />
              </IconButton>
              <IconButton aria-label="Siguiente" onClick={() => go(1)} sx={{ ...navBtn, position: "absolute", right: 8, top: "50%" }}>
                <ChevronRight />
              </IconButton>
            </>
          )}
        </div>
      )}
    </Dialog>
  );
}
