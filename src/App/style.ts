import { styled, Box } from "@mui/material";

export const Container = styled(Box)({
  height: "100vh",
  display: "grid",
  gridTemplateAreas: `"header"
  "app-content"
  "footer"`,
  gridTemplateRows: "min-content auto 80px",
  gridTemplateColumns: "100%",
  gap: "30px"
});
