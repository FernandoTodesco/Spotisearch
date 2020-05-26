import React from "react";
import "./layout.scss";

import { AppProvider } from "../../contexts/app-context";

function Layout({ children }) {
  return (
    <div className="app">
      <div className="app__container">
        <AppProvider>
          {children}
        </AppProvider>
      </div>
    </div>
  );
}

export default Layout;
