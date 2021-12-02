import { FC } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import shadows, { Shadows } from "@mui/material/styles/shadows";

const theme = createTheme({
  palette: {
    primary: {
      main: "#573E8C"
    },
    secondary: {
      main: "#0889A6"
    },
    warning: {
      main: "#BF382C"
    },
    text: {
      primary: "#4C4C4C",
      secondary: "#5B5B5B"
    }
  },
  typography: {
    h1: {
      fontSize: "36px",
      fontWeight: "bolder",
      color: "#0889A6"
    },
    h2: {
      fontSize: "34px",
      fontWeight: "bolder",
      color: "#4C4C4C"
    },
    h3: {
      fontSize: "28px",
      fontWeight: "bold",
      color: "#4C4C4C"
    },
    h4: {
      fontSize: "22px",
      fontWeight: "normal",
      color: "#5B5B5B"
    },
    h6: {
      fontSize: "16px",
      fontWeight: "normal",
      color: "#5B5B5B"
    },
    body2: {
      fontSize: "14px",
      fontWeight: "lighter",
      color: "#5B5B5B"
    }
  },
  shadows: shadows.map(() => "none") as Shadows,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          boxSizing: "border-box",
          margin: "0",
          padding: "0"
        }
      }
    }
  }
});

const AppThemeProvider: FC = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default AppThemeProvider;
