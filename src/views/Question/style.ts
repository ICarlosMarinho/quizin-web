import { styled, Box } from "@material-ui/core";

export const Container = styled(Box)({
  gridArea: "app-content",
  padding: "0 20px",
  display: "flex",
  flexDirection: "column",
  gap: "30px"
});

export const Answer = styled(Box)(({ theme }) => ({
  padding: "10px",
  width: "100%",
  borderRadius: "5px",
  color: theme.palette.text.secondary,

  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    cursor: "pointer",
    color: "#FFF"
  }
}));
