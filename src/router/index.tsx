import { createElement, FC } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../views/Home";

const Router: FC = () => (
  <Routes>
    <Route path="/" element={<Home defaultContent />} />
    <Route path="/ready" element={<Home />} />
    <Route path="*" element={createElement("h1", null, ["Not found"])} />
  </Routes>
);

export default Router;
