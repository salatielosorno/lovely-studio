// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#383838'//'#c2185b', // Rosa fuerte
    },
    secondary: {
      main: '#FFFFFF'//'#f8bbd0', // Rosa claro
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});

export default theme;
