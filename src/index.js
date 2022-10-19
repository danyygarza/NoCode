import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "../src/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
//import { ThemeSwitcherProvider } from "react-css-theme-switcher";
const root = ReactDOM.createRoot(document.getElementById("root"));
/*const themes = {
  dark: `${process.env.PUBLIC_URL}/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/light-theme.css`,
};
*/

/*<ThemeSwitcherProvider themeMap={themes} defaultTheme="light"  >
      <App />
    </ThemeSwitcherProvider> */

root.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
