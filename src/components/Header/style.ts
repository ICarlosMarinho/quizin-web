import styled from "@mui/material/styles/styled";

export const Container = styled("header")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: "fit-content",
  display: "flex",
  alignItems: "baseline",
  gap: "30px",
  padding: "20px",
  gridArea: "header"
}));
