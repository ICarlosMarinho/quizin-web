import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import AppContextProvider from "./state/AppContext";
import AppThemeProvider from "./state/AppTheme";

render(
  <BrowserRouter>
    <AppContextProvider>
      <AppThemeProvider>
        <App />
      </AppThemeProvider>
    </AppContextProvider>
  </BrowserRouter>,
  document.getElementById("app-root")
);
