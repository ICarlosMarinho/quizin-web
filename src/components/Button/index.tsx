import { ButtonProps } from "@material-ui/core";
import { FC } from "react";

import { StyledButton, StyleProps } from "./style";

const Button: FC<StyleProps & ButtonProps> = ({ children, ...rest }) => (
  <StyledButton {...rest}>{children}</StyledButton>
);

export default Button;
