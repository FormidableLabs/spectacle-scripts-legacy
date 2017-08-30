import React from 'react';
import { render } from "react-dom";
import Presentation from "./presentation";
import registerServiceWorker from './registerServiceWorker';

render(<Presentation/>, document.getElementById("root"));

if (module.hot) {
  module.hot.accept('./presentation', () => {
    const NextPresentation = require('./presentation').default;
    render(NextPresentation, document.getElementById("root"));
  });
}

registerServiceWorker();
