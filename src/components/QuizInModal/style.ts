import styled from "@mui/material/styles/styled";
import Modal from "@mui/material/Modal";

export const Container = styled(Modal)(({ theme }) => ({
  backdropFilter: "blur(10px)",
  backgroundColor: `${theme.palette.background.default}44`
}));
