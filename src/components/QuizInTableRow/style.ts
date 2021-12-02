import { styled, TableRow } from "@mui/material";

export const Container = styled(TableRow)(({ theme, hover }) => ({
  borderRadius: "5px",

  "&:hover, &:hover td": {
    backgroundColor: hover ? theme.palette.primary.main : "transparent",
    cursor: hover ? "pointer" : "default",
    color: hover ? theme.palette.background.default : null
  },

  "&:hover td:first-of-type": {
    borderRadius: "5px 0 0 5px"
  },

  "&:hover td:last-of-type": {
    borderRadius: "0 5px 5px 0"
  }
}));
