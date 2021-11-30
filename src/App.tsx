import { FC } from "react";

import AppThemeProvider from "./state/AppTheme";
import Header from "./components/Header";
import Router from "./router";
import Footer from "./components/Footer";
import AppContextProvider from "./state/AppContext";

const App: FC = () => {
  return (
    <AppContextProvider>
      <AppThemeProvider>
        <Header />
        <Router />
        <Footer />
      </AppThemeProvider>
    </AppContextProvider>
  );
};

export default App;
