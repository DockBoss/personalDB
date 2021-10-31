import { StrictMode } from "react";
import ReactDOM from "react-dom";
//maybe remove this and figure how to convert it into styled-components for background styles
import './index.css'
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
<App/>
  </StrictMode>,
  rootElement
);

