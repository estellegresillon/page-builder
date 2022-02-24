import React from "react";
import { hydrate, render } from "react-dom";
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

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
