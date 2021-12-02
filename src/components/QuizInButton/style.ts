import { Button, styled } from "@mui/material";

export interface StyleProps {
  position?: "left" | "right";
  width?: string;
  height?: string;
}

export const StyledButton = styled(Button)<StyleProps>`
  border-radius: ${(props) => {
    if (props.position == "left") return "5px 0 0 5px";
    else if (props.position == "right") return "0 5px 5px 0";
    else return "5px";
  }};
  text-transform: none;
  width: ${(props) => props.width || "100px"};
  height: ${(props) => props.height || "40px"};
`;
