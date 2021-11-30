import { styled } from "@material-ui/core";

export const Container = styled("section")({
  height: "min-content",
  minHeight: "fit-content",
  gridArea: "header"
});

export const HeaderContentArea = styled("header")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: "60px",
  display: "flex",
  alignItems: "baseline",
  gap: "30px",
  padding: "20px 20px 0 20px"
}));

export const PathFront = styled("path")(({ theme }) => ({
  fill: theme.palette.primary.main,
  stroke: "none",
  transform: "translate(0, -286.41665px)"
}));

export const PathBack = styled("path")(({ theme }) => ({
  fill: theme.palette.secondary.main,
  stroke: "none",
  opacity: "0.8",
  transform: "translate(0, -286.41665px)"
}));
