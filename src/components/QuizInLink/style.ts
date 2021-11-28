import { styled } from "@material-ui/core";

export const LinkButton = styled("button")(({ theme }) => ({
  fontSize: theme.typography.pxToRem(16),
  fontWeight: theme.typography.fontWeightMedium,
  color: theme.palette.background.default,
  fontFamily: theme.typography.fontFamily,
  textTransform: "none",
  backgroundColor: "transparent",
  maxWidth: "fit-content",
  maxHeight: "fit-content",
  border: "none",
  outline: "none",

  "&:hover": {
    cursor: "pointer"
  },

  "&:disabled": {
    opacity: 0.5,
    cursor: "default"
  }
}));
