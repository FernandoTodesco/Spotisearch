import React from "react";
import "./layout.scss";

import { AppProvider } from "../../contexts/app-context";

function Layout({ children }) {
  return (
    <div className="app">
      <AppProvider>
        {children}
      </AppProvider>
    </div>
  );
}

export default Layout;
