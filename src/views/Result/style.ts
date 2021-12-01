import { styled, Box, TableContainer, TableCell } from "@mui/material";

export const Container = styled(Box)({
  gridArea: "app-content",
  padding: "20px",
  gap: "30px",
  maxHeight: "400px"
});

export const StyledTableContainer = styled(TableContainer)({
  overflow: "auto"
});

export const StyledTableCell = styled(TableCell)({
  border: "none"
});
