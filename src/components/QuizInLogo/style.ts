import { styled } from "@mui/material";

export const Heading = styled("h1")(({ theme }) => ({
  fontFamily: "Riffic",
  fontSize: theme.typography.pxToRem(46),
  color: theme.palette.secondary.main,

  "&:hover": {
    cursor: "pointer"
  }
}));

export const LogoColorVariation = styled("span")({
  color: "#F2B624"
});
