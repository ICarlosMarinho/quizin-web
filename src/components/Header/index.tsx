import { FC, useContext } from "react";

import { Container } from "./style";
import QuizInLink from "../QuizInLink";
import QuizInLogo from "../QuizInLogo";
import { AppContext } from "../../state/AppContext";

const Header: FC = () => {
  const { lastQuizzes } = useContext(AppContext);

  const disabled = (): boolean => {
    if (lastQuizzes) return lastQuizzes.length == 0;
    else return true;
  };

  return (
    <Container>
      <QuizInLogo />
      <QuizInLink disabled={disabled()} to="/lastQuizzes">
        Last quizzes
      </QuizInLink>
    </Container>
  );
};

export default Header;
