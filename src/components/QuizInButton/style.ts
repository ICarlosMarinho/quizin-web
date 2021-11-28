import { Button, styled } from "@material-ui/core";

export interface StyleProps {
  position: "left" | "right";
  width?: string;
  height?: string;
}

export const StyledButton = styled(Button)<StyleProps>`
  border-radius: ${(props) => (props.position === "left" ? "5px 0 0 5px" : "0 5px 5px 0")};
  text-transform: none;
  width: ${(props) => props.width || "100px"};
  height: ${(props) => props.height || "40px"};
`;
