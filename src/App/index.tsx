import { FC } from "react";

import { Container } from "./style";
import Header from "../components/Header";
import Router from "../router";
import Footer from "../components/Footer";
import QuizInLoading from "../components/QuizInLoading";

const App: FC = () => {
  return (
    <Container>
      <QuizInLoading />
      <Header />
      <Router />
      <Footer />
    </Container>
  );
};

export default App;
