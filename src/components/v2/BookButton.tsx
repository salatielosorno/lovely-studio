'use client'
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { PopupModal } from "react-calendly";
import { site } from "@/lib/site";

const BookingContext = createContext<() => void>(() => {});

// The Calendly modal lives here (always mounted) so it keeps working when the
// button that opened it unmounts, e.g. when it is inside the closing mobile drawer.
export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [root, setRoot] = useState<HTMLElement | null>(null);
  useEffect(() => setRoot(document.getElementById("rootNode")), []);
  const openBooking = useCallback(() => setOpen(true), []);
  const value = useMemo(() => openBooking, [openBooking]);

  return (
    <BookingContext.Provider value={value}>
      {children}
      {root && (
        <PopupModal
          url={site.calendlyUrl}
          rootElement={root}
          open={open}
          onModalClose={() => setOpen(false)}
        />
      )}
    </BookingContext.Provider>
  );
}

export default function BookButton({
  text = "Agendar cita",
  className = "btn btn-primary",
  onClick,
}: {
  text?: string;
  className?: string;
  onClick?: () => void;
}) {
  const openBooking = useContext(BookingContext);
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        onClick?.();
        openBooking();
      }}
    >
      {text}
    </button>
  );
}
