import { FC } from "react";
import QuizInLink from "../QuizInLink";
import QuizInLogo from "../QuizInLogo";

import { Container, PathFront, PathBack, HeaderContentArea } from "./style";

const Header: FC = () => {
  return (
    <Container>
      <HeaderContentArea>
        <QuizInLogo />
        <QuizInLink to="results">Last results</QuizInLink>
      </HeaderContentArea>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="1 0 336.66666 10.583334">
        <PathBack d="M338.66667 286.41666v10.58333l-191.42156-10.58333Z" />
        <PathFront d="M.00113594 286.41665 0 296.99998l338.60064-10.58333c-96.22109.00001-234.01704 0-338.59950406 0z" />
      </svg>
    </Container>
  );
};

export default Header;