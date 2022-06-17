import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "@mui/material/GlobalStyles";

import App from "./App";
import AppContextProvider from "./state/AppContext";
import AppThemeProvider from "./state/AppTheme";
import ErrorBoundary from "./components/ErrorBoundary";
import styles from "./styles";

const container = document.getElementById("app-root") as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(
  <BrowserRouter>
    <AppContextProvider>
      <AppThemeProvider>
        <ErrorBoundary>
          <GlobalStyles styles={styles} />
          <App />
        </ErrorBoundary>
      </AppThemeProvider>
    </AppContextProvider>
  </BrowserRouter>,
);
