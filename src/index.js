import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import DisplayProvider from "./context/DisplayProvider"
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <DisplayProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DisplayProvider>
)
