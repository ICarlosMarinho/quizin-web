import { FC } from "react";
import Home from "./views/Home";

import AppTheme from "./state/AppTheme";

const App: FC = () => {
  return (
    <AppTheme>
      <Home />
    </AppTheme>
  );
};

export default App;
