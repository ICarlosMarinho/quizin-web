import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import AppContextProvider from "./state/AppContext";
import AppThemeProvider from "./state/AppTheme";
import ErrorBoundary from "./components/ErrorBoundary";

render(
  <BrowserRouter>
    <AppContextProvider>
      <AppThemeProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </AppThemeProvider>
    </AppContextProvider>
  </BrowserRouter>,
  document.getElementById("app-root")
);
