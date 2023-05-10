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

/*
TODO: Need to revert to development to enable React Strict Mode
once testing done for AbortController in useEmployee.tsx.
Strict mode with React 18 causing useEfffect to be called twice
and hence the AbortController is being called twice and causing
error in console.
*/
if (process.env.NODE_ENV === "test") {
   root.render(
    <StrictMode>
      {renderApp()}
    </StrictMode>
   );
} else {
   root.render(renderApp());
}

reportWebVitals();
