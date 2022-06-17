import { FC } from "react";

import Header from "../components/Header";
import Router from "../router";
import Footer from "../components/Footer";
import QuizInLoading from "../components/QuizInLoading";

const App: FC = () => {
  return (
    <>
      <QuizInLoading />
      <Header />
      <Router />
      <Footer />
    </>
  );
};

export default App;
