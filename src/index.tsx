import { hydrate, render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import 'assets/styles/base.css';
import Builder from 'components/Builder';
import Prod from 'components/Prod';
import { BuilderProvider } from 'contexts';
import { getComponents } from 'utils/getBuilderComponents';

const App = (): JSX.Element => (
  <BrowserRouter>
    <BuilderProvider components={getComponents()}>
      <Routes>
        <Route path="/" element={<Builder />} />
        <Route path="/prod" element={<Prod />} />
      </Routes>
    </BuilderProvider>
  </BrowserRouter>
);

const rootElement = document.getElementById('root');

if (rootElement?.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
