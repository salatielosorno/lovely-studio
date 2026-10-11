'use client'
import { useEffect, useState } from "react";
import { IconButton, Tooltip } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeIcon from "@mui/icons-material/DarkModeOutlined";

type Mode = "light" | "dark";

export default function ThemeToggle() {
  // The inline script in layout.tsx has already set data-theme (saved choice, or OS preference on first visit).
  const [mode, setMode] = useState<Mode>("light");

  useEffect(() => {
    setMode(document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light");
  }, []);

  const toggle = () => {
    const next: Mode = mode === "dark" ? "light" : "dark";
    setMode(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("ls-theme", next);
    } catch {}
  };

  const label = mode === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro";
  const Icon = mode === "dark" ? LightModeIcon : DarkModeIcon;

  return (
    <Tooltip title={label}>
      <IconButton onClick={toggle} aria-label={label} sx={{ color: "var(--ls-text)", width: 44, height: 44 }}>
        <Icon />
      </IconButton>
    </Tooltip>
  );
}
