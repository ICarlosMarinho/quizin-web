import { ButtonProps } from "@mui/material";
import { FC } from "react";

import { StyledButton, StyleProps } from "./style";

const Button: FC<StyleProps & Omit<ButtonProps, "variant">> = ({ children, ...rest }) => (
  <StyledButton variant="contained" {...rest}>
    {children}
  </StyledButton>
);

export default Button;
