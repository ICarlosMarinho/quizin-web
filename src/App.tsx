import { FC } from "react";

import AppTheme from "./state/AppTheme";
import Header from "./components/Header";
import Router from "./router";
import Footer from "./components/Footer";

const App: FC = () => {
  return (
    <AppTheme>
      <Header />
      <Router />
      <Footer />
    </AppTheme>
  );
};

export default App;
