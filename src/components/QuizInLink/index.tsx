import { FC } from "react";
import { useNavigate } from "react-router";

import { LinkButton } from "./style";

interface ComponentProps {
  to: string;
  disabled?: boolean;
}

const QuizInLink: FC<ComponentProps> = ({ to, children, disabled }) => {
  const navigate = useNavigate();

  const handleClick = () => navigate(to);

  return (
    <LinkButton onClick={handleClick} disabled={disabled}>
      {children}
    </LinkButton>
  );
};

export default QuizInLink;
