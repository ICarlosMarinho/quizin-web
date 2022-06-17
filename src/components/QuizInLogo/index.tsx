import Tooltip from "@mui/material/Tooltip";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { Heading, LogoColorVariation } from "./style";

const QuizInLogo: FC = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate("/");

  return (
    <Tooltip title="Go to Homepage">
      <Heading variant="h1" onClick={handleClick}>
        Quiz
        <LogoColorVariation>?</LogoColorVariation>
        In
      </Heading>
    </Tooltip>
  );
};

export default QuizInLogo;
