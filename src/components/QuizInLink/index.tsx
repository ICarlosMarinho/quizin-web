import { FC } from "react";
import { useNavigate } from "react-router";
import { WithChildren } from "../../types";

import { LinkButton } from "./style";

interface ComponentProps {
  to: string;
  disabled?: boolean;
}

const QuizInLink = ({ to, children, disabled }: WithChildren<ComponentProps>) => {
  const navigate = useNavigate();

  const handleClick = () => navigate(to);

  return (
    <LinkButton onClick={handleClick} disabled={disabled}>
      {children}
    </LinkButton>
  );
};

export default QuizInLink;
