import { FC } from "react";
import { createTheme, ThemeProvider } from "@material-ui/core";
import shadows, { Shadows } from "@mui/material/styles/shadows";

const theme = createTheme(
  {
    palette: {
      primary: {
        main: "#573E8C"
      },
      secondary: {
        main: "#0889A6"
      },
      background: {
        default: "#FDFDFD"
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
      h2: {
        fontSize: "36px",
        fontWeight: "bolder",
        color: "#4C4C4C"
      },
      h3: {
        fontSize: "32px",
        fontWeight: "bold",
        color: "#4C4C4C"
      }
    },
    shadows: shadows.map(() => "none") as Shadows
  },

  {
    palette: {
      tertiary: {
        main: "#F2B624"
      }
    }
  }
);

const AppTheme: FC = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default AppTheme;
