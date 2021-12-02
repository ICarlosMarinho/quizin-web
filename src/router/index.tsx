import { createElement, FC } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../views/Home";
import Result from "../views/Result";
import LastQuizzes from "../views/LastQuizzes";
import Question from "../views/Question";

const Router: FC = () => (
  <Routes>
    <Route path="/" element={<Home defaultContent />} />
    <Route path="/ready" element={<Home />} />
    <Route path="/question/:current" element={<Question />} />
    <Route path="/result" element={<Result />} />
    <Route path="/lastQuizzes" element={<LastQuizzes />} />
    <Route path="*" element={createElement("h1", null, ["Not found"])} />
  </Routes>
);

export default Router;
