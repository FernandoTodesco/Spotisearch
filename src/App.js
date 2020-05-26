import React from "react";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";

import Layout from "./core/layout/layout";
import Pages from "./core/pages/pages";

function App() {
  return (
    <Router>
      <Layout>
        <Pages />
      </Layout>
    </Router>
  );
}

export default App;
