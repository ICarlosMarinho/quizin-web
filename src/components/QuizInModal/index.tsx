import { FC } from "react";
import { ModalProps } from "@mui/material";

import { Container } from "./style";

const QuizInModal: FC<ModalProps> = ({ children, ...rest }) => <Container {...rest}>{children}</Container>;

export default QuizInModal;
