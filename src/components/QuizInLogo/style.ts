import styled from "@mui/material/styles/styled";
import Typography from "@mui/material/Typography";

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
