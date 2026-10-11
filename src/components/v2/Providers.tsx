'use client'
import { useEffect } from "react";
import { CssBaseline, ThemeProvider, useColorScheme } from "@mui/material";
import theme from "../../../theme";

// Keeps MUI's color scheme in sync with the `data-theme` attribute set by ThemeToggle.
function ThemeSync() {
  const { setMode } = useColorScheme();
  useEffect(() => {
    const root = document.documentElement;
    const sync = () => setMode(root.getAttribute("data-theme") === "dark" ? "dark" : "light");
    sync();
    const mo = new MutationObserver(sync);
    mo.observe(root, { attributes: true, attributeFilter: ["data-theme"] });
    return () => mo.disconnect();
  }, [setMode]);
  return null;
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <ThemeSync />
      {children}
    </ThemeProvider>
  );
}
