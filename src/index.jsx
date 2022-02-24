import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "assets/styles/base.css";
import Menu from "components/common/Menu";
import Builder from "components/Builder";
import Prod from "components/Prod";
import { BuilderProvider } from "contexts";

const App = () => (
  <BrowserRouter>
    <BuilderProvider>
      <React.Fragment>
        <Menu />
        <Routes>
          <Route exact path="/" element={<Builder />} />
          <Route exact path="/prod" element={<Prod />} />
        </Routes>
      </React.Fragment>
    </BuilderProvider>
  </BrowserRouter>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
