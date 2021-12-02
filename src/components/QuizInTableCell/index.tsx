import { FC } from "react";
import { TableCellProps } from "@mui/material";

import { StyledTableCell } from "./style";

const QuizInTableCell: FC<TableCellProps> = ({ children, ...rest }) => (
  <StyledTableCell {...rest}>{children}</StyledTableCell>
);

export default QuizInTableCell;
