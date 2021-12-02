import { styled, Modal } from "@mui/material";

export const Container = styled(Modal)(({ theme }) => ({
  backdropFilter: "blur(10px)",
  backgroundColor: `${theme.palette.background.default}44`
}));
