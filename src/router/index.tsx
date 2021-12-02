import { createElement, FC, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../views/Home";
import Result from "../views/Result";
import LastQuizzes from "../views/LastQuizzes";
import Question from "../views/Question";
import { AppContext } from "../state/AppContext";

const Router: FC = () => {
  const { currentQuiz, questionsNumber } = useContext(AppContext);

  return (
    <Routes>
      <Route path="/" element={<Home defaultContent />} />
      <Route path="/ready" element={<Home />} />
      <Route
        path="/question/:current"
        element={!currentQuiz || !questionsNumber ? <Navigate replace to="/" /> : <Question />}
      />
      <Route
        path="/result"
        element={!currentQuiz || !questionsNumber ? <Navigate replace to="/" /> : <Result />}
      />
      <Route path="/lastQuizzes" element={<LastQuizzes />} />
      <Route path="*" element={createElement("h1", null, ["Not found"])} />
    </Routes>
  );
};

export default Router;
