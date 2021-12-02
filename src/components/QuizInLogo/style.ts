import { styled, Typography } from "@mui/material";

export const Heading = styled(Typography)({
  fontFamily: "Pacifico, Helvetica",
  zIndex: "1",
  "&:hover": {
    cursor: "pointer"
  }
});

export const LogoColorVariation = styled("span")({
  color: "#F2B624"
});
