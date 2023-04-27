import {StrictMode} from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const renderApp = () => (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<App />} />
    </Routes>
  </BrowserRouter>
);

if (process.env.NODE_ENV === "development") {
   root.render(
    <StrictMode>
      {renderApp()}
    </StrictMode>
   );
} else {
   root.render(renderApp());
}

reportWebVitals();
