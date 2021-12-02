import { FC } from "react";
import { GlobalStyles } from "@mui/material";

const styles = {
  "#app-root": {
    height: "100vh",
    display: "grid",
    gridTemplateAreas: `"header"
    "app-content"
    "footer"`,
    gridTemplateRows: "min-content auto 80px",
    gridTemplateColumns: "100%",
    gap: "30px"
  },

  "@font-face": {
    fontFamily: "Riffic",
    src: "url('../public/riffic.otf') format('otf')"
  },

  "html, body": {
    padding: "0"
  },

  "*": {
    boxSizing: "border-box"
  }
};

const GlobalStyle: FC = () => {
  useStyles();
};
