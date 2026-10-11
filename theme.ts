import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: { colorSchemeSelector: '[data-theme="%s"]' },
  defaultColorScheme: "light",
  colorSchemes: {
    light: {
      palette: {
        primary: { main: "#b8805f", dark: "#8f5a3f", contrastText: "#ffffff" },
        secondary: { main: "#2b2b2b" },
        background: { default: "#fff9f8", paper: "#ffffff" },
        text: { primary: "#2b2b2b", secondary: "#675f5d" },
        divider: "#eadcd8",
      },
    },
    dark: {
      palette: {
        primary: { main: "#d4a184", dark: "#e0b79f", contrastText: "#1a1413" },
        secondary: { main: "#f5ece9" },
        background: { default: "#161515", paper: "#222020" },
        text: { primary: "#f5ece9", secondary: "#b8aeab" },
        divider: "#363232",
      },
    },
  },
  typography: {
    fontFamily: "var(--font-body), system-ui, sans-serif",
  },
});

export default theme;
