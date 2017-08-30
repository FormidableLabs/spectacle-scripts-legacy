import React from 'react';
import { render } from "react-dom";
import Presentation from "./presentation";
import registerServiceWorker from './registerServiceWorker';

render(<Presentation/>, document.getElementById("root"));
registerServiceWorker();