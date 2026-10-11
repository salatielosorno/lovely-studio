'use client'
import { useEffect, useState } from "react";
import { IconButton, Tooltip } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightnessOutlined";

type Pref = "system" | "light" | "dark";
const order: Pref[] = ["system", "light", "dark"];
const labels: Record<Pref, string> = {
  system: "Tema: automático",
  light: "Tema: claro",
  dark: "Tema: oscuro",
};

function apply(pref: Pref) {
  const dark =
    pref === "dark" ||
    (pref === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
}

export default function ThemeToggle() {
  const [pref, setPref] = useState<Pref>("system");

  useEffect(() => {
    let saved: Pref = "system";
    try {
      const v = localStorage.getItem("ls-theme");
      if (v === "light" || v === "dark") saved = v;
    } catch {}
    setPref(saved);
  }, []);

  useEffect(() => {
    if (pref !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => apply("system");
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [pref]);

  const next = () => {
    const n = order[(order.indexOf(pref) + 1) % order.length];
    setPref(n);
    apply(n);
    try {
      if (n === "system") localStorage.removeItem("ls-theme");
      else localStorage.setItem("ls-theme", n);
    } catch {}
  };

  const Icon = pref === "light" ? LightModeIcon : pref === "dark" ? DarkModeIcon : SettingsBrightnessIcon;

  return (
    <Tooltip title={labels[pref]}>
      <IconButton onClick={next} aria-label={`${labels[pref]}. Cambiar tema`} sx={{ color: "var(--ls-text)", width: 44, height: 44 }}>
        <Icon />
      </IconButton>
    </Tooltip>
  );
}
