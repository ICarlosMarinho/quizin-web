import { FC } from "react";
import { TableRowProps } from "@mui/material/TableRow";

import { Container } from "./style";

const QuizInTableRow: FC<TableRowProps> = ({ children, ...rest }) => (
  <Container {...rest}>{children}</Container>
);

export default QuizInTableRow;
